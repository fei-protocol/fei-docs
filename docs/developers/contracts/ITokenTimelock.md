# ITokenTimelock

> TokenTimelock interface
> 
> Author: Fei Protocol

## Events

#### BeneficiaryUpdate

```javascript
event BeneficiaryUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _beneficiary indexed | address |  |

#### PendingBeneficiaryUpdate

```javascript
event PendingBeneficiaryUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pendingBeneficiary indexed | address |  |

#### Release

```javascript
event Release(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _beneficiary indexed | address |  |
| _recipient indexed | address |  |
| _amount | uint256 |  |

## Methods

#### acceptBeneficiary

```javascript
function acceptBeneficiary() nonpayable
```

#### alreadyReleasedAmount

```javascript
function alreadyReleasedAmount() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### availableForRelease

```javascript
function availableForRelease() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### beneficiary

```javascript
function beneficiary() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### initialBalance

```javascript
function initialBalance() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### lockedToken

```javascript
function lockedToken() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### pendingBeneficiary

```javascript
function pendingBeneficiary() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### release

```javascript
function release(address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amount | uint256 |  |

#### releaseMax

```javascript
function releaseMax(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |

#### setPendingBeneficiary

```javascript
function setPendingBeneficiary(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pendingBeneficiary | address |  |

#### totalToken

```javascript
function totalToken() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
