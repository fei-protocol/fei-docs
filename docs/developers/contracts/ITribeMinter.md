# ITribeMinter

> TribeMinter interface
> 
> Author: Fei Protocol

## Events

#### AnnualMaxInflationUpdate

```javascript
event AnnualMaxInflationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldAnnualMaxInflationBasisPoints | uint256 |  |
| newAnnualMaxInflationBasisPoints | uint256 |  |

#### TribeRewardsDripperUpdate

```javascript
event TribeRewardsDripperUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTribeRewardsDripper indexed | address |  |
| newTribeRewardsDripper indexed | address |  |

#### TribeTreasuryUpdate

```javascript
event TribeTreasuryUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTribeTreasury indexed | address |  |
| newTribeTreasury indexed | address |  |

## Methods

#### annualMaxInflationBasisPoints

```javascript
function annualMaxInflationBasisPoints() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### idealBufferCap

```javascript
function idealBufferCap() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### isPokeNeeded

```javascript
function isPokeNeeded() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### mint

```javascript
function mint(address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amount | uint256 |  |

#### poke

```javascript
function poke() nonpayable
```

#### setAnnualMaxInflationBasisPoints

```javascript
function setAnnualMaxInflationBasisPoints(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newAnnualMaxInflationBasisPoints | uint256 |  |

#### setMinter

```javascript
function setMinter(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMinter | address |  |

#### setTribeRewardsDripper

```javascript
function setTribeRewardsDripper(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTribeRewardsDripper | address |  |

#### setTribeTreasury

```javascript
function setTribeTreasury(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTribeTreasury | address |  |

#### totalSupply

```javascript
function totalSupply() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### tribeCirculatingSupply

```javascript
function tribeCirculatingSupply() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### tribeRewardsDripper

```javascript
function tribeRewardsDripper() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribeTreasury

```javascript
function tribeTreasury() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
