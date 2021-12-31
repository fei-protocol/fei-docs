import fs from 'fs';
import hre from 'hardhat';
import path from 'path';
import json2md from 'json2md';

// import { HardhatPluginError } from 'hardhat/plugins';

// import {
//   TASK_COMPILE,
// } from 'hardhat/builtin-tasks/task-names';

export default async function (artifacts) {
  const config = {
    path: './docs/developers/contracts',
    clear: false,
    only: Object.keys(artifacts),
    except: ['contracts/mock', 'contracts/external', 'contracts/test'],
    logging: true
  };

  const output = {};

  const outputDirectory = path.resolve(process.cwd(), config.path);

  if (outputDirectory === hre.config.paths.root) {
    throw new Error('resolved path must not be root directory');
  }

  if (config.clear && fs.existsSync(outputDirectory)) {
    fs.rmSync(outputDirectory, { recursive: true });
  }

  const contractNames = await hre.artifacts.getAllFullyQualifiedNames();

  for (const contractName of contractNames) {
    if (config.only.length && !config.only.some((m) => contractName.match(m))) {
      config.logging && console.log(`skipping: ${contractName}`);
      continue;
    }
    if (config.except.length && config.except.some((m) => contractName.match(m))) {
      config.logging && console.log(`skipping: ${contractName}`);
      continue;
    }

    config.logging && console.log(`parsing: ${contractName}`);

    const [source, name] = contractName.split(':');

    const metadata = ((await hre.artifacts.getBuildInfo(contractName)) as any).output.contracts[source][name].metadata;

    const { abi, devdoc, userdoc } = JSON.parse(metadata).output;

    if (!(devdoc && userdoc)) {
      throw new Error(
        'devdoc and/or userdoc not found in compilation artifacts (try running `hardhat compile --force`)'
      );
    }

    const { title, author, details } = devdoc;
    const { notice } = userdoc;

    // derive external signatures from internal types

    const getSigType = function ({ type, components = [] }) {
      return type.replace('tuple', `(${components.map(getSigType).join(',')})`);
    };

    const members = abi.reduce(function (acc, el) {
      // constructor, fallback, and receive do not have names
      const name = el.name || el.type;
      const inputs = el.inputs || [];
      acc[`${name}(${inputs.map(getSigType)})`] = el;
      return acc;
    }, {});

    // associate devdoc and userdoc comments with abi elements

    Object.keys(devdoc.events || {}).forEach(function (sig) {
      Object.assign(members[sig] || {}, devdoc.events[sig]);
    });

    Object.keys(devdoc.stateVariables || {}).forEach(function (name) {
      Object.assign(members[`${name}()`] || {}, devdoc.stateVariables[name], { type: 'stateVariable' });
    });

    Object.keys(devdoc.methods || {}).forEach(function (sig) {
      Object.assign(members[sig] || {}, devdoc.methods[sig]);
    });

    Object.keys(userdoc.events || {}).forEach(function (sig) {
      Object.assign(members[sig] || {}, userdoc.events[sig]);
    });

    Object.keys(userdoc.methods || {}).forEach(function (sig) {
      Object.assign(members[sig] || {}, userdoc.methods[sig]);
    });

    const membersByType = Object.keys(members).reduce(function (acc, sig) {
      const { type } = members[sig];
      acc[type] = acc[type] || {};
      acc[type][sig] = members[sig];
      return acc;
    }, {}) as any;

    const constructor = members[Object.keys(members).find((k) => k.startsWith('constructor('))];
    const { 'fallback()': fallback, 'receive()': receive } = members;

    const data = {
      // metadata
      source,
      name,
      // top-level docs
      title,
      author,
      details,
      notice,
      // special functions
      constructor,
      fallback,
      receive,
      // docs
      events: membersByType.event,
      stateVariables: membersByType.stateVariable,
      methods: membersByType.function
    };
    output[name] = json2md(toMarkdownJson(data));
  }


  const files = Object.keys(output);

  for (const file of files) {
    const path = `${outputDirectory}/${file}.md`;
    config.logging && console.log(`Writing ${path}`);
    fs.writeFileSync(path, output[file],{flag:'w+'});
  }

  const nav = [{'ul': files.map(f => `[${f}](${f}.md)`)}];
  console.log(nav);
  fs.writeFileSync(`${outputDirectory}/contracts.md`, json2md(nav), {flag:'w+'});

  return output;
};

function toMarkdownJson(data) {
  const output = [];

  output.push({ h1: data.name });

  if (data.author) {
    data.title && output.push({ blockquote: `${data.title}\n\nAuthor: ${data.author}` });
  } else {
    data.title && output.push({ blockquote: `${data.title}` });
  }

  data.notice && output.push({ p: data.notice });

  data.details && output.push({ p: `DEV NOTE: ${data.details}` });

  // TODO add constructor, fallback, and receive
  // TODO add more granular docs for events and methods

  const events = data.events;

  if (events) {
    output.push({ h2: 'Events' });

    const eventKeys = Object.keys(events);
    output.push({ ul: eventKeys });
  }

  const methods = data.methods;

  if (methods) {
    output.push({ h2: 'Methods' });
    const methodKeys = Object.keys(methods);

    output.push({ ul: methodKeys });
  }

  return output;
}