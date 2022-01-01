[⬅️ Contracts](contracts.md)

# [EthBondingCurve](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/bondingcurve/EthBondingCurve.sol)

> a bonding curve for purchasing FEI with ETH
> 
> Author: Fei Protocol

## Events

#### Allocate

```javascript
event Allocate(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| caller indexed | address |  |
| amount | uint256 |  |

#### AllocationUpdate

```javascript
event AllocationUpdate(address[],uint256[],address[],uint256[])
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldPCVDeposits | address[] |  |
| oldRatios | uint256[] |  |
| newPCVDeposits | address[] |  |
| newRatios | uint256[] |  |

#### BackupOracleUpdate

```javascript
event BackupOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBackupOracle indexed | address |  |
| newBackupOracle indexed | address |  |

#### BufferUpdate

```javascript
event BufferUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBuffer | uint256 |  |
| newBuffer | uint256 |  |

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

#### DecimalsNormalizerUpdate

```javascript
event DecimalsNormalizerUpdate(int256,int256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDecimalsNormalizer | int256 |  |
| newDecimalsNormalizer | int256 |  |

#### DiscountUpdate

```javascript
event DiscountUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDiscount | uint256 |  |
| newDiscount | uint256 |  |

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

#### InvertUpdate

```javascript
event InvertUpdate(bool,bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDoInvert | bool |  |
| newDoInvert | bool |  |

#### MintCapUpdate

```javascript
event MintCapUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMint | uint256 |  |
| newMint | uint256 |  |

#### OracleUpdate

```javascript
event OracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldOracle indexed | address |  |
| newOracle indexed | address |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### Purchase

```javascript
event Purchase(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to indexed | address |  |
| amountIn | uint256 |  |
| amountOut | uint256 |  |

#### Reset

```javascript
event Reset(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTotalPurchased | uint256 |  |

#### ScaleUpdate

```javascript
event ScaleUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldScale | uint256 |  |
| newScale | uint256 |  |

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

#### allocate

```javascript
function allocate() nonpayable
```

> batch allocate held PCV

#### atScale

```javascript
function atScale() view returns(bool)
```

> a boolean signalling whether Scale has been reached

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### availableToMint

```javascript
function availableToMint() view returns(uint256)
```

> returns how close to the minting cap we are

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

> get the balance of ETH held by the contract and ready to be allocated

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

#### buffer

```javascript
function buffer() view returns(uint256)
```

> the buffer applied on top of the peg purchase price once at Scale

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### checkAllocation

```javascript
function checkAllocation(address[],uint256[]) pure
```

> make sure an allocation has matching lengths and totals the ALLOCATION_GRANULARITY

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pcvDeposits | address[] | new list of pcv deposits to send to |
| _ratios | uint256[] | new ratios corresponding to the PCV deposits |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### decimalsNormalizer

```javascript
function decimalsNormalizer() view returns(int256)
```

> number of decimals to scale oracle price by, i.e. multiplying by 10^(decimalsNormalizer)

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | int256 |  |

#### discount

```javascript
function discount() view returns(uint256)
```

> the discount applied on top of peg before at Scale

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### getAllocation

```javascript
function getAllocation() view returns(address[],uint256[])
```

> gets the pcvDeposits and ratios of the splitter

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address[] |  |
|  | uint256[] |  |

#### getAmountOut

```javascript
function getAmountOut(uint256) view returns(uint256)
```

> return amount of FEI received after a bonding curve purchase

> Can be innacurate if outdated, need to call `oracle().isOutdated()` to check

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountIn | uint256 | the amount of underlying used to purchase |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountOut | uint256 | the amount of FEI received |

#### getCurrentPrice

```javascript
function getCurrentPrice() view returns(tuple)
```

> return current instantaneous bonding curve price

> Can be inaccurate if outdated, need to call `oracle().isOutdated()` to check

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |

#### incentiveAmount

```javascript
function incentiveAmount() view returns(uint256)
```

> FEI incentive for calling keeper functions

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
|  | tuple |  |

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

#### mintCap

```javascript
function mintCap() view returns(uint256)
```

> the cap on how much FEI can be minted by the bonding curve

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### purchase

```javascript
function purchase(address,uint256) payable returns(uint256)
```

> purchase FEI for underlying tokens

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | address to receive FEI |
| amountIn | uint256 | amount of underlying tokens input |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountOut | uint256 | amount of FEI received |

#### readOracle

```javascript
function readOracle() view returns(tuple)
```

> the peg price of the referenced oracle

> the peg is defined as FEI per X with X being ETH, dollars, etc

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |

#### remainingTime

```javascript
function remainingTime() view returns(uint256)
```

> number of seconds remaining until time is up

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### reset

```javascript
function reset() nonpayable
```

> resets the totalPurchased

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> returns a manipulation resistant account of both the balance of underlying and protocol owned FEI

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |

#### scale

```javascript
function scale() view returns(uint256)
```

> the Scale target at which bonding curve price fixes

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setAllocation

```javascript
function setAllocation(address[],uint256[]) nonpayable
```

> sets the allocation of held PCV

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _allocations | address[] |  |
| _ratios | uint256[] |  |

#### setBackupOracle

```javascript
function setBackupOracle(address) nonpayable
```

> sets the referenced backup oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBackupOracle | address | the new backup oracle to reference |

#### setBuffer

```javascript
function setBuffer(uint256) nonpayable
```

> sets the bonding curve price buffer

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBuffer | uint256 |  |

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

#### setDiscount

```javascript
function setDiscount(uint256) nonpayable
```

> sets the bonding curve price discount

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDiscount | uint256 |  |

#### setDoInvert

```javascript
function setDoInvert(bool) nonpayable
```

> sets the flag for whether to invert or not

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDoInvert | bool | the new flag for whether to invert |

#### setIncentiveAmount

```javascript
function setIncentiveAmount(uint256) nonpayable
```

> set the incentiveAmount

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newIncentiveAmount | uint256 |  |

#### setIncentiveFrequency

```javascript
function setIncentiveFrequency(uint256) nonpayable
```

> sets the allocate incentive frequency

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _frequency | uint256 |  |

#### setMintCap

```javascript
function setMintCap(uint256) nonpayable
```

> sets the mint cap for the bonding curve

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _mintCap | uint256 |  |

#### setOracle

```javascript
function setOracle(address) nonpayable
```

> sets the referenced oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOracle | address | the new oracle to reference |

#### setScale

```javascript
function setScale(uint256) nonpayable
```

> sets the bonding curve Scale target

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newScale | uint256 |  |

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

#### token

```javascript
function token() view returns(address)
```

> the ERC20 token for this bonding curve

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### totalPurchased

```javascript
function totalPurchased() view returns(uint256)
```

> the total amount of FEI purchased on bonding curve

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

#### updateOracle

```javascript
function updateOracle() nonpayable
```

> updates the referenced oracle

[⬅️ Contracts](contracts.md)
