[⬅️ Contracts](contracts.md)

# [IAaveIncentivesController](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/external/aave/IAaveIncentivesController.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| aaveTribeIncentivesController | [0xDee5c1662bBfF8f80f7c572D8091BF251b3B0dAB](https://etherscan.io/address/0xDee5c1662bBfF8f80f7c572D8091BF251b3B0dAB) |
| aaveTribeIncentivesControllerImpl | [0xFF865335401F12B88fa3FF5A3a51685A7f224191](https://etherscan.io/address/0xFF865335401F12B88fa3FF5A3a51685A7f224191) |

## Related Contracts


[IAaveIncentivesController](IAaveIncentivesController.md), [Tribe](Tribe.md), [FeiDAOTimelock](FeiDAOTimelock.md), [ProxyAdmin](ProxyAdmin.md)

## Events

#### AssetConfigUpdated

```javascript
event AssetConfigUpdated(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| asset indexed | address |  |
| emission | uint256 |  |

#### AssetIndexUpdated

```javascript
event AssetIndexUpdated(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| asset indexed | address |  |
| index | uint256 |  |

#### ClaimerSet

```javascript
event ClaimerSet(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| claimer indexed | address |  |

#### DistributionEndUpdated

```javascript
event DistributionEndUpdated(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newDistributionEnd | uint256 |  |

#### RewardsAccrued

```javascript
event RewardsAccrued(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| amount | uint256 |  |

#### RewardsClaimed

```javascript
event RewardsClaimed(address,address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| to indexed | address |  |
| claimer indexed | address |  |
| amount | uint256 |  |

#### UserIndexUpdated

```javascript
event UserIndexUpdated(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user indexed | address |  |
| asset indexed | address |  |
| index | uint256 |  |

## Methods

#### DISTRIBUTION_END

```javascript
function DISTRIBUTION_END() view returns(uint256)
```

> for backwards compatibility with the previous DistributionManager used

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### REWARD_TOKEN

```javascript
function REWARD_TOKEN() view returns(address)
```

> for backward compatibility with previous implementation of the Incentives controller

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### claimRewards

```javascript
function claimRewards(address[],uint256,address) nonpayable returns(uint256)
```

> Claims reward for an user, on all the assets of the lending pool, accumulating the pending rewards

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| assets | address[] |  |
| amount | uint256 | Amount of rewards to claim |
| to | address | Address that will be receiving the rewards |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### claimRewardsOnBehalf

```javascript
function claimRewardsOnBehalf(address[],uint256,address,address) nonpayable returns(uint256)
```

> Claims reward for an user on behalf, on all the assets of the lending pool, accumulating the pending rewards. The caller must be whitelisted via "allowClaimOnBehalf" function by the RewardsAdmin role manager

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| assets | address[] |  |
| amount | uint256 | Amount of rewards to claim |
| user | address | Address to check and claim rewards |
| to | address | Address that will be receiving the rewards |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### configureAssets

```javascript
function configureAssets(address[],uint256[]) nonpayable
```

> Configure assets for a certain rewards emission

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| assets | address[] | The assets to incentivize |
| emissionsPerSecond | uint256[] | The emission for each asset |

#### getAssetData

```javascript
function getAssetData(address) view returns(uint256,uint256,uint256)
```

> Returns the configuration of the distribution for a certain asset

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| asset | address | The address of the reference asset of the distribution |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |
|  | uint256 |  |

#### getClaimer

```javascript
function getClaimer(address) view returns(address)
```

> Returns the whitelisted claimer for a certain address (0x0 if not set)

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user | address | The address of the user |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getDistributionEnd

```javascript
function getDistributionEnd() view returns(uint256)
```

> Gets the end date for the distribution

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getRewardsBalance

```javascript
function getRewardsBalance(address[],address) view returns(uint256)
```

> Returns the total of rewards of an user, already accrued + not yet accrued

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| assets | address[] |  |
| user | address | The address of the user |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getUserAssetData

```javascript
function getUserAssetData(address,address) view returns(uint256)
```

> Returns the data of an user on a distribution

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user | address | Address of the user |
| asset | address | The address of the reference asset of the distribution |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### getUserUnclaimedRewards

```javascript
function getUserUnclaimedRewards(address) view returns(uint256)
```

> returns the unclaimed rewards of the user

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user | address | the address of the user |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### handleAction

```javascript
function handleAction(address,uint256,uint256) nonpayable
```

> Called by the corresponding asset on any update that affects the rewards distribution

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| asset | address | The address of the user |
| userBalance | uint256 | The balance of the user of the asset in the lending pool |
| totalSupply | uint256 | The total supply of the asset in the lending pool* |

#### setClaimer

```javascript
function setClaimer(address,address) nonpayable
```

> Whitelists an address to claim the rewards on behalf of another address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| user | address | The address of the user |
| claimer | address | The address of the claimer |

#### setDistributionEnd

```javascript
function setDistributionEnd(uint256) nonpayable
```

> Sets the end date for the distribution

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| distributionEnd | uint256 | The end date timestamp* |

[⬅️ Contracts](contracts.md)
