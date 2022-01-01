# PCVDripController

> a PCV dripping controller
> 
> Author: Fei Protocol

## Events

#### BufferCapUpdate

```javascript
event BufferCapUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBufferCap | uint256 |  |
| newBufferCap | uint256 |  |

#### BufferUsed

```javascript
event BufferUsed(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountUsed | uint256 |  |
| bufferRemaining | uint256 |  |

#### ContractAdminRoleUpdate

```javascript
event ContractAdminRoleUpdate(bytes32,bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldContractAdminRole indexed | bytes32 |  |
| newContractAdminRole indexed | bytes32 |  |

#### CoreUpdate

```javascript
event CoreUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCore indexed | address |  |
| newCore indexed | address |  |

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

#### DurationUpdate

```javascript
event DurationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

#### IncentiveUpdate

```javascript
event IncentiveUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldIncentiveAmount | uint256 |  |
| newIncentiveAmount | uint256 |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### RateLimitPerSecondUpdate

```javascript
event RateLimitPerSecondUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldRateLimitPerSecond | uint256 |  |
| newRateLimitPerSecond | uint256 |  |

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

#### TimerReset

```javascript
event TimerReset(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| startTime | uint256 |  |

#### Unpaused

```javascript
event Unpaused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

## Methods

#### CONTRACT_ADMIN_ROLE

```javascript
function CONTRACT_ADMIN_ROLE() view returns(bytes32)
```

> a role used with a subset of governor permissions for this contract only

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### MAX_RATE_LIMIT_PER_SECOND

```javascript
function MAX_RATE_LIMIT_PER_SECOND() view returns(uint256)
```

> maximum rate limit per second governance can set for this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### buffer

```javascript
function buffer() view returns(uint256)
```

> the amount of action used before hitting limit

> replenishes at rateLimitPerSecond per second up to bufferCap

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### bufferCap

```javascript
function bufferCap() view returns(uint256)
```

> the cap of the buffer that can be used at once

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### doPartialAction

```javascript
function doPartialAction() view returns(bool)
```

> a flag for whether to allow partial actions to complete if the buffer is less than amount

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### drip

```javascript
function drip() nonpayable
```

> drip PCV to target by withdrawing from source

#### dripAmount

```javascript
function dripAmount() view returns(uint256)
```

> amount to drip after each window

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### dripEligible

```javascript
function dripEligible() view returns(bool)
```

> checks whether the target balance is less than the drip amount

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### duration

```javascript
function duration() view returns(uint256)
```

> the duration of the timed period

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### fei

```javascript
function fei() view returns(address)
```

> address of the Fei contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### feiBalance

```javascript
function feiBalance() view returns(uint256)
```

> fei balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### incentiveAmount

```javascript
function incentiveAmount() view returns(uint256)
```

> FEI incentive for calling keeper functions

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### isContractAdmin

```javascript
function isContractAdmin(address) view returns(bool)
```

> returns whether a given address has the admin role for this contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _admin | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

#### lastBufferUsedTime

```javascript
function lastBufferUsedTime() view returns(uint256)
```

> the last time the buffer was used by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### pause

```javascript
function pause() nonpayable
```

> set pausable methods to paused

#### paused

```javascript
function paused() view returns(bool)
```

> Returns true if the contract is paused, and false otherwise.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### rateLimitPerSecond

```javascript
function rateLimitPerSecond() view returns(uint256)
```

> the rate per second for this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### remainingTime

```javascript
function remainingTime() view returns(uint256)
```

> number of seconds remaining until time is up

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setBufferCap

```javascript
function setBufferCap(uint256) nonpayable
```

> set the buffer cap

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBufferCap | uint256 |  |

#### setContractAdminRole

```javascript
function setContractAdminRole(bytes32) nonpayable
```

> sets a new admin role for this contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newContractAdminRole | bytes32 |  |

#### setCore

```javascript
function setCore(address) nonpayable
```

> set new Core reference address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCore | address | the new core address |

#### setDripAmount

```javascript
function setDripAmount(uint256) nonpayable
```

> set the new drip amount

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDripAmount | uint256 |  |

#### setIncentiveAmount

```javascript
function setIncentiveAmount(uint256) nonpayable
```

> set the incentiveAmount

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newIncentiveAmount | uint256 |  |

#### setRateLimitPerSecond

```javascript
function setRateLimitPerSecond(uint256) nonpayable
```

> set the rate limit per second

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newRateLimitPerSecond | uint256 |  |

#### setSource

```javascript
function setSource(address) nonpayable
```

> set the new PCV Deposit source

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newSource | address |  |

#### setTarget

```javascript
function setTarget(address) nonpayable
```

> set the new PCV Deposit target

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTarget | address |  |

#### source

```javascript
function source() view returns(address)
```

> source PCV deposit to withdraw from

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### startTime

```javascript
function startTime() view returns(uint256)
```

> the start timestamp of the timed period

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### target

```javascript
function target() view returns(address)
```

> target address to drip to

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### tribe

```javascript
function tribe() view returns(address)
```

> address of the Tribe contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribeBalance

```javascript
function tribeBalance() view returns(uint256)
```

> tribe balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### unpause

```javascript
function unpause() nonpayable
```

> set pausable methods to unpaused
