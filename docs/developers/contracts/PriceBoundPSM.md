[⬅️ Contracts](contracts.md)

# [PriceBoundPSM](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/stabilizer/PriceBoundPSM.sol)


contract to create a price bound DAI PSM This contract will allow swaps when the price of DAI is between 98 cents and 1.02 by default These defaults are changeable by the admin and governance by calling floor and ceiling setters setOracleFloor and setOracleCeiling

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| daiPSM | [0x210300C158f95E1342fD008aE417ef68311c49C2](https://etherscan.io/address/0x210300C158f95E1342fD008aE417ef68311c49C2) |

## Events

#### AllocateSurplus

```javascript
event AllocateSurplus(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| caller indexed | address |  |
| amount | uint256 |  |

#### BackupOracleUpdate

```javascript
event BackupOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBackupOracle indexed | address |  |
| newBackupOracle indexed | address |  |

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
| _from indexed | address |  |
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

#### MaxFeeUpdate

```javascript
event MaxFeeUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMaxFee | uint256 |  |
| newMaxFee | uint256 |  |

#### Mint

```javascript
event Mint(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amountIn | uint256 |  |

#### MintFeeUpdate

```javascript
event MintFeeUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMintFee | uint256 |  |
| newMintFee | uint256 |  |

#### OracleCeilingUpdate

```javascript
event OracleCeilingUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCeiling | uint256 |  |
| newCeiling | uint256 |  |

#### OracleFloorUpdate

```javascript
event OracleFloorUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldFloor | uint256 |  |
| newFloor | uint256 |  |

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

#### RateLimitPerSecondUpdate

```javascript
event RateLimitPerSecondUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldRateLimitPerSecond | uint256 |  |
| newRateLimitPerSecond | uint256 |  |

#### Redeem

```javascript
event Redeem(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amountFeiIn | uint256 |  |

#### RedeemFeeUpdate

```javascript
event RedeemFeeUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldRedeemFee | uint256 |  |
| newRedeemFee | uint256 |  |

#### ReservesThresholdUpdate

```javascript
event ReservesThresholdUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldReservesThreshold | uint256 |  |
| newReservesThreshold | uint256 |  |

#### SurplusTargetUpdate

```javascript
event SurplusTargetUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTarget | address |  |
| newTarget | address |  |

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
| _caller indexed | address |  |
| _token indexed | address |  |
| _to indexed | address |  |
| _amount | uint256 |  |

#### WithdrawETH

```javascript
event WithdrawETH(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller indexed | address |  |
| _to indexed | address |  |
| _amount | uint256 |  |

#### Withdrawal

```javascript
event Withdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller indexed | address |  |
| _to indexed | address |  |
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

#### MAX_FEE

```javascript
function MAX_FEE() view returns(uint256)
```

> the max mint and redeem fee in basis points Governance can change this fee

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

#### allocateSurplus

```javascript
function allocateSurplus() nonpayable
```

> send any surplus reserves to the PCV allocation

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

> function from PCVDeposit that must be overriden

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() view returns(address)
```

> returns address of token this contracts balance is reported in

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### ceiling

```javascript
function ceiling() view returns(uint256)
```

> the default maximum acceptable oracle price ceiling is $1.02

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

> function to receive ERC20 tokens from external contracts

#### doInvert

```javascript
function doInvert() view returns(bool)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### doPartialAction

```javascript
function doPartialAction() view returns(bool)
```

> a flag for whether to allow partial actions to complete if the buffer is less than amount

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

#### floor

```javascript
function floor() view returns(uint256)
```

> the default minimum acceptable oracle price floor is 98 cents

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getMaxMintAmountOut

```javascript
function getMaxMintAmountOut() view returns(uint256)
```

> the maximum mint amount out

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getMintAmountOut

```javascript
function getMintAmountOut(uint256) view returns(uint256)
```

> calculate the amount of FEI out for a given `amountIn` of underlying First get oracle price of token Then figure out how many dollars that amount in is worth by multiplying price * amount. ensure decimals are normalized if on underlying they are not 18

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountIn | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountFeiOut | uint256 |  |

#### getRedeemAmountOut

```javascript
function getRedeemAmountOut(uint256) view returns(uint256)
```

> calculate the amount of underlying out for a given `amountFeiIn` of FEI First get oracle price of token Then figure out how many dollars that amount in is worth by multiplying price * amount. ensure decimals are normalized if on underlying they are not 18

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountFeiIn | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountTokenOut | uint256 |  |

#### hasSurplus

```javascript
function hasSurplus() view returns(bool)
```

> a flag for whether the current balance is above (true) or below (false) the reservesThreshold

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

#### isPriceValid

```javascript
function isPriceValid() view returns(bool)
```

> return wether the current oracle price is valid or not

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
function mint(address,uint256,uint256) nonpayable returns(uint256)
```

> function to buy FEI for an underlying asset We first transfer any contract-owned fei, then mint the remaining if necessary

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amountIn | uint256 |  |
| minAmountOut | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountFeiOut | uint256 |  |

#### mintFeeBasisPoints

```javascript
function mintFeeBasisPoints() view returns(uint256)
```

> the fee in basis points for selling asset into FEI

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

#### rateLimitPerSecond

```javascript
function rateLimitPerSecond() view returns(uint256)
```

> the rate per second for this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### redeem

```javascript
function redeem(address,uint256,uint256) nonpayable returns(uint256)
```

> function to redeem FEI for an underlying asset  We do not burn Fei; this allows the contract's balance of Fei to be used before the buffer is used In practice, this helps prevent artificial cycling of mint-burn cycles and prevents a griefing vector.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amountFeiIn | uint256 |  |
| minAmountOut | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountOut | uint256 |  |

#### redeemFeeBasisPoints

```javascript
function redeemFeeBasisPoints() view returns(uint256)
```

> the fee in basis points for buying the asset for FEI

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### reservesSurplus

```javascript
function reservesSurplus() view returns(int256)
```

> an integer representing the positive surplus or negative deficit of contract balance vs reservesThreshold

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | int256 |  |

#### reservesThreshold

```javascript
function reservesThreshold() view returns(uint256)
```

> the amount of reserves to be held for redemptions

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> override default behavior of not checking fei balance

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

#### setMintFee

```javascript
function setMintFee(uint256) nonpayable
```

> set the mint fee vs oracle price in basis point terms

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMintFeeBasisPoints | uint256 |  |

#### setOracle

```javascript
function setOracle(address) nonpayable
```

> sets the referenced oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOracle | address | the new oracle to reference |

#### setOracleCeilingBasisPoints

```javascript
function setOracleCeilingBasisPoints(uint256) nonpayable
```

> sets the ceiling price in BP

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCeilingBasisPoints | uint256 |  |

#### setOracleFloorBasisPoints

```javascript
function setOracleFloorBasisPoints(uint256) nonpayable
```

> sets the floor price in BP

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newFloorBasisPoints | uint256 |  |

#### setRateLimitPerSecond

```javascript
function setRateLimitPerSecond(uint256) nonpayable
```

> set the rate limit per second

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newRateLimitPerSecond | uint256 |  |

#### setRedeemFee

```javascript
function setRedeemFee(uint256) nonpayable
```

> set the redemption fee vs oracle price in basis point terms

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newRedeemFeeBasisPoints | uint256 |  |

#### setReservesThreshold

```javascript
function setReservesThreshold(uint256) nonpayable
```

> set the ideal amount of reserves for the contract to hold for redemptions

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newReservesThreshold | uint256 |  |

#### setSurplusTarget

```javascript
function setSurplusTarget(address) nonpayable
```

> set the target for sending surplus reserves

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTarget | address |  |

#### surplusTarget

```javascript
function surplusTarget() view returns(address)
```

> the PCV deposit target

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

#### underlyingToken

```javascript
function underlyingToken() view returns(address)
```

> the token this PSM will exchange for FEI This token will be set to WETH9 if the bonding curve accepts eth

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

#### withdraw

```javascript
function withdraw(address,uint256) nonpayable
```

> withdraw assets from PSM to an external address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amount | uint256 |  |

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
