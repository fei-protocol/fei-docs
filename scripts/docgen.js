import { address } from './address.js';
import { permissionsDocs } from './permissions.js';
import natspec from './natspec';

const artifacts = address(); // also generates contract addresses md file
permissionsDocs();

natspec(artifacts);