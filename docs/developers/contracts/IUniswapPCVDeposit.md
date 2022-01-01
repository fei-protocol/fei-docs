# IUniswapPCVDeposit

> a PCV Deposit interface
> 
> Author: Fei Protocol

## Events

#### MaxBasisPointsFromPegLPUpdate

```javascript
event MaxBasisPointsFromPegLPUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMaxBasisPointsFromPegLP | uint256 |  |
| newMaxBasisPointsFromPegLP | uint256 |  |

## Methods

#### liquidityOwned

```javascript
function liquidityOwned() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### maxBasisPointsFromPegLP

```javascript
function maxBasisPointsFromPegLP() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### router

```javascript
function router() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### setMaxBasisPointsFromPegLP

```javascript
function setMaxBasisPointsFromPegLP(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 |  |
