[⬅️ Contracts](contracts.md)

# [TribeReserveStabilizer](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/stabilizer/TribeReserveStabilizer.sol)

> implementation for a TRIBE Reserve Stabilizer
> 
> Author: Fei Protocol

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| tribeReserveStabilizer | [0xE1A468418f4D8D3F070A06d49b3575A9562b6CfD](https://etherscan.io/address/0xE1A468418f4D8D3F070A06d49b3575A9562b6CfD) |

## Related Contracts


[Core](Core.md), [CompositeOracle](CompositeOracle.md), [TribeMinter](TribeMinter.md), [CollateralizationOracleWrapper](CollateralizationOracleWrapper.md), [Tribe](Tribe.md)

## Events

#### BackupOracleUpdate

```javascript
event BackupOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBackupOracle | address indexed |  |
| newBackupOracle | address indexed |  |

#### CollateralizationOracleUpdate

```javascript
event CollateralizationOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCollateralizationOracle | address indexed |  |
| newCollateralizationOracle | address indexed |  |

#### CollateralizationThresholdUpdate

```javascript
event CollateralizationThresholdUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCollateralizationThresholdBasisPoints | uint256 |  |
| newCollateralizationThresholdBasisPoints | uint256 |  |

#### ContractAdminRoleUpdate

```javascript
event ContractAdminRoleUpdate(bytes32,bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldContractAdminRole | bytes32 indexed |  |
| newContractAdminRole | bytes32 indexed |  |

#### CoreUpdate

```javascript
event CoreUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCore | address indexed |  |
| newCore | address indexed |  |

#### DecimalsNormalizerUpdate

```javascript
event DecimalsNormalizerUpdate(int256,int256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDecimalsNormalizer | int256 |  |
| newDecimalsNormalizer | int256 |  |

#### Deposit

```javascript
event Deposit(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _from | address indexed |  |
| _amount | uint256 |  |

#### DurationUpdate

```javascript
event DurationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

#### FeiExchange

```javascript
event FeiExchange(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address indexed |  |
| feiAmountIn | uint256 |  |
| amountOut | uint256 |  |

#### InvertUpdate

```javascript
event InvertUpdate(bool,bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDoInvert | bool |  |
| newDoInvert | bool |  |

#### OracleUpdate

```javascript
event OracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldOracle | address indexed |  |
| newOracle | address indexed |  |

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

#### UsdPerFeiRateUpdate

```javascript
event UsdPerFeiRateUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldUsdPerFeiBasisPoints | uint256 |  |
| newUsdPerFeiBasisPoints | uint256 |  |

#### WithdrawERC20

```javascript
event WithdrawERC20(address,address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _token | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

#### WithdrawETH

```javascript
event WithdrawETH(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

#### Withdrawal

```javascript
event Withdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

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

#### backupOracle

```javascript
function backupOracle() view returns(address)
```

> the backup oracle reference by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### balance

```javascript
function balance() view returns(uint256)
```

> returns the amount of the held ERC-20

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() view returns(address)
```

> display the related token of the balance reported

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### collateralizationOracle

```javascript
function collateralizationOracle() view returns(address)
```

> a collateralization oracle

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### collateralizationThreshold

```javascript
function collateralizationThreshold() view returns(tuple)
```

> the collateralization threshold below which exchanging becomes active

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | ICore implementation address |

#### decimalsNormalizer

```javascript
function decimalsNormalizer() view returns(int256)
```

> number of decimals to scale oracle price by, i.e. multiplying by 10^(decimalsNormalizer)

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | int256 |  |

#### deposit

```javascript
function deposit() nonpayable
```

> new PCV deposited to the stabilizer

> no-op because the token transfer already happened

#### doInvert

```javascript
function doInvert() view returns(bool)
```

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

#### exchangeFei

```javascript
function exchangeFei(uint256) nonpayable returns(uint256)
```

> exchange FEI for minted TRIBE

> the timer counts down from first time below threshold and opens after window

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| feiAmount | uint256 |  |

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
|  | address | IFei implementation address |

#### feiBalance

```javascript
function feiBalance() view returns(uint256)
```

> fei balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | fei amount held |

#### getAmountOut

```javascript
function getAmountOut(uint256) view returns(uint256)
```

> returns the amount out of tokens from the reserves for a given amount of FEI

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountFeiIn | uint256 | the amount of FEI in |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### invert

```javascript
function invert((uint256)) pure returns(tuple)
```

> invert a peg price

> the inverted peg would be X per FEI

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| price | tuple | the peg price to invert |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple | the inverted peg as a Decimal |

#### isCollateralizationBelowThreshold

```javascript
function isCollateralizationBelowThreshold() view returns(bool)
```

> check whether collateralization ratio is below the threshold set

> returns false if the oracle is invalid

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

#### oracle

```javascript
function oracle() view returns(address)
```

> the oracle reference by the contract

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

#### readOracle

```javascript
function readOracle() view returns(tuple)
```

> the peg price of the referenced oracle

> the peg is defined as FEI per X with X being ETH, dollars, etc

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple | the peg as a Decimal |

#### remainingTime

```javascript
function remainingTime() view returns(uint256)
```

> number of seconds remaining until time is up

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | remaining |

#### resetOracleDelayCountdown

```javascript
function resetOracleDelayCountdown() nonpayable
```

> reset the opening of the TribeReserveStabilizer oracle delay as soon as above CR target

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> gets the resistant token balance and protocol owned fei of this deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |

#### setBackupOracle

```javascript
function setBackupOracle(address) nonpayable
```

> sets the referenced backup oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBackupOracle | address | the new backup oracle to reference |

#### setCollateralizationOracle

```javascript
function setCollateralizationOracle(address) nonpayable
```

> set the Collateralization oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCollateralizationOracle | address |  |

#### setCollateralizationThreshold

```javascript
function setCollateralizationThreshold(uint256) nonpayable
```

> set the collateralization threshold below which exchanging becomes active

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCollateralizationThresholdBasisPoints | uint256 |  |

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

#### setDecimalsNormalizer

```javascript
function setDecimalsNormalizer(int256) nonpayable
```

> sets the new decimalsNormalizer

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDecimalsNormalizer | int256 | the new decimalsNormalizer |

#### setDoInvert

```javascript
function setDoInvert(bool) nonpayable
```

> sets the flag for whether to invert or not

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDoInvert | bool | the new flag for whether to invert |

#### setOracle

```javascript
function setOracle(address) nonpayable
```

> sets the referenced oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOracle | address | the new oracle to reference |

#### setUsdPerFeiRate

```javascript
function setUsdPerFeiRate(uint256) nonpayable
```

> sets the USD per FEI exchange rate rate

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newUsdPerFeiBasisPoints | uint256 | the USD per FEI exchange rate denominated in basis points (1/10000) |

#### startOracleDelayCountdown

```javascript
function startOracleDelayCountdown() nonpayable
```

> delay the opening of the TribeReserveStabilizer until oracle delay duration is met

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
|  | uint256 | timestamp |

#### token

```javascript
function token() view returns(address)
```

> the ERC20 token exchanged on this stablizer

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribe

```javascript
function tribe() view returns(address)
```

> address of the Tribe contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | IERC20 implementation address |

#### tribeBalance

```javascript
function tribeBalance() view returns(uint256)
```

> tribe balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | tribe amount held |

#### tribeMinter

```javascript
function tribeMinter() view returns(address)
```

> the TRIBE minter address

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### unpause

```javascript
function unpause() nonpayable
```

> set pausable methods to unpaused

#### updateOracle

```javascript
function updateOracle() nonpayable
```

> updates the referenced oracle

#### usdPerFeiBasisPoints

```javascript
function usdPerFeiBasisPoints() view returns(uint256)
```

> the USD per FEI exchange rate denominated in basis points (1/10000)

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### withdraw

```javascript
function withdraw(address,uint256) pure
```

> reverts. Held TRIBE should only be released by exchangeFei or mint

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
|  | uint256 |  |

#### withdrawERC20

```javascript
function withdrawERC20(address,address,uint256) nonpayable
```

> withdraw ERC20 from the contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address | address of the ERC20 to send |
| to | address | address destination of the ERC20 |
| amount | uint256 | quantity of ERC20 to send |

#### withdrawETH

```javascript
function withdrawETH(address,uint256) nonpayable
```

> withdraw ETH from the contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | address to send ETH |
| amountOut | uint256 | amount of ETH to send |

[⬅️ Contracts](contracts.md)
