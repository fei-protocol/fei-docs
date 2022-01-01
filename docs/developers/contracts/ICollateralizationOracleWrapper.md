# ICollateralizationOracleWrapper

> Collateralization ratio oracle interface for Fei Protocol
> 
> Author: Fei Protocol

## Events

#### CachedValueUpdate

```javascript
event CachedValueUpdate(address,uint256,uint256,int256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address |  |
| protocolControlledValue indexed | uint256 |  |
| userCirculatingFei indexed | uint256 |  |
| protocolEquity indexed | int256 |  |

#### CollateralizationOracleUpdate

```javascript
event CollateralizationOracleUpdate(address,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address |  |
| oldOracleAddress indexed | address |  |
| newOracleAddress indexed | address |  |

#### DeviationThresholdUpdate

```javascript
event DeviationThresholdUpdate(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address |  |
| oldThreshold indexed | uint256 |  |
| newThreshold indexed | uint256 |  |

#### ReadPauseOverrideUpdate

```javascript
event ReadPauseOverrideUpdate(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| readPauseOverride | bool |  |

#### Update

```javascript
event Update(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _peg | uint256 |  |

## Methods

#### cachedProtocolControlledValue

```javascript
function cachedProtocolControlledValue() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### cachedProtocolEquity

```javascript
function cachedProtocolEquity() view returns(int256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | int256 |  |

#### cachedUserCirculatingFei

```javascript
function cachedUserCirculatingFei() view returns(uint256)
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

#### deviationThresholdBasisPoints

```javascript
function deviationThresholdBasisPoints() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### isExceededDeviationThreshold

```javascript
function isExceededDeviationThreshold() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isOutdated

```javascript
function isOutdated() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isOutdatedOrExceededDeviationThreshold

```javascript
function isOutdatedOrExceededDeviationThreshold() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isOvercollateralized

```javascript
function isOvercollateralized() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### pcvStats

```javascript
function pcvStats() view returns(uint256,uint256,int256,bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 |  |
| userCirculatingFei | uint256 |  |
| protocolEquity | int256 |  |
| validityStatus | bool |  |

#### pcvStatsCurrent

```javascript
function pcvStatsCurrent() view returns(uint256,uint256,int256,bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 |  |
| userCirculatingFei | uint256 |  |
| protocolEquity | int256 |  |
| validityStatus | bool |  |

#### read

```javascript
function read() view returns(tuple,bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |
|  | bool |  |

#### readPauseOverride

```javascript
function readPauseOverride() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### setCache

```javascript
function setCache(uint256,uint256,int256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 |  |
| userCirculatingFei | uint256 |  |
| protocolEquity | int256 |  |

#### setCollateralizationOracle

```javascript
function setCollateralizationOracle(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _newCollateralizationOracle | address |  |

#### setDeviationThresholdBasisPoints

```javascript
function setDeviationThresholdBasisPoints(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _newDeviationThresholdBasisPoints | uint256 |  |

#### setReadPauseOverride

```javascript
function setReadPauseOverride(bool) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newReadPauseOverride | bool |  |

#### setValidityDuration

```javascript
function setValidityDuration(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _validityDuration | uint256 |  |

#### update

```javascript
function update() nonpayable
```

#### updateIfOutdated

```javascript
function updateIfOutdated() nonpayable
```
