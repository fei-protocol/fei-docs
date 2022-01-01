# TimelockController


DEV NOTE: Contract module which acts as a timelocked controller. When set as the owner of an `Ownable` smart contract, it enforces a timelock on all `onlyOwner` maintenance operations. This gives time for users of the controlled contract to exit before a potentially dangerous maintenance operation is applied. By default, this contract is self administered, meaning administration tasks have to go through the timelock process. The proposer (resp executor) role is in charge of proposing (resp executing) operations. A common use case is to position this {TimelockController} as the owner of a smart contract, with a multisig or a DAO as the sole proposer. _Available since v3.3._

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

#### MinDelayChange

```javascript
event MinDelayChange(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

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

## Methods

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

#### cancel

```javascript
function cancel(bytes32) nonpayable
```

> Cancel an operation. Requirements: - the caller must have the 'proposer' role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

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

#### updateDelay

```javascript
function updateDelay(uint256) nonpayable
```

> Changes the minimum timelock duration for future operations. Emits a {MinDelayChange} event. Requirements: - the caller must be the timelock itself. This can only be achieved by scheduling and later executing an operation where the timelock is the target and the data is the ABI-encoded call to this function.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDelay | uint256 |  |
