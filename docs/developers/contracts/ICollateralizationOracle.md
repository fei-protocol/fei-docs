# ICollateralizationOracle

> Collateralization ratio oracle interface for Fei Protocol
> 
> Author: Fei Protocol

## Events

#### Update

```javascript
event Update(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _peg | uint256 |  |

## Methods

#### isOutdated

```javascript
function isOutdated() view returns(bool)
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

#### read

```javascript
function read() view returns(tuple,bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |
|  | bool |  |

#### update

```javascript
function update() nonpayable
```
