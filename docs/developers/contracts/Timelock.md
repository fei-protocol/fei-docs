[⬅️ Contracts](contracts.md)

# [Timelock](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/Timelock.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| rariTimelock | [0x8ace03Fc45139fDDba944c6A4082b604041d19FC](https://etherscan.io/address/0x8ace03Fc45139fDDba944c6A4082b604041d19FC) |

## Related Contracts


[FeiDAO](FeiDAO.md)

## Events

#### CancelTransaction

```javascript
event CancelTransaction(bytes32,address,uint256,string,bytes,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| txHash | bytes32 indexed |  |
| target | address indexed |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

#### ExecuteTransaction

```javascript
event ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| txHash | bytes32 indexed |  |
| target | address indexed |  |
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
| newAdmin | address indexed |  |

#### NewDelay

```javascript
event NewDelay(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDelay | uint256 indexed |  |

#### NewPendingAdmin

```javascript
event NewPendingAdmin(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newPendingAdmin | address indexed |  |

#### QueueTransaction

```javascript
event QueueTransaction(bytes32,address,uint256,string,bytes,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| txHash | bytes32 indexed |  |
| target | address indexed |  |
| value | uint256 |  |
| signature | string |  |
| data | bytes |  |
| eta | uint256 |  |

## Methods

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

[⬅️ Contracts](contracts.md)
