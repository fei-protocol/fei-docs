import dotenv from 'dotenv';
import fs from 'fs';
import { permissions } from '../fei-protocol-core/contract-addresses/permissions';
import addresses from '../fei-protocol-core/contract-addresses/mainnetAddresses';
import { markdownTable } from './markdown-table.js';

dotenv.config();

const permissionsDocsPath = 'docs/developers/permissions.md';

export function permissionsDocs() {

  const title = [['Name', 'Address']];
  const categories = {}

  const categoryList = Object.keys(permissions);
  for (var i = 0; i < categoryList.length; i++) {
    const category = categoryList[i];
    if (!categories[category]) {
      categories[category] = title;
    }
    const contracts = permissions[categoryList[i]];

    contracts.map((key, index) => {
      const address = addresses[key].address;
      const artifactName = addresses[key].artifactName;

      let k = key;
      if (artifactName !== 'unknown') {
        k = `[${key}](contracts/${artifactName}.md)`;
      }
      categories[category] = categories[category].concat([[k, `[${address}](https://etherscan.io/address/${address})`]]);
    });

    const str = markdownTable(categories[category]);
    const flag = i === 0 ? 'w' : 'a'; // overwrite only first one, then append
    fs.writeFileSync(permissionsDocsPath, `## ${category}\n\n\n${str}\n\n\n---\n\n\n`, { encoding: 'utf8', flag: flag});
  }

  console.log(`Done`);
}