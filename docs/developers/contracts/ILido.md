[⬅️ Contracts](contracts.md)

# [ILido](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/lido/EthLidoPCVDeposit.sol)

## Methods

#### decreaseAllowance

```javascript
function decreaseAllowance(address,uint256) nonpayable returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _spender | address |  |
| _subtractedValue | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### getFee

```javascript
function getFee() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getPooledEthByShares

```javascript
function getPooledEthByShares(uint256) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _sharesAmount | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getSharesByPooledEth

```javascript
function getSharesByPooledEth(uint256) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _ethAmount | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getTotalPooledEther

```javascript
function getTotalPooledEther() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getTotalShares

```javascript
function getTotalShares() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### increaseAllowance

```javascript
function increaseAllowance(address,uint256) nonpayable returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _spender | address |  |
| _addedValue | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### sharesOf

```javascript
function sharesOf(address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _account | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### submit

```javascript
function submit(address) payable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| referral | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

[⬅️ Contracts](contracts.md)
