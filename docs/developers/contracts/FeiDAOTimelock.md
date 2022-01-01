[⬅️ Contracts](contracts.md)

# [FeiDAOTimelock](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/FeiDAOTimelock.sol)

> Fei DAO Timelock


Timelock with veto admin roles


DEV NOTE: this timelock has the ability for the Guardian to pause queing or executing proposals, as well as being able to veto specific transactions.  The timelock itself could not unpause the timelock while in paused state.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| feiDAOTimelock | [0xd51dbA7a94e1adEa403553A8235C302cEbF41a3c](https://etherscan.io/address/0xd51dbA7a94e1adEa403553A8235C302cEbF41a3c) |

## Events

#### CancelTransaction

```javascript
event CancelTransaction(bytes32,address,uint256,string,bytes,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| txHash indexed | bytes32 |  |
| target indexed | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

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

#### ExecuteTransaction

```javascript
event ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| txHash indexed | bytes32 |  |
| target indexed | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

#### NewAdmin

```javascript
event NewAdmin(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newAdmin indexed | address |  |

#### NewDelay

```javascript
event NewDelay(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDelay indexed | uint256 |  |

#### NewPendingAdmin

```javascript
event NewPendingAdmin(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newPendingAdmin indexed | address |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### QueueTransaction

```javascript
event QueueTransaction(bytes32,address,uint256,string,bytes,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| txHash indexed | bytes32 |  |
| target indexed | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

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

#### GRACE_PERIOD

```javascript
function GRACE_PERIOD() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### MAXIMUM_DELAY

```javascript
function MAXIMUM_DELAY() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### MINIMUM_DELAY

```javascript
function MINIMUM_DELAY() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### OLD_TIMELOCK

```javascript
function OLD_TIMELOCK() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### ROLLBACK_DEADLINE

```javascript
function ROLLBACK_DEADLINE() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### acceptAdmin

```javascript
function acceptAdmin() nonpayable
```

#### admin

```javascript
function admin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### cancelTransaction

```javascript
function cancelTransaction(address,uint256,string,bytes,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### delay

```javascript
function delay() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### executeTransaction

```javascript
function executeTransaction(address,uint256,string,bytes,uint256) payable returns(bytes)
```

> execute a transaction, with pausability

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes |  |

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

#### getTxHash

```javascript
function getTxHash(address,uint256,string,bytes,uint256) pure returns(bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### governorSetPendingAdmin

```javascript
function governorSetPendingAdmin(address) nonpayable
```

> allow a governor to set a new pending timelock admin

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newAdmin | address |  |

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

#### pendingAdmin

```javascript
function pendingAdmin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### queueTransaction

```javascript
function queueTransaction(address,uint256,string,bytes,uint256) nonpayable returns(bytes32)
```

> queue a transaction, with pausability

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| target | address |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### queuedTransactions

```javascript
function queuedTransactions(bytes32) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### rollback

```javascript
function rollback() nonpayable
```

> one-time option to roll back the Timelock to old timelock

> guardian-only, and expires after the deadline. This function is here as a fallback in case something goes wrong.

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

#### setDelay

```javascript
function setDelay(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delay_ | uint256 |  |

#### setPendingAdmin

```javascript
function setPendingAdmin(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pendingAdmin_ | address |  |

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

#### vetoTransactions

```javascript
function vetoTransactions(address[],uint256[],string[],bytes[],uint256[]) nonpayable
```

> veto a group of transactions

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| signatures | string[] |  |
| datas | bytes[] |  |
| etas | uint256[] |  |

[⬅️ Contracts](contracts.md)
