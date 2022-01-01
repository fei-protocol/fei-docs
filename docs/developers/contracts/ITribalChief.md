# ITribalChief

> FEI stablecoin interface
> 
> Author: Fei Protocol

## Methods

#### SCALE_FACTOR

```javascript
function SCALE_FACTOR() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### add

```javascript
function add(uint120,address,address,(uint128,uint128)[]) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| allocPoint | uint120 |  |
| _stakedToken | address |  |
| _rewarder | address |  |
| rewardData | tuple[] |  |

#### deposit

```javascript
function deposit(uint256,uint256,uint64) nonpayable
```

> functions for users to deposit, withdraw and get rewards from our contracts

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |
| _amount | uint256 |  |
| _lockLength | uint64 |  |

#### emergencyWithdraw

```javascript
function emergencyWithdraw(uint256,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| to | address |  |

#### getTotalStakedInPool

```javascript
function getTotalStakedInPool(uint256,address) view returns(uint256)
```

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

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |
| lockLength | uint64 |  |
| newRewardsMultiplier | uint64 |  |

#### governorWithdrawTribe

```javascript
function governorWithdrawTribe(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 |  |

#### harvest

```javascript
function harvest(uint256,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| to | address |  |

#### lockPool

```javascript
function lockPool(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |

#### massUpdatePools

```javascript
function massUpdatePools(uint256[]) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pids | uint256[] |  |

#### numPools

```javascript
function numPools() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### openUserDeposits

```javascript
function openUserDeposits(uint256,address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| user | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### pendingRewards

```javascript
function pendingRewards(uint256,address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |
| _user | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### poolInfo

```javascript
function poolInfo(uint256) view returns(uint256,uint256,uint128,uint120,bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _index | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |
|  | uint128 |  |
|  | uint120 |  |
|  | bool |  |

#### resetRewards

```javascript
function resetRewards(uint256) nonpayable
```

> functions to change and add pools and multipliers that can only be called by governor, guardian, or TribalChiefAdmin

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |

#### rewardMultipliers

```javascript
function rewardMultipliers(uint256,uint128) view returns(uint128)
```

> view only functions that return data on pools, user deposit(s), tribe distributed per block, and other constants

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |
| _blocksLocked | uint128 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint128 |  |

#### set

```javascript
function set(uint256,uint120,address,bool) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |
| _allocPoint | uint120 |  |
| _rewarder | address |  |
| overwrite | bool |  |

#### stakedToken

```javascript
function stakedToken(uint256) view returns(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _index | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### totalAllocPoint

```javascript
function totalAllocPoint() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### tribePerBlock

```javascript
function tribePerBlock() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### unlockPool

```javascript
function unlockPool(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 |  |

#### updateBlockReward

```javascript
function updateBlockReward(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBlockReward | uint256 |  |

#### updatePool

```javascript
function updatePool(uint256) nonpayable
```

> functions to update pools that can be called by anyone

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |

#### withdrawAllAndHarvest

```javascript
function withdrawAllAndHarvest(uint256,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| to | address |  |

#### withdrawFromDeposit

```javascript
function withdrawFromDeposit(uint256,uint256,address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| amount | uint256 |  |
| to | address |  |
| index | uint256 |  |
