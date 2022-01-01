# LinearTokenTimelock

## Events

#### BeneficiaryUpdate

```javascript
event BeneficiaryUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _beneficiary indexed | address |  |

#### DurationUpdate

```javascript
event DurationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

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

#### TimerReset

```javascript
event TimerReset(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| startTime | uint256 |  |

## Methods

#### acceptBeneficiary

```javascript
function acceptBeneficiary() nonpayable
```

> pending beneficiary accepts new beneficiary

#### alreadyReleasedAmount

```javascript
function alreadyReleasedAmount() view returns(uint256)
```

> amount of tokens released to beneficiary

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### availableForRelease

```javascript
function availableForRelease() view returns(uint256)
```

> amount of held tokens unlocked and available for release

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### beneficiary

```javascript
function beneficiary() view returns(address)
```

> beneficiary of tokens after they are released

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### clawback

```javascript
function clawback() nonpayable
```

#### clawbackAdmin

```javascript
function clawbackAdmin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### cliffSeconds

```javascript
function cliffSeconds() view returns(uint256)
```

> number of seconds before releasing is allowed

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### duration

```javascript
function duration() view returns(uint256)
```

> the duration of the timed period

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### initialBalance

```javascript
function initialBalance() view returns(uint256)
```

> initial balance of lockedToken

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### isTimeEnded

```javascript
function isTimeEnded() view returns(bool)
```

> return true if time period has ended

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isTimeStarted

```javascript
function isTimeStarted() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### lockedToken

```javascript
function lockedToken() view returns(address)
```

> ERC20 basic token contract being held in timelock

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### passedCliff

```javascript
function passedCliff() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### pendingBeneficiary

```javascript
function pendingBeneficiary() view returns(address)
```

> pending beneficiary appointed by current beneficiary

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### release

```javascript
function release(address,uint256) nonpayable
```

> releases `amount` unlocked tokens to address `to`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amount | uint256 |  |

#### releaseMax

```javascript
function releaseMax(address) nonpayable
```

> releases maximum unlocked tokens to address `to`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |

#### remainingTime

```javascript
function remainingTime() view returns(uint256)
```

> number of seconds remaining until time is up

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setPendingBeneficiary

```javascript
function setPendingBeneficiary(address) nonpayable
```

> current beneficiary can appoint new beneficiary, which must be accepted

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pendingBeneficiary | address |  |

#### startTime

```javascript
function startTime() view returns(uint256)
```

> the start timestamp of the timed period

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### timeSinceStart

```javascript
function timeSinceStart() view returns(uint256)
```

> number of seconds since contract was initialized

> will be less than or equal to duration

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### totalToken

```javascript
function totalToken() view returns(uint256)
```

> the total amount of tokens held by timelock

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
