[⬅️ Contracts](contracts.md)

# [AngleUniswapPCVDeposit](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/angle/AngleUniswapPCVDeposit.sol)

> implementation for Angle PCV Deposit
> 
> Author: Angle Core Team and Fei Protocol

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| agEurAngleUniswapPCVDeposit | [0x7AC2Ab8143634419c5bc230A9f9955C3e29f64Ef](https://etherscan.io/address/0x7AC2Ab8143634419c5bc230A9f9955C3e29f64Ef) |

## Related Contracts


[Core](Core.md), [Fei](Fei.md), [ChainlinkOracleWrapper](ChainlinkOracleWrapper.md)

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

#### InvertUpdate

```javascript
event InvertUpdate(bool,bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDoInvert | bool |  |
| newDoInvert | bool |  |

#### MaxBasisPointsFromPegLPUpdate

```javascript
event MaxBasisPointsFromPegLPUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMaxBasisPointsFromPegLP | uint256 |  |
| newMaxBasisPointsFromPegLP | uint256 |  |

#### OracleUpdate

```javascript
event OracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldOracle | address indexed |  |
| newOracle | address indexed |  |

#### PairUpdate

```javascript
event PairUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldPair | address indexed |  |
| newPair | address indexed |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### Unpaused

```javascript
event Unpaused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

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

> returns total balance of PCV in the Deposit excluding the FEI

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

#### burnAgToken

```javascript
function burnAgToken(uint256) nonpayable
```

> burn agToken for FEI

> the call will revert if slippage is too high compared to oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountAgToken | uint256 |  |

#### burnAgTokenAll

```javascript
function burnAgTokenAll() nonpayable
```

> burn ALL agToken held for FEI

> see burnAgToken(uint256 amount).

#### claimRewards

```javascript
function claimRewards() nonpayable
```

> claim staking rewards

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

> deposit tokens into the PCV allocation

#### doInvert

```javascript
function doInvert() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

#### getReserves

```javascript
function getReserves() view returns(uint256,uint256)
```

> pair reserves with fei listed first

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| feiReserves | uint256 |  |
| tokenReserves | uint256 |  |

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

#### liquidityOwned

```javascript
function liquidityOwned() view returns(uint256)
```

> amount of pair liquidity owned by this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | amount of LP tokens |

#### maxBasisPointsFromPegLP

```javascript
function maxBasisPointsFromPegLP() view returns(uint256)
```

> a slippage protection parameter, deposits revert when spot price is > this % from oracle

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### mintAgToken

```javascript
function mintAgToken(uint256) nonpayable
```

> mint agToken from FEI

> the call will revert if slippage is too high compared to oracle.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountFei | uint256 |  |

#### oracle

```javascript
function oracle() view returns(address)
```

> the oracle reference by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### pair

```javascript
function pair() view returns(address)
```

> the referenced Uniswap pair contract

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

#### poolManager

```javascript
function poolManager() view returns(address)
```

> the Angle PoolManager contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> get the manipulation resistant Other(example ETH) and FEI in the Uniswap pool

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | number of other token in pool |
|  | uint256 | number of FEI in pool Derivation rETH, rFEI = resistant (ideal) ETH and FEI reserves, P = price of ETH in FEI: 1. rETH * rFEI = k 2. rETH = k / rFEI 3. rETH = (k * rETH) / (rFEI * rETH) 4. rETH ^ 2 = k / P 5. rETH = sqrt(k / P) and rFEI = k / rETH by 1. Finally scale the resistant reserves by the ratio owned by the contract |

#### router

```javascript
function router() view returns(address)
```

> the Uniswap router contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### setBackupOracle

```javascript
function setBackupOracle(address) nonpayable
```

> sets the referenced backup oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBackupOracle | address | the new backup oracle to reference |

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

#### setMaxBasisPointsFromPegLP

```javascript
function setMaxBasisPointsFromPegLP(uint256) nonpayable
```

> sets the new slippage parameter for depositing liquidity

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _maxBasisPointsFromPegLP | uint256 | the new distance in basis points (1/10000) from peg beyond which a liquidity provision will fail |

#### setOracle

```javascript
function setOracle(address) nonpayable
```

> sets the referenced oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOracle | address | the new oracle to reference |

#### setPair

```javascript
function setPair(address) nonpayable
```

> set the new pair contract

> also approves the router for the new pair token and underlying token

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pair | address | the new pair |

#### setPoolManager

```javascript
function setPoolManager(address) nonpayable
```

> set a new poolManager address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _poolManager | address | the new poolManager |

#### setStakingRewards

```javascript
function setStakingRewards(address) nonpayable
```

> set a new stakingRewards address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _stakingRewards | address | the new stakingRewards |

#### stableMaster

```javascript
function stableMaster() view returns(address)
```

> the Angle StableMaster contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### stakingRewards

```javascript
function stakingRewards() view returns(address)
```

> the Angle StakingRewards contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### token

```javascript
function token() view returns(address)
```

> the address of the non-fei underlying token

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

#### withdraw

```javascript
function withdraw(address,uint256) nonpayable
```

> withdraw tokens from the PCV allocation

> has rounding errors on amount to withdraw, can differ from the input "amountUnderlying"

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | the address to send PCV to |
| amountUnderlying | uint256 | of tokens withdrawn |

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
