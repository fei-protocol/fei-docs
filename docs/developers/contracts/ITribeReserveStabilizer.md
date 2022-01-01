# ITribeReserveStabilizer

> a Tribe Reserve Stabilizer interface
> 
> Author: Fei Protocol

## Events

#### CollateralizationOracleUpdate

```javascript
event CollateralizationOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCollateralizationOracle indexed | address |  |
| newCollateralizationOracle indexed | address |  |

#### CollateralizationThresholdUpdate

```javascript
event CollateralizationThresholdUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCollateralizationThresholdBasisPoints | uint256 |  |
| newCollateralizationThresholdBasisPoints | uint256 |  |

## Methods

#### collateralizationOracle

```javascript
function collateralizationOracle() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### collateralizationThreshold

```javascript
function collateralizationThreshold() view returns(tuple)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |

#### isCollateralizationBelowThreshold

```javascript
function isCollateralizationBelowThreshold() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### resetOracleDelayCountdown

```javascript
function resetOracleDelayCountdown() nonpayable
```

#### setCollateralizationOracle

```javascript
function setCollateralizationOracle(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCollateralizationOracle | address |  |

#### setCollateralizationThreshold

```javascript
function setCollateralizationThreshold(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCollateralizationThresholdBasisPoints | uint256 |  |

#### startOracleDelayCountdown

```javascript
function startOracleDelayCountdown() nonpayable
```
