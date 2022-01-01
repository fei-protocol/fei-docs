[⬅️ Contracts](contracts.md)

# [BalancerLBPSwapper](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/balancer/BalancerLBPSwapper.sol)

> BalancerLBPSwapper
> 
> Author: Fei Protocol


an auction contract which cyclically sells one token for another using Balancer LBP

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| feiTribeLBPSwapper | [0x16ef9601076d45e8cc564cDD91E5dF3Ae83dD3B3](https://etherscan.io/address/0x16ef9601076d45e8cc564cDD91E5dF3Ae83dD3B3) |
| noFeeFeiTribeLBPSwapper | [0xC05FAF6C5C4bC1bD841AdFC92b3D3f20180F26E8](https://etherscan.io/address/0xC05FAF6C5C4bC1bD841AdFC92b3D3f20180F26E8) |

## Events

#### BackupOracleUpdate

```javascript
event BackupOracleUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBackupOracle indexed | address |  |
| newBackupOracle indexed | address |  |

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

#### DurationUpdate

```javascript
event DurationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDuration | uint256 |  |
| newDuration | uint256 |  |

#### ExitPool

```javascript
event ExitPool()
```

#### InvertUpdate

```javascript
event InvertUpdate(bool,bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldDoInvert | bool |  |
| newDoInvert | bool |  |

#### MinTokenSpentUpdate

```javascript
event MinTokenSpentUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldMinTokenSpentBalance | uint256 |  |
| newMinTokenSpentBalance | uint256 |  |

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

#### Swap

```javascript
event Swap(address,address,address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller indexed | address |  |
| _tokenSpent indexed | address |  |
| _tokenReceived indexed | address |  |
| _amountSpent | uint256 |  |
| _amountReceived | uint256 |  |

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

#### UpdateReceivingAddress

```javascript
event UpdateReceivingAddress(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTokenReceivingAddress | address |  |
| newTokenReceivingAddress | address |  |

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

#### exitPool

```javascript
function exitPool(address) nonpayable
```

> redeeem all assets from LP pool

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | destination for withdrawn tokens |

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

#### forceSwap

```javascript
function forceSwap() nonpayable
```

> Force a swap() call, without waiting afterTime. This should only be callable after init() call, when no other swap is happening (call reverts if weight change is in progress).

#### getTokensIn

```javascript
function getTokensIn(uint256) view returns(address[],uint256[])
```

> return the amount of tokens needed to seed the next auction

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| spentTokenBalance | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| tokens | address[] |  |
| amountsIn | uint256[] |  |

#### init

```javascript
function init(address) nonpayable
```

> initialize Balancer LBP Needs to be a separate method because this contract needs to be deployed and supplied  as the owner of the pool on construction. Includes various checks to ensure the pool contract is correct and initialization can only be done once

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pool | address | the Balancer LBP used for swapping |

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

#### minTokenSpentBalance

```javascript
function minTokenSpentBalance() view returns(uint256)
```

> the minimum amount of tokenSpent to kick off a new auction on swap()

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

#### pid

```javascript
function pid() view returns(bytes32)
```

> the Balancer V2 Pool id of `pool`

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### pool

```javascript
function pool() view returns(address)
```

> the Balancer LBP used for swapping

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

#### setAssetManagerPoolConfig

```javascript
function setAssetManagerPoolConfig(address,address,(uint64,uint64,uint64)) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pool | address |  |
| token | address |  |
| poolConfig | tuple |  |

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

#### setMinTokenSpent

```javascript
function setMinTokenSpent(uint256) nonpayable
```

> sets the minimum token spent balance

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMinTokenSpentBalance | uint256 | minimum amount of FEI to trigger a new auction |

#### setOracle

```javascript
function setOracle(address) nonpayable
```

> sets the referenced oracle

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOracle | address | the new oracle to reference |

#### setPaused

```javascript
function setPaused(address,bool) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pool | address |  |
| paused | bool |  |

#### setReceivingAddress

```javascript
function setReceivingAddress(address) nonpayable
```

> Sets the address receiving swap's inbound tokens

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTokenReceivingAddress | address | the address that will receive tokens |

#### setSwapEnabled

```javascript
function setSwapEnabled(address,bool) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pool | address |  |
| swapEnabled | bool |  |

#### setSwapFee

```javascript
function setSwapFee(address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pool | address |  |
| swapFee | uint256 |  |

#### setSwapFrequency

```javascript
function setSwapFrequency(uint256) nonpayable
```

> sets the minimum time between swaps

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _frequency | uint256 | minimum time between swaps in seconds |

#### startTime

```javascript
function startTime() view returns(uint256)
```

> the start timestamp of the timed period

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### swap

```javascript
function swap() nonpayable
```

> Swap algorithm 1. Withdraw existing LP tokens 2. Reset weights 3. Provide new liquidity 4. Trigger gradual weight change 5. Transfer remaining tokenReceived to tokenReceivingAddress

> assumes tokenSpent balance of contract exceeds minTokenSpentBalance to kick off a new auction

#### swapEndTime

```javascript
function swapEndTime() view returns(uint256)
```

> returns when the next auction ends

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| endTime | uint256 |  |

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

#### tokenReceived

```javascript
function tokenReceived() view returns(address)
```

> the token to buy

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tokenReceivingAddress

```javascript
function tokenReceivingAddress() view returns(address)
```

> the address to send `tokenReceived`

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tokenSpent

```javascript
function tokenSpent() view returns(address)
```

> the token to be auctioned

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

#### updateWeightsGradually

```javascript
function updateWeightsGradually(address,uint256,uint256,uint256[]) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pool | address |  |
| startTime | uint256 |  |
| endTime | uint256 |  |
| endWeights | uint256[] |  |

#### vault

```javascript
function vault() view returns(address)
```

> the Balancer V2 Vault contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### withdrawCollectedManagementFees

```javascript
function withdrawCollectedManagementFees(address,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pool | address |  |
| recipient | address |  |

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

[⬅️ Contracts](contracts.md)
