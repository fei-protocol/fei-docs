# CollateralizationOracleKeeper

> CollateralizationOracleKeeper


a FEI timed minter which only rewards when updating the collateralization oracle 

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

#### DurationUpdate

```javascript
event DurationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

#### FeiMinting

```javascript
event FeiMinting(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| caller indexed | address |  |
| feiAmount | uint256 |  |

#### IncentiveUpdate

```javascript
event IncentiveUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldIncentiveAmount | uint256 |  |
| newIncentiveAmount | uint256 |  |

#### MintAmountUpdate

```javascript
event MintAmountUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMintAmount | uint256 |  |
| newMintAmount | uint256 |  |

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

#### TargetUpdate

```javascript
event TargetUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTarget | address |  |
| newTarget | address |  |

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

#### MAX_MINT_FREQUENCY

```javascript
function MAX_MINT_FREQUENCY() view returns(uint256)
```

> least frequent that mints can happen

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### MAX_RATE_LIMIT_PER_SECOND

```javascript
function MAX_RATE_LIMIT_PER_SECOND() view returns(uint256)
```

> maximum rate limit per second governance can set for this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### MIN_MINT_FREQUENCY

```javascript
function MIN_MINT_FREQUENCY() view returns(uint256)
```

> most frequent that mints can happen

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

#### collateralizationOracleWrapper

```javascript
function collateralizationOracleWrapper() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### mint

```javascript
function mint() nonpayable
```

> triggers a minting of FEI

> timed and incentivized

#### mintAmount

```javascript
function mintAmount() view returns(uint256)
```

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

#### setFrequency

```javascript
function setFrequency(uint256) nonpayable
```

> set the mint frequency

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newFrequency | uint256 |  |

#### setIncentiveAmount

```javascript
function setIncentiveAmount(uint256) nonpayable
```

> set the incentiveAmount

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newIncentiveAmount | uint256 |  |

#### setMintAmount

```javascript
function setMintAmount(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMintAmount | uint256 |  |

#### setRateLimitPerSecond

```javascript
function setRateLimitPerSecond(uint256) nonpayable
```

> set the rate limit per second

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newRateLimitPerSecond | uint256 |  |

#### setTarget

```javascript
function setTarget(address) nonpayable
```

> set the new FEI target

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTarget | address |  |

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

> the target receiving minted FEI

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
