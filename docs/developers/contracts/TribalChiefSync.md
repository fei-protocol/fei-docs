[⬅️ Contracts](contracts.md)

# [TribalChiefSync](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/staking/TribalChiefSync.sol)

> TribalChief Synchronize contract This contract is able to keep the tribalChief and autoRewardsDistributor in sync when either: 1. adding pools or  2. updating block rewards It needs the EXECUTOR role on the optimistic timelock, so it can atomically trigger the 3 actions

## Methods

#### addPool

```javascript
function addPool(uint120,address,address,(uint128,uint128)[],bytes32) nonpayable
```

> Sync a pool addition

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| allocPoint | uint120 |  |
| stakedToken | address |  |
| rewarder | address |  |
| rewardData | tuple[] |  |
| salt | bytes32 |  |

#### autoRewardsDistributor

```javascript
function autoRewardsDistributor() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### decreaseRewards

```javascript
function decreaseRewards(uint256,bytes32) nonpayable
```

> Sync a rewards rate change

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| tribePerBlock | uint256 |  |
| salt | bytes32 |  |

#### resetPool

```javascript
function resetPool(uint256,bytes32) nonpayable
```

> Sync a pool reset rewards action

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| salt | bytes32 |  |

#### setPool

```javascript
function setPool(uint256,uint120,address,bool,bytes32) nonpayable
```

> Sync a pool set action

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pid | uint256 |  |
| allocPoint | uint120 |  |
| rewarder | address |  |
| overwrite | bool |  |
| salt | bytes32 |  |

#### timelock

```javascript
function timelock() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribalChief

```javascript
function tribalChief() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

[⬅️ Contracts](contracts.md)
