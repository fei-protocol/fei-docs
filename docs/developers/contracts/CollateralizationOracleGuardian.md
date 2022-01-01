[⬅️ Contracts](contracts.md)

# [CollateralizationOracleGuardian](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/collateralization/CollateralizationOracleGuardian.sol)

> Fei Protocol's Collateralization Oracle Guardian
> 
> Author: Fei Protocol This contract needs to be granted the ORACLE_ADMIN role The guardian can leverage this contract to make small bounded changes to CR This is intended to be used only in emergencies when the base CollateralizationOracle is compromised The guardian should be able to approximate manual changes to CR via this contract without retaining too much power

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| collateralizationOracleGuardian | [0x81De6bA8df84A4B679061952E171a27F096F3eAe](https://etherscan.io/address/0x81De6bA8df84A4B679061952E171a27F096F3eAe) |

## Events

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
event DeviationThresholdUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDeviationThresholdBasisPoints | uint256 |  |
| newDeviationThresholdBasisPoints | uint256 |  |

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

#### calculateDeviationThresholdBasisPoints

```javascript
function calculateDeviationThresholdBasisPoints(uint256,uint256) pure returns(uint256)
```

> return the percent deviation between a and b in basis points terms

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| a | uint256 |  |
| b | uint256 |  |

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

#### deviationThresholdBasisPoints

```javascript
function deviationThresholdBasisPoints() view returns(uint256)
```

> the maximum update size relative to current, measured in basis points (1/10000)

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

#### oracleWrapper

```javascript
function oracleWrapper() view returns(address)
```

> the oracle wrapper to update

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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
function setCache(uint256,uint256) nonpayable
```

> guardian set the cache values on collateralization oracle

> make sure to pause the CR oracle wrapper or else the set value would be overwritten on next update

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 | new PCV value |
| userCirculatingFei | uint256 | new user FEI value |

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

> governance setter for maximum deviation the guardian can change per update

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDeviationThresholdBasisPoints | uint256 |  |

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

[⬅️ Contracts](contracts.md)
