[⬅️ Contracts](contracts.md)

# [PCVEquityMinter](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/token/minter/PCVEquityMinter.sol)

> PCVEquityMinter


A FeiTimedMinter that mints based on a percentage of PCV equity

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| pcvEquityMinter | [0x904Deb2Dac1EdfCBBb69b9c279aE5F75E57Cf5E9](https://etherscan.io/address/0x904Deb2Dac1EdfCBBb69b9c279aE5F75E57Cf5E9) |

## Related Contracts


[Core](Core.md), [CollateralizationOracleWrapper](CollateralizationOracleWrapper.md), [BalancerLBPSwapper](BalancerLBPSwapper.md)

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

#### CollateralizationOracleUpdate

```javascript
event CollateralizationOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCollateralizationOracle | address |  |
| newCollateralizationOracle | address |  |

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

#### MAX_APR_BASIS_POINTS

```javascript
function MAX_APR_BASIS_POINTS() view returns(uint256)
```

> The maximum percentage of PCV equity to be minted per year, in basis points 

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### aprBasisPoints

```javascript
function aprBasisPoints() view returns(uint256)
```

> the APR paid out from pcv equity per year expressed in basis points

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

#### collateralizationOracle

```javascript
function collateralizationOracle() view returns(address)
```

> the collateralization oracle used to determine PCV equity

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

> triggers a minting of FEI based on the PCV equity

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

#### setAPRBasisPoints

```javascript
function setAPRBasisPoints(uint256) nonpayable
```

> sets the new APR for determining buyback size from PCV equity

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newAprBasisPoints | uint256 |  |

#### setBufferCap

```javascript
function setBufferCap(uint256) nonpayable
```

> set the buffer cap

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBufferCap | uint256 |  |

#### setCollateralizationOracle

```javascript
function setCollateralizationOracle(address) nonpayable
```

> set the collateralization oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCollateralizationOracle | address |  |

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

[⬅️ Contracts](contracts.md)
