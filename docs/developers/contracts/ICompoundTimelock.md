# ICompoundTimelock


https://github.com/compound-finance/compound-protocol/blob/master/contracts/Timelock.sol[Compound's timelock] interface

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
|  | uint256 |  |

#### setPendingAdmin

```javascript
function setPendingAdmin(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
