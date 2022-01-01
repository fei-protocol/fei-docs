import dotenv from 'dotenv';
import fs from 'fs';
import addresses from '../fei-protocol-core/contract-addresses/mainnetAddresses';
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
    'Collateralization' : [],
    'Oracle' : [],
    'Keeper' : [],
    'Rewards' : [],
    'FeiRari' : []
  }

  const title = [['Name', 'Address']];
  const categories = {
    'Core' : title,
    'Governance' : title,
    'Peg' : title,
    'PCV' : title,
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
    artifactName !== 'unknown' && artifactsCategoryMap[category].push(artifactName);

    const address = addresses[key].address;
    const k = artifactName !== 'unknown' ? `[${key}](contracts/${artifactName}.md)` : key
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
    artifactsCategoryMap
  };
}