# ITimelockedDelegator

> TimelockedDelegator interface
> 
> Author: Fei Protocol

## Events

#### Delegate

```javascript
event Delegate(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _delegatee indexed | address |  |
| _amount | uint256 |  |

#### Undelegate

```javascript
event Undelegate(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _delegatee indexed | address |  |
| _amount | uint256 |  |

## Methods

#### delegate

```javascript
function delegate(address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address |  |
| amount | uint256 |  |

#### delegateAmount

```javascript
function delegateAmount(address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### delegateContract

```javascript
function delegateContract(address) view returns(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### totalDelegated

```javascript
function totalDelegated() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### tribe

```javascript
function tribe() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### undelegate

```javascript
function undelegate(address) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
