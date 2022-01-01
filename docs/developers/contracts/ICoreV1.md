# ICoreV1

> [OLD] Core V1 Interface
> 
> Author: Fei Protocol

## Events

#### FeiUpdate

```javascript
event FeiUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _fei indexed | address |  |

#### GenesisGroupUpdate

```javascript
event GenesisGroupUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _genesisGroup indexed | address |  |

#### GenesisPeriodComplete

```javascript
event GenesisPeriodComplete(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _timestamp | uint256 |  |

#### RoleAdminChanged

```javascript
event RoleAdminChanged(bytes32,bytes32,bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role indexed | bytes32 |  |
| previousAdminRole indexed | bytes32 |  |
| newAdminRole indexed | bytes32 |  |

#### RoleGranted

```javascript
event RoleGranted(bytes32,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role indexed | bytes32 |  |
| account indexed | address |  |
| sender indexed | address |  |

#### RoleRevoked

```javascript
event RoleRevoked(bytes32,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role indexed | bytes32 |  |
| account indexed | address |  |
| sender indexed | address |  |

#### TribeAllocation

```javascript
event TribeAllocation(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _to indexed | address |  |
| _amount | uint256 |  |

#### TribeUpdate

```javascript
event TribeUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _tribe indexed | address |  |

## Methods

#### BURNER_ROLE

```javascript
function BURNER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### GOVERN_ROLE

```javascript
function GOVERN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### GUARDIAN_ROLE

```javascript
function GUARDIAN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### MINTER_ROLE

```javascript
function MINTER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### PCV_CONTROLLER_ROLE

```javascript
function PCV_CONTROLLER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### allocateTribe

```javascript
function allocateTribe(address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amount | uint256 |  |

#### createRole

```javascript
function createRole(bytes32,bytes32) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| adminRole | bytes32 |  |

#### fei

```javascript
function fei() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### genesisGroup

```javascript
function genesisGroup() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getRoleAdmin

```javascript
function getRoleAdmin(bytes32) view returns(bytes32)
```

> Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {AccessControl-_setRoleAdmin}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### grantBurner

```javascript
function grantBurner(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| burner | address |  |

#### grantGovernor

```javascript
function grantGovernor(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| governor | address |  |

#### grantGuardian

```javascript
function grantGuardian(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| guardian | address |  |

#### grantMinter

```javascript
function grantMinter(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| minter | address |  |

#### grantPCVController

```javascript
function grantPCVController(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvController | address |  |

#### grantRole

```javascript
function grantRole(bytes32,address) nonpayable
```

> Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### hasRole

```javascript
function hasRole(bytes32,address) view returns(bool)
```

> Returns `true` if `account` has been granted `role`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### init

```javascript
function init() nonpayable
```

#### isBurner

```javascript
function isBurner(address) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isGovernor

```javascript
function isGovernor(address) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isGuardian

```javascript
function isGuardian(address) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isMinter

```javascript
function isMinter(address) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isPCVController

```javascript
function isPCVController(address) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### renounceRole

```javascript
function renounceRole(bytes32,address) nonpayable
```

> Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### revokeBurner

```javascript
function revokeBurner(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| burner | address |  |

#### revokeGovernor

```javascript
function revokeGovernor(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| governor | address |  |

#### revokeGuardian

```javascript
function revokeGuardian(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| guardian | address |  |

#### revokeMinter

```javascript
function revokeMinter(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| minter | address |  |

#### revokeOverride

```javascript
function revokeOverride(bytes32,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### revokePCVController

```javascript
function revokePCVController(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvController | address |  |

#### revokeRole

```javascript
function revokeRole(bytes32,address) nonpayable
```

> Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### setFei

```javascript
function setFei(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address |  |

#### setGenesisGroup

```javascript
function setGenesisGroup(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address |  |

#### setTribe

```javascript
function setTribe(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address |  |

#### tribe

```javascript
function tribe() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
