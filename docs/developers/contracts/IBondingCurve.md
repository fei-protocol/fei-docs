# IBondingCurve

## Events

#### BufferUpdate

```javascript
event BufferUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBuffer | uint256 |  |
| newBuffer | uint256 |  |

#### DiscountUpdate

```javascript
event DiscountUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDiscount | uint256 |  |
| newDiscount | uint256 |  |

#### MintCapUpdate

```javascript
event MintCapUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMint | uint256 |  |
| newMint | uint256 |  |

#### Purchase

```javascript
event Purchase(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to indexed | address |  |
| amountIn | uint256 |  |
| amountOut | uint256 |  |

#### Reset

```javascript
event Reset(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTotalPurchased | uint256 |  |

#### ScaleUpdate

```javascript
event ScaleUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldScale | uint256 |  |
| newScale | uint256 |  |

## Methods

#### allocate

```javascript
function allocate() nonpayable
```

#### atScale

```javascript
function atScale() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### availableToMint

```javascript
function availableToMint() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### buffer

```javascript
function buffer() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### discount

```javascript
function discount() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getAmountOut

```javascript
function getAmountOut(uint256) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountIn | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountOut | uint256 |  |

#### getCurrentPrice

```javascript
function getCurrentPrice() view returns(tuple)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |

#### mintCap

```javascript
function mintCap() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### purchase

```javascript
function purchase(address,uint256) payable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amountIn | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountOut | uint256 |  |

#### reset

```javascript
function reset() nonpayable
```

#### scale

```javascript
function scale() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setBuffer

```javascript
function setBuffer(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBuffer | uint256 |  |

#### setDiscount

```javascript
function setDiscount(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDiscount | uint256 |  |

#### setIncentiveFrequency

```javascript
function setIncentiveFrequency(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newFrequency | uint256 |  |

#### setMintCap

```javascript
function setMintCap(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMintCap | uint256 |  |

#### setScale

```javascript
function setScale(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newScale | uint256 |  |

#### token

```javascript
function token() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### totalPurchased

```javascript
function totalPurchased() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
