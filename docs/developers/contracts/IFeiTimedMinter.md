# IFeiTimedMinter

> a Fei Timed Minter
> 
> Author: Fei Protocol

## Events

#### FeiMinting

```javascript
event FeiMinting(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| caller indexed | address |  |
| feiAmount | uint256 |  |

#### MintAmountUpdate

```javascript
event MintAmountUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMintAmount | uint256 |  |
| newMintAmount | uint256 |  |

#### TargetUpdate

```javascript
event TargetUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTarget | address |  |
| newTarget | address |  |

## Methods

#### MAX_MINT_FREQUENCY

```javascript
function MAX_MINT_FREQUENCY() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### MIN_MINT_FREQUENCY

```javascript
function MIN_MINT_FREQUENCY() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### mint

```javascript
function mint() nonpayable
```

#### mintAmount

```javascript
function mintAmount() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setFrequency

```javascript
function setFrequency(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newFrequency | uint256 |  |

#### setMintAmount

```javascript
function setMintAmount(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMintAmount | uint256 |  |

#### setTarget

```javascript
function setTarget(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTarget | address |  |

#### target

```javascript
function target() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
