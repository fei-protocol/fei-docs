[⬅️ Contracts](contracts.md)

# [RewardsDistributorAdmin](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/staking/feirari/RewardsDistributorAdmin.sol)


this contract has its own internal ACL. The reasons for doing this and not leveraging core are twofold. One, it simplifies devops operations around adding and removing users, and two, by being self contained, it is more efficient as it does not need to make external calls to figure out who has a particular role.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| rewardsDistributorAdmin | [0x4e979E8b136Cd7BdEBB83ea50a599C3BED1e15c0](https://etherscan.io/address/0x4e979E8b136Cd7BdEBB83ea50a599C3BED1e15c0) |

## Events

#### ContractAdminRoleUpdate

```javascript
event ContractAdminRoleUpdate(bytes32,bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldContractAdminRole indexed | bytes32 |  |
| newContractAdminRole indexed | bytes32 |  |

#### CoreUpdate

```javascript
event CoreUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCore indexed | address |  |
| newCore indexed | address |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

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

#### Unpaused

```javascript
event Unpaused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

## Methods

#### AUTO_REWARDS_DISTRIBUTOR_ROLE

```javascript
function AUTO_REWARDS_DISTRIBUTOR_ROLE() view returns(bytes32)
```

> auto rewards distributor controller role. This role will be given to auto rewards distributor controller smart contracts

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### CONTRACT_ADMIN_ROLE

```javascript
function CONTRACT_ADMIN_ROLE() view returns(bytes32)
```

> a role used with a subset of governor permissions for this contract only

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### DEFAULT_ADMIN_ROLE

```javascript
function DEFAULT_ADMIN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### _acceptAdmin

```javascript
function _acceptAdmin() nonpayable
```

> Accepts transfer of admin rights. msg.sender must be pendingAdmin

> Admin function for pending admin to accept role and update admin

#### _addMarket

```javascript
function _addMarket(address) nonpayable
```

> Add a default market to claim rewards for in `claimRewards()`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market to add |

#### _grantComp

```javascript
function _grantComp(address,uint256) nonpayable
```

> Transfer COMP to the recipient

> Note: If there is not enough COMP, we do not perform the transfer all.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| recipient | address | The address of the recipient to transfer COMP to |
| amount | uint256 | The amount of COMP to (possibly) transfer |

#### _setCompBorrowSpeed

```javascript
function _setCompBorrowSpeed(address,uint256) nonpayable
```

> Set COMP speed for a single market Callable only by users with auto rewards distributor role

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market whose COMP speed to update |
| compSpeed | uint256 |  |

#### _setCompSupplySpeed

```javascript
function _setCompSupplySpeed(address,uint256) nonpayable
```

> Set COMP speed for a single market. Callable only by users with auto rewards distributor role

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market whose COMP speed to update |
| compSpeed | uint256 |  |

#### _setContributorCompSpeed

```javascript
function _setContributorCompSpeed(address,uint256) nonpayable
```

> Set COMP speed for a single contributor

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| contributor | address | The contributor whose COMP speed to update |
| compSpeed | uint256 | New COMP speed for contributor |

#### _setImplementation

```javascript
function _setImplementation(address) nonpayable
```

> Set the implementation contract the RewardsDistributorDelegator delegate calls

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| implementation_ | address | the logic contract address |

#### _setPendingAdmin

```javascript
function _setPendingAdmin(address) nonpayable
```

> Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

> Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newPendingAdmin | address | New pending admin. |

#### becomeAdmin

```javascript
function becomeAdmin() nonpayable
```

> allow admin or governor to assume auto reward distributor admin role

#### compBorrowSpeeds

```javascript
function compBorrowSpeeds(address) view returns(uint256)
```

> view function to get the comp borrow speeds from the rewards distributor contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market to view |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### compSupplySpeeds

```javascript
function compSupplySpeeds(address) view returns(uint256)
```

> view function to get the comp supply speeds from the rewards distributor contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market to view |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### fei

```javascript
function fei() view returns(address)
```

> address of the Fei contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### feiBalance

```javascript
function feiBalance() view returns(uint256)
```

> fei balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getRoleAdmin

```javascript
function getRoleAdmin(bytes32) view returns(bytes32)
```

> Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### getRoleMember

```javascript
function getRoleMember(bytes32,uint256) view returns(address)
```

> Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| index | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getRoleMemberCount

```javascript
function getRoleMemberCount(bytes32) view returns(uint256)
```

> Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### guardianDisableBorrowSpeed

```javascript
function guardianDisableBorrowSpeed(address) nonpayable
```

> Set COMP borrow speed for a single market to 0 Callable only by the guardian or governor

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market whose COMP speed to set to 0 |

#### guardianDisableSupplySpeed

```javascript
function guardianDisableSupplySpeed(address) nonpayable
```

> Set COMP supply speed for a single market to 0 Callable only by the guardian or governor

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market whose COMP speed to set to 0 |

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

#### isContractAdmin

```javascript
function isContractAdmin(address) view returns(bool)
```

> returns whether a given address has the admin role for this contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _admin | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### pause

```javascript
function pause() nonpayable
```

> set pausable methods to paused

#### paused

```javascript
function paused() view returns(bool)
```

> Returns true if the contract is paused, and false otherwise.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### renounceRole

```javascript
function renounceRole(bytes32,address) nonpayable
```

> Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

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

#### rewardsDistributorContract

```javascript
function rewardsDistributorContract() view returns(address)
```

> rewards distributor contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### setContractAdminRole

```javascript
function setContractAdminRole(bytes32) nonpayable
```

> sets a new admin role for this contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newContractAdminRole | bytes32 |  |

#### setCore

```javascript
function setCore(address) nonpayable
```

> set new Core reference address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCore | address | the new core address |

#### supportsInterface

```javascript
function supportsInterface(bytes4) view returns(bool)
```

> See {IERC165-supportsInterface}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| interfaceId | bytes4 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### tribe

```javascript
function tribe() view returns(address)
```

> address of the Tribe contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribeBalance

```javascript
function tribeBalance() view returns(uint256)
```

> tribe balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### unpause

```javascript
function unpause() nonpayable
```

> set pausable methods to unpaused

[⬅️ Contracts](contracts.md)
