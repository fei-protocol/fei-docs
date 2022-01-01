import dotenv from 'dotenv';
import fs from 'fs';
import addresses from '../fei-protocol-core/contract-addresses/mainnetAddresses';
import dependencies from '../fei-protocol-core/contract-addresses/dependencies';
import { markdownTable } from './markdown-table.js';

dotenv.config();

const addressDocsPath = 'docs/developers/addresses.md';

export function address() {

  const keys = Object.keys(addresses);

  const artifacts = {}
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

  const artifactImplMap = {}

  // map from artifact name => artifact name array
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
      return;
    }

    const artifactName = addresses[key].artifactName;
    artifacts[artifactName] = category;

    let k = key;
    const address = addresses[key].address;

    if (artifactName !== 'unknown') {
      artifactsCategoryMap[category].push(artifactName);
      k = `[${key}](contracts/${artifactName}.md)`;

      if (!artifactImplMap[artifactName]) {
        artifactImplMap[artifactName] = [];
      }
      artifactImplMap[artifactName].push([key, `[${address}](https://etherscan.io/address/${address})`]);

      if (!artifactDependencyMap[artifactName]) {
        artifactDependencyMap[artifactName] = new Set();
      }

      const deps = dependencies[key] ? dependencies[key].contractDependencies : [];
      for (const dep of deps) {
        const depArtifactName = addresses[dep].artifactName;
        depArtifactName !== 'unknown' && artifactDependencyMap[artifactName].add(depArtifactName);
      }
    }

    categories[category] = categories[category].concat([[k, `[${address}](https://etherscan.io/address/${address})`]]);
  });

  const categoryList = Object.keys(categories);
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