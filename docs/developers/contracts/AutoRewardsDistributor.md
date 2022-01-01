# AutoRewardsDistributor


Controller Contract to set tribe per block in Rewards Distributor Admin on Rari

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

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### RewardsDistributorAdminChanged

```javascript
event RewardsDistributorAdminChanged(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldRewardsDistributorAdmin | address |  |
| newRewardsDistributorAdmin | address |  |

#### SpeedChanged

```javascript
event SpeedChanged(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newSpeed | uint256 |  |

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

#### cTokenAddress

```javascript
function cTokenAddress() view returns(address)
```

> address of the CToken this contract controls rewards for

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

#### getNewRewardSpeed

```javascript
function getNewRewardSpeed() view returns(uint256,bool)
```

> function to get the new comp speed and figure out if an update is needed

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCompSpeed | uint256 | the newly calculated compSpeed based on allocation points in the TribalChief |
| updateNeeded | bool | boolean indicating whether the new compSpeed is not equal to the existing compSpeed |

#### isBorrowIncentivized

```javascript
function isBorrowIncentivized() view returns(bool)
```

> boolean which decides the action to incentivize

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

#### rewardsDistributorAdmin

```javascript
function rewardsDistributorAdmin() view returns(address)
```

> rewards distributor admin contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### setAutoRewardsDistribution

```javascript
function setAutoRewardsDistribution() nonpayable
```

> function to automatically set the rewards speed on the RewardsDistributor contract through the RewardsDistributorAdmin

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

#### setRewardsDistributorAdmin

```javascript
function setRewardsDistributorAdmin(address) nonpayable
```

> API to point to a new rewards distributor admin contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _newRewardsDistributorAdmin | address | the address of the new RewardsDistributorAdmin contract |

#### tribalChief

```javascript
function tribalChief() view returns(address)
```

> tribal chief contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribalChiefRewardIndex

```javascript
function tribalChiefRewardIndex() view returns(uint256)
```

> reward index on tribal chief to grab this staked token wrapper's index

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
