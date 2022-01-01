# IPCVDripController

> a PCV dripping controller interface
> 
> Author: Fei Protocol

## Events

#### DripAmountUpdate

```javascript
event DripAmountUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDripAmount | uint256 |  |
| newDripAmount | uint256 |  |

#### Dripped

```javascript
event Dripped(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| source indexed | address |  |
| target indexed | address |  |
| amount | uint256 |  |

#### SourceUpdate

```javascript
event SourceUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldSource indexed | address |  |
| newSource indexed | address |  |

#### TargetUpdate

```javascript
event TargetUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTarget indexed | address |  |
| newTarget indexed | address |  |

## Methods

#### drip

```javascript
function drip() nonpayable
```

#### dripAmount

```javascript
function dripAmount() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### dripEligible

```javascript
function dripEligible() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### setDripAmount

```javascript
function setDripAmount(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDripAmount | uint256 |  |

#### setSource

```javascript
function setSource(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newSource | address |  |

#### setTarget

```javascript
function setTarget(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTarget | address |  |

#### source

```javascript
function source() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### target

```javascript
function target() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
