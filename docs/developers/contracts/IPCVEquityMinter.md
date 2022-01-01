# IPCVEquityMinter

> a PCV Equity Minter Interface
> 
> Author: Fei Protocol

## Events

#### APRUpdate

```javascript
event APRUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldAprBasisPoints | uint256 |  |
| newAprBasisPoints | uint256 |  |

#### CollateralizationOracleUpdate

```javascript
event CollateralizationOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCollateralizationOracle | address |  |
| newCollateralizationOracle | address |  |

## Methods

#### MAX_APR_BASIS_POINTS

```javascript
function MAX_APR_BASIS_POINTS() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### aprBasisPoints

```javascript
function aprBasisPoints() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### collateralizationOracle

```javascript
function collateralizationOracle() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### setAPRBasisPoints

```javascript
function setAPRBasisPoints(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newAprBasisPoints | uint256 |  |

#### setCollateralizationOracle

```javascript
function setCollateralizationOracle(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCollateralizationOracle | address |  |
