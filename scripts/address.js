import dotenv from 'dotenv';
import fs from 'fs';
import addresses from '../fei-protocol-core/contract-addresses/mainnetAddresses';
import dependencies from '../fei-protocol-core/contract-addresses/dependencies';
import { markdownTable } from './markdown-table.js';

dotenv.config();

const addressDocsPath = 'docs/developers/addresses.md';

export function address() {

  const keys = Object.keys(addresses);

  // Map of artifacts to their category
  const artifacts = {}

  // Map of categories to the list of artifacts it contains
  const artifactsCategoryMap = {
    'Core' : [],
    'Governance' : [],
    'Peg' : [],
    'PCV' : [],
    'PCV_V1': [],
    'Collateralization' : [],
    'Oracle' : [],
    'Keeper' : [],
    'Rewards' : [],
    'FeiRari' : []
  }

  // Map of artifacts to the list of implementations and their etherscan links
  // used for "Mainnet implementations" sections of contract docs
  const artifactImplMap = {}

  // map from artifact name => artifact name Set of dependent artifacts
  // used for "Related Contracts" sections of the contract docs
  const artifactDependencyMap = {}

  const title = [['Name', 'Address']];
  const categories = {
    'Core' : title,
    'Governance' : title,
    'Peg' : title,
    'PCV' : title,
    'PCV_V1': title,
    'Collateralization' : title,
    'Oracle' : title,
    'Keeper' : title,
    'Rewards' : title,
    'FeiRari' : title
  }

  keys.map((key, index) => {
    const category = addresses[key].category;
    if (!categories[category]) {
      // exclude contract categories not listed above
      return;
    }

    const artifactName = addresses[key].artifactName;
    artifacts[artifactName] = category;

    let k = key;
    const address = addresses[key].address;

    // if there is a known artifact, add it to various context maps
    if (artifactName !== 'unknown') {
      artifactsCategoryMap[category].push(artifactName);
      k = `[${key}](contracts/${artifactName}.md)`; // link the contract docs from addresses page

      if (!artifactImplMap[artifactName]) {
        artifactImplMap[artifactName] = [];
      }
      artifactImplMap[artifactName].push([key, `[${address}](https://etherscan.io/address/${address})`]);

      if (!artifactDependencyMap[artifactName]) {
        artifactDependencyMap[artifactName] = new Set();
      }

      // if present in dependencies file, append all dependencies to map
      const deps = dependencies[key] ? dependencies[key].contractDependencies : [];
      for (const dep of deps) {
        const depArtifactName = addresses[dep].artifactName;
        depArtifactName !== 'unknown' && artifactDependencyMap[artifactName].add(depArtifactName);
      }
    }

    // compiling the lists by category for the addresses file
    categories[category] = categories[category].concat([[k, `[${address}](https://etherscan.io/address/${address})`]]);
  });

  const categoryList = Object.keys(categories);
  // convert to markdown tables by category and add
  // TODO: deprecate markdown-table.js in favor of json2md
  for (var i = 0; i < categoryList.length; i++) {
    const category = categoryList[i];
    const str = markdownTable(categories[category]);
    const flag = i === 0 ? 'w' : 'a'; // overwrite only first one, then append
    fs.writeFileSync(addressDocsPath, `## ${category}\n\n\n${str}\n\n\n---\n\n\n`, { encoding: 'utf8', flag: flag});
  }

  console.log(`Done`);
  return {
    artifacts,
    artifactsCategoryMap,
    artifactImplMap,
    artifactDependencyMap
  };
}