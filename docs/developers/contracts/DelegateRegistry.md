# DelegateRegistry

## Methods

#### clearDelegate

```javascript
function clearDelegate(bytes32) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |

#### delegation

```javascript
function delegation(address,bytes32) view returns(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegator | address |  |
| id | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address |  |

#### setDelegate

```javascript
function setDelegate(bytes32,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | bytes32 |  |
| delegate | address |  |
