[⬅️ Contracts](contracts.md)

# [CollateralizationOracleWrapper](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/collateralization/CollateralizationOracleWrapper.sol)

> Fei Protocol's Collateralization Oracle
> 
> Author: eswak


Reads a list of PCVDeposit that report their amount of collateral         and the amount of protocol-owned FEI they manage, to deduce the         protocol-wide collateralization ratio.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| collateralizationOracleWrapper | [0xd1866289B4Bd22D453fFF676760961e0898EE9BF](https://etherscan.io/address/0xd1866289B4Bd22D453fFF676760961e0898EE9BF) |
| collateralizationOracleWrapperImpl | [0x656aA9c9875eB089b11869d4730d6963D25E76ad](https://etherscan.io/address/0x656aA9c9875eB089b11869d4730d6963D25E76ad) |

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

#### DurationUpdate

```javascript
event DurationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### ReadPauseOverrideUpdate

```javascript
event ReadPauseOverrideUpdate(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| readPauseOverride | bool |  |

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

#### Update

```javascript
event Update(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _peg | uint256 |  |

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

#### cachedProtocolControlledValue

```javascript
function cachedProtocolControlledValue() view returns(uint256)
```

> cached value of the Protocol Controlled Value

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### cachedProtocolEquity

```javascript
function cachedProtocolEquity() view returns(int256)
```

> cached value of the Protocol Equity

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | int256 |  |

#### cachedUserCirculatingFei

```javascript
function cachedUserCirculatingFei() view returns(uint256)
```

> cached value of the User Circulating FEI

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### collateralizationOracle

```javascript
function collateralizationOracle() view returns(address)
```

> address of the CollateralizationOracle to memoize

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

#### deviationThresholdBasisPoints

```javascript
function deviationThresholdBasisPoints() view returns(uint256)
```

> deviation threshold to consider cached values outdated, in basis         points (base 10_000)

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

#### initialize

```javascript
function initialize(address,address,uint256,uint256) nonpayable
```

> CollateralizationOracleWrapper initializer

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _core | address | Fei Core for reference. |
| _collateralizationOracle | address | the CollateralizationOracle to inspect. |
| _validityDuration | uint256 | the duration after which a reading becomes outdated. |
| _deviationThresholdBasisPoints | uint256 | threshold for deviation after which        keepers should call the update() function. |

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

#### isExceededDeviationThreshold

```javascript
function isExceededDeviationThreshold() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| obsolete | bool |  |

#### isOutdated

```javascript
function isOutdated() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| outdated | bool |  |

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

> returns true if the protocol is overcollateralized. Overcollateralization         is defined as the protocol having more assets in its PCV (Protocol         Controlled Value) than the circulating (user-owned) FEI, i.e.         a positive Protocol Equity.

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

#### pcvStats

```javascript
function pcvStats() view returns(uint256,uint256,int256,bool)
```

> returns the Protocol-Controlled Value, User-circulating FEI, and         Protocol Equity. If there is a fresh cached value, return it.         Otherwise, call the CollateralizationOracle to get fresh data.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 | : the total USD value of all assets held         by the protocol. |
| userCirculatingFei | uint256 | : the number of FEI not owned by the protocol. |
| protocolEquity | int256 | : the difference between PCV and user circulating FEI.         If there are more circulating FEI than $ in the PCV, equity is 0. |
| validityStatus | bool | : the current oracle validity status (false if any         of the oracles for tokens held in the PCV are invalid, or if         this contract is paused). |

#### pcvStatsCurrent

```javascript
function pcvStatsCurrent() view returns(uint256,uint256,int256,bool)
```

> returns the Protocol-Controlled Value, User-circulating FEI, and         Protocol Equity, from an actual fresh call to the CollateralizationOracle.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 | : the total USD value of all assets held         by the protocol. |
| userCirculatingFei | uint256 | : the number of FEI not owned by the protocol. |
| protocolEquity | int256 | : the difference between PCV and user circulating FEI.         If there are more circulating FEI than $ in the PCV, equity is 0. |
| validityStatus | bool | : the current oracle validity status (false if any         of the oracles for tokens held in the PCV are invalid, or if         this contract is paused). |

#### read

```javascript
function read() view returns(tuple,bool)
```

> Get the current collateralization ratio of the protocol, from cache.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| collateralRatio | tuple | the current collateral ratio of the protocol. |
| validityStatus | bool | the current oracle validity status (false if any         of the oracles for tokens held in the PCV are invalid, or if         this contract is paused). |

#### readPauseOverride

```javascript
function readPauseOverride() view returns(bool)
```

> a flag to override pause behavior for reads

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### remainingTime

```javascript
function remainingTime() view returns(uint256)
```

> number of seconds remaining until time is up

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setCache

```javascript
function setCache(uint256,uint256,int256) nonpayable
```

> governor or admin override to directly write to the cache

> used in emergencies where the underlying oracle is compromised or failing

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _cachedProtocolControlledValue | uint256 |  |
| _cachedUserCirculatingFei | uint256 |  |
| _cachedProtocolEquity | int256 |  |

#### setCollateralizationOracle

```javascript
function setCollateralizationOracle(address) nonpayable
```

> set the address of the CollateralizationOracle to inspect, and to cache values from.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _newCollateralizationOracle | address | the address of the new oracle. |

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

#### setDeviationThresholdBasisPoints

```javascript
function setDeviationThresholdBasisPoints(uint256) nonpayable
```

> set the deviation threshold in basis points, used to detect if the cached value deviated significantly from the actual fresh readings.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _newDeviationThresholdBasisPoints | uint256 | the new value to set. |

#### setReadPauseOverride

```javascript
function setReadPauseOverride(bool) nonpayable
```

> set the readPauseOverride flag

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _readPauseOverride | bool | the new flag for readPauseOverride |

#### setValidityDuration

```javascript
function setValidityDuration(uint256) nonpayable
```

> set the validity duration of the cached collateralization values.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _validityDuration | uint256 | the new validity duration This function will emit a DurationUpdate event from Timed.sol |

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

#### update

```javascript
function update() nonpayable
```

> update reading of the CollateralizationOracle

#### updateIfOutdated

```javascript
function updateIfOutdated() nonpayable
```

> this method reverts if the oracle is not outdated It is useful if the caller is incentivized for calling only when the deviation threshold or frequency has passed

[⬅️ Contracts](contracts.md)
