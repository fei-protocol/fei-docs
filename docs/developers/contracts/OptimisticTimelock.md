[⬅️ Contracts](contracts.md)

# [OptimisticTimelock](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/OptimisticTimelock.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| optimisticTimelock | [0xbC9C084a12678ef5B516561df902fdc426d95483](https://etherscan.io/address/0xbC9C084a12678ef5B516561df902fdc426d95483) |

## Related Contracts


[Core](Core.md), [RewardsDistributorAdmin](RewardsDistributorAdmin.md), [TribalChiefSyncV2](TribalChiefSyncV2.md), [Unitroller](Unitroller.md), [OwnableTimedMinter](OwnableTimedMinter.md), [TribalChief](TribalChief.md), [CollateralizationOracle](CollateralizationOracle.md), [CollateralizationOracleWrapper](CollateralizationOracleWrapper.md), [NamedStaticPCVDepositWrapper](NamedStaticPCVDepositWrapper.md), [VotiumBriber](VotiumBriber.md)

## Events

#### CallExecuted

```javascript
event CallExecuted(bytes32,uint256,address,uint256,bytes)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id indexed | bytes32 |  |
| index indexed | uint256 |  |
| target | address |  |
| value | uint256 |  |
| data | bytes |  |

#### CallScheduled

```javascript
event CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id indexed | bytes32 |  |
| index indexed | uint256 |  |
| target | address |  |
| value | uint256 |  |
| data | bytes |  |
| predecessor | bytes32 |  |
| delay | uint256 |  |

#### Cancelled

```javascript
event Cancelled(bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id indexed | bytes32 |  |

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

#### MinDelayChange

```javascript
event MinDelayChange(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

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

#### EXECUTOR_ROLE

```javascript
function EXECUTOR_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### PROPOSER_ROLE

```javascript
function PROPOSER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### TIMELOCK_ADMIN_ROLE

```javascript
function TIMELOCK_ADMIN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### becomeAdmin

```javascript
function becomeAdmin() nonpayable
```

> allow guardian or governor to assume timelock admin roles This more elegantly achieves optimistic timelock as follows: - veto: grant self PROPOSER_ROLE and cancel - pause proposals: revoke PROPOSER_ROLE from target - pause execution: revoke EXECUTOR_ROLE from target - set new proposer: revoke old proposer and add new one In addition it allows for much more granular and flexible access for multisig operators

#### cancel

```javascript
function cancel(bytes32) nonpayable
```

> Cancel an operation. Requirements: - the caller must have the 'proposer' role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### execute

```javascript
function execute(address,uint256,bytes,bytes32,bytes32) payable
```

> Execute an (ready) operation containing a single transaction. Emits a {CallExecuted} event. Requirements: - the caller must have the 'executor' role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| data | bytes |  |
| predecessor | bytes32 |  |
| salt | bytes32 |  |

#### executeBatch

```javascript
function executeBatch(address[],uint256[],bytes[],bytes32,bytes32) payable
```

> Execute an (ready) operation containing a batch of transactions. Emits one {CallExecuted} event per transaction in the batch. Requirements: - the caller must have the 'executor' role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| datas | bytes[] |  |
| predecessor | bytes32 |  |
| salt | bytes32 |  |

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

#### getMinDelay

```javascript
function getMinDelay() view returns(uint256)
```

> Returns the minimum delay for an operation to become valid. This value can be changed by executing an operation that calls `updateDelay`.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| duration | uint256 |  |

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

#### getTimestamp

```javascript
function getTimestamp(bytes32) view returns(uint256)
```

> Returns the timestamp at with an operation becomes ready (0 for unset operations, 1 for done operations).

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| timestamp | uint256 |  |

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

#### hashOperation

```javascript
function hashOperation(address,uint256,bytes,bytes32,bytes32) pure returns(bytes32)
```

> Returns the identifier of an operation containing a single transaction.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| data | bytes |  |
| predecessor | bytes32 |  |
| salt | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| hash | bytes32 |  |

#### hashOperationBatch

```javascript
function hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32) pure returns(bytes32)
```

> Returns the identifier of an operation containing a batch of transactions.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| datas | bytes[] |  |
| predecessor | bytes32 |  |
| salt | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| hash | bytes32 |  |

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

#### isOperation

```javascript
function isOperation(bytes32) view returns(bool)
```

> Returns whether an id correspond to a registered operation. This includes both Pending, Ready and Done operations.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| pending | bool |  |

#### isOperationDone

```javascript
function isOperationDone(bytes32) view returns(bool)
```

> Returns whether an operation is done or not.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| done | bool |  |

#### isOperationPending

```javascript
function isOperationPending(bytes32) view returns(bool)
```

> Returns whether an operation is pending or not.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| pending | bool |  |

#### isOperationReady

```javascript
function isOperationReady(bytes32) view returns(bool)
```

> Returns whether an operation is ready or not.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| ready | bool |  |

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

#### schedule

```javascript
function schedule(address,uint256,bytes,bytes32,bytes32,uint256) nonpayable
```

> Schedule an operation containing a single transaction. Emits a {CallScheduled} event. Requirements: - the caller must have the 'proposer' role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| data | bytes |  |
| predecessor | bytes32 |  |
| salt | bytes32 |  |
| delay | uint256 |  |

#### scheduleBatch

```javascript
function scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256) nonpayable
```

> Schedule an operation containing a batch of transactions. Emits one {CallScheduled} event per transaction in the batch. Requirements: - the caller must have the 'proposer' role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| datas | bytes[] |  |
| predecessor | bytes32 |  |
| salt | bytes32 |  |
| delay | uint256 |  |

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

#### updateDelay

```javascript
function updateDelay(uint256) nonpayable
```

> Changes the minimum timelock duration for future operations. Emits a {MinDelayChange} event. Requirements: - the caller must be the timelock itself. This can only be achieved by scheduling and later executing an operation where the timelock is the target and the data is the ABI-encoded call to this function.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDelay | uint256 |  |

[⬅️ Contracts](contracts.md)
