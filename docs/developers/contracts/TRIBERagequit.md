# TRIBERagequit

> Contract to exchange TRIBE with FEI post-merger
> 
> Author: elee, Joey Santoro


Exchange TRIBE for FEI at Intrinsic Value (semi-manually set) Intrinsic Value = equity / circulating TRIBE. equity = PCV - user FEI circulating TRIBE = total supply - treasury - liquidity mining

## Events

#### Accept

```javascript
event Accept(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| dao indexed | address |  |

#### Enabled

```javascript
event Enabled(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| caller indexed | address |  |

#### Exchange

```javascript
event Exchange(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from indexed | address |  |
| amountIn | uint256 |  |
| amountOut | uint256 |  |

## Methods

#### bothPartiesAccepted

```javascript
function bothPartiesAccepted() view returns(bool)
```

> tells whether or not both parties have accepted the deal

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### claimed

```javascript
function claimed(address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### coreAddress

```javascript
function coreAddress() view returns(address)
```

> tribe treasury, removed from circulating supply

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### exchangeRate

```javascript
function exchangeRate(uint256) view returns(uint256)
```

> recalculate the exchange amount using the protocolEquity

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolEquity | uint256 | the protocol equity |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### fei

```javascript
function fei() view returns(address)
```

> you already know

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getCirculatingTribe

```javascript
function getCirculatingTribe() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### guardian

```javascript
function guardian() view returns(address)
```

> guardian multisig, sets the IV before DAO vote

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### intrinsicValueExchangeRateBase

```javascript
function intrinsicValueExchangeRateBase() view returns(uint256)
```

> Intrinsic value exchange rate (IV), scaled by 1e9

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### merkleRoot

```javascript
function merkleRoot() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### ngmi

```javascript
function ngmi(uint256,uint256,bytes32[]) nonpayable
```

> ragequit held TRIBE with FEI

> not gonna make it

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 | the amount to redeem in TRIBE |
| totalMerkleAmount | uint256 | the amount of TRIBE allocated to the caller in the merkle drop |
| merkleProof | bytes32[] | a proof proving that the caller may redeem up to `totalMerkleAmount` amount of tribe |

#### rageQuitEnd

```javascript
function rageQuitEnd() view returns(uint256)
```

> last timestamp for ragequit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### rageQuitStart

```javascript
function rageQuitStart() view returns(uint256)
```

> first timestamp for ragequit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### rewardsDripper

```javascript
function rewardsDripper() view returns(address)
```

> tribe liquidity mining dripper, removed from circulating supply

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### rgt

```javascript
function rgt() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### rgtAccept

```javascript
function rgtAccept() nonpayable
```

> function for the rari timelock to accept the deal

#### rgtAccepted

```javascript
function rgtAccepted() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### rgtTimelock

```javascript
function rgtTimelock() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### scalar

```javascript
function scalar() view returns(uint256)
```

> the granularity of the exchange rate

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setBothPartiesAccepted

```javascript
function setBothPartiesAccepted() nonpayable
```

> make sure Tribe rari timelock is active

#### setExchangeRate

```javascript
function setExchangeRate(uint256) nonpayable returns(uint256)
```

> Update the exchange rate based on protocol equity

> only callable once by guardian

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolEquity | uint256 | the protocol equity |

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

#### tribeAccept

```javascript
function tribeAccept() nonpayable
```

> function for the tribe timelock to accept the deal

#### tribeAccepted

```javascript
function tribeAccepted() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### tribeRariDAO

```javascript
function tribeRariDAO() view returns(address)
```

> the new DAO to assume governance for rgtTimelock

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribeTimelock

```javascript
function tribeTimelock() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
