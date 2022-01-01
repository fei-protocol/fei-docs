[⬅️ Contracts](contracts.md)

# [TribalChief](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/staking/TribalChief.sol)


The idea for this TribalChief contract is to be the owner of tribe token that is deposited into this contract.This contract was forked from sushiswap and has been modified to distribute staking rewards in tribe. All legacy code that relied on MasterChef V1 has been removed so that this contract will pay out staking rewards in tribe. The assumption this code makes is that this MasterChief contract will be funded before going live and offering staking rewards. This contract will not have the ability to mint tribe.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| tribalChief | [0x9e1076cC0d19F9B0b8019F384B0a29E48Ee46f7f](https://etherscan.io/address/0x9e1076cC0d19F9B0b8019F384B0a29E48Ee46f7f) |
| tribalChiefImpl | [0x2d91362e8bcAA8826b482B531dcb170FC9d17777](https://etherscan.io/address/0x2d91362e8bcAA8826b482B531dcb170FC9d17777) |

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

#### Deposit

```javascript
event Deposit(address,uint256,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| pid indexed | uint256 |  |
| amount | uint256 |  |
| depositID indexed | uint256 |  |

#### EmergencyWithdraw

```javascript
event EmergencyWithdraw(address,uint256,uint256,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| pid indexed | uint256 |  |
| amount | uint256 |  |
| to indexed | address |  |

#### Harvest

```javascript
event Harvest(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| pid indexed | uint256 |  |
| amount | uint256 |  |

#### LogPoolAddition

```javascript
event LogPoolAddition(uint256,uint256,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid indexed | uint256 |  |
| allocPoint | uint256 |  |
| stakedToken indexed | address |  |
| rewarder indexed | address |  |

#### LogPoolMultiplier

```javascript
event LogPoolMultiplier(uint256,uint128,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid indexed | uint256 |  |
| lockLength indexed | uint128 |  |
| multiplier indexed | uint256 |  |

#### LogSetPool

```javascript
event LogSetPool(uint256,uint256,address,bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid indexed | uint256 |  |
| allocPoint | uint256 |  |
| rewarder indexed | address |  |
| overwrite | bool |  |

#### LogUpdatePool

```javascript
event LogUpdatePool(uint256,uint128,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid indexed | uint256 |  |
| lastRewardBlock indexed | uint128 |  |
| lpSupply | uint256 |  |
| accTribePerShare | uint256 |  |

#### NewTribePerBlock

```javascript
event NewTribePerBlock(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount indexed | uint256 |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### PoolLocked

```javascript
event PoolLocked(bool,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| locked indexed | bool |  |
| pid indexed | uint256 |  |

#### TribeWithdraw

```javascript
event TribeWithdraw(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 |  |

#### Unpaused

```javascript
event Unpaused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### Withdraw

```javascript
event Withdraw(address,uint256,uint256,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| pid indexed | uint256 |  |
| amount | uint256 |  |
| to indexed | address |  |

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

#### SCALE_FACTOR

```javascript
function SCALE_FACTOR() view returns(uint256)
```

> decimals for rewards multiplier

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### TRIBE

```javascript
function TRIBE() view returns(address)
```

> Address of Tribe contract. Cannot be immutable due to limitations of proxies

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### add

```javascript
function add(uint120,address,address,(uint128,uint128)[]) nonpayable
```

> Add a new pool. Can only be called by the governor.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| allocPoint | uint120 | AP of the new pool. |
| _stakedToken | address | Address of the ERC-20 token to stake. |
| _rewarder | address | Address of the rewarder delegate. |
| rewardData | tuple[] | Reward Multiplier data  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### deposit

```javascript
function deposit(uint256,uint256,uint64) nonpayable
```

> Deposit tokens to earn TRIBE allocation.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 | The index of the pool. See `poolInfo`. |
| amount | uint256 | The token amount to deposit. |
| lockLength | uint64 | The length of time you would like to lock tokens |

#### depositInfo

```javascript
function depositInfo(uint256,address,uint256) view returns(uint256,uint128,uint128)
```

> Info of each user that stakes tokens.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | address |  |
|  | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 |  |
| unlockBlock | uint128 |  |
| multiplier | uint128 |  |

#### emergencyWithdraw

```javascript
function emergencyWithdraw(uint256,address) nonpayable
```

> Withdraw without caring about rewards. EMERGENCY ONLY.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 | The index of the pool. See `poolInfo`. |
| to | address | Receiver of the deposited tokens. |

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

#### getTotalStakedInPool

```javascript
function getTotalStakedInPool(uint256,address) view returns(uint256)
```

> Returns the amount a user deposited in a single pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| user | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### governorAddPoolMultiplier

```javascript
function governorAddPoolMultiplier(uint256,uint64,uint64) nonpayable
```

> Allows governor to change the pool multiplier Unlocks the pool if the new multiplier is greater than the old one

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | pool ID |
| lockLength | uint64 | lock length to change |
| newRewardsMultiplier | uint64 | updated rewards multiplier |

#### governorWithdrawTribe

```javascript
function governorWithdrawTribe(uint256) nonpayable
```

> sends tokens back to governance treasury. Only callable by governance

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 | the amount of tokens to send back to treasury |

#### harvest

```javascript
function harvest(uint256,address) nonpayable
```

> Harvest proceeds for transaction sender to `to`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 | The index of the pool. See `poolInfo`. |
| to | address | Receiver of TRIBE rewards. |

#### initialize

```javascript
function initialize(address,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _core | address | The Core contract address. |
| _tribe | address | The TRIBE token contract address. |

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

#### lockPool

```javascript
function lockPool(uint256) nonpayable
```

> Allows governor to lock the pool so the users cannot withdraw until their lockup period is over

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | pool ID |

#### massUpdatePools

```javascript
function massUpdatePools(uint256[]) nonpayable
```

> Update reward variables for all pools. Be careful of gas spending!

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pids | uint256[] | Pool IDs of all to be updated. Make sure to update all active pools. |

#### numPools

```javascript
function numPools() view returns(uint256)
```

> Returns the number of pools.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### openUserDeposits

```javascript
function openUserDeposits(uint256,address) view returns(uint256)
```

> Returns the number of user deposits in a single pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| user | address |  |

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

#### pendingRewards

```javascript
function pendingRewards(uint256,address) view returns(uint256)
```

> View function to see all pending TRIBE on frontend.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | The index of the pool. See `poolInfo`. |
| _user | address | Address of user. |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### poolInfo

```javascript
function poolInfo(uint256) view returns(uint256,uint256,uint128,uint120,bool)
```

> Info of each pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| virtualTotalSupply | uint256 |  |
| accTribePerShare | uint256 |  |
| lastRewardBlock | uint128 |  |
| allocPoint | uint120 |  |
| unlocked | bool |  |

#### resetRewards

```javascript
function resetRewards(uint256) nonpayable
```

> Reset the given pool's TRIBE allocation to 0 and unlock the pool. Can only be called by the governor or guardian.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | The index of the pool. See `poolInfo`.     |

#### rewardMultipliers

```javascript
function rewardMultipliers(uint256,uint128) view returns(uint128)
```

> Info of each pool rewards multipliers available. map a pool id to a block lock time to a rewards multiplier

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint128 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint128 |  |

#### rewarder

```javascript
function rewarder(uint256) view returns(address)
```

> Address of each `IRewarder` contract.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### set

```javascript
function set(uint256,uint120,address,bool) nonpayable
```

> Update the given pool's TRIBE allocation point and `IRewarder` contract. Can only be called by the governor.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | The index of the pool. See `poolInfo`. |
| _allocPoint | uint120 | New AP of the pool. |
| _rewarder | address | Address of the rewarder delegate. |
| overwrite | bool | True if _rewarder should be `set`. Otherwise `_rewarder` is ignored. |

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

#### stakedToken

```javascript
function stakedToken(uint256) view returns(address)
```

> Address of the token you can stake in each pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### tribePerBlock

```javascript
function tribePerBlock() view returns(uint256)
```

> Calculates and returns the `amount` of TRIBE per block.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### unlockPool

```javascript
function unlockPool(uint256) nonpayable
```

> Allows governor to unlock the pool so that users can withdraw  before their tokens have been locked for the entire lockup period

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | pool ID |

#### unpause

```javascript
function unpause() nonpayable
```

> set pausable methods to unpaused

#### updateBlockReward

```javascript
function updateBlockReward(uint256) nonpayable
```

> Allows governor to change the amount of tribe per block make sure to call the update pool function before hitting this function this will ensure that all of the rewards a user earned previously get paid out

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBlockReward | uint256 | The new amount of tribe per block to distribute |

#### updatePool

```javascript
function updatePool(uint256) nonpayable
```

> Update reward variables of the given pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 | The index of the pool. See `poolInfo`. |

#### userInfo

```javascript
function userInfo(uint256,address) view returns(int256,uint256)
```

> Info of each users reward debt and virtual amount. One object is instantiated per user per pool

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| rewardDebt | int256 |  |
| virtualAmount | uint256 |  |

#### withdrawAllAndHarvest

```javascript
function withdrawAllAndHarvest(uint256,address) nonpayable
```

> Withdraw staked tokens from pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 | The index of the pool. See `poolInfo`. |
| to | address | Receiver of the tokens. |

#### withdrawFromDeposit

```javascript
function withdrawFromDeposit(uint256,uint256,address,uint256) nonpayable
```

> Withdraw tokens from pool.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 | The index of the pool. See `poolInfo`. |
| amount | uint256 | Token amount to withdraw. |
| to | address | Receiver of the tokens. |
| index | uint256 |  |

[⬅️ Contracts](contracts.md)
