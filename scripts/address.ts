// const dotenv = require('dotenv');
// const fs = require('fs');
// const { markdownTable } = require('markdown-table');

import dotenv from 'dotenv';
import fs from 'fs';
import { markdownTable } from 'markdown-table';

dotenv.config();

const protocolDir = process.env.PROTOCOL_DIR || '';
const addressPath = process.env.ADDRESS_PATH || '';
const addressDocsPath = process.env.ADDRESS_DOCS_PATH || '';

const contract = import(`${protocolDir + addressPath}`);
contract.then((result) => {

  const keys = Object.keys(result);
  const table = keys.map((key, index) => {
    return [key, result[key].address];
  });
  const str = markdownTable(table);
  fs.writeFileSync(addressDocsPath, str, 'utf8');
  console.log(`Done`);
});


