# IRewardsDistributorAdmin

## Methods

#### AUTO_REWARDS_DISTRIBUTOR_ROLE

```javascript
function AUTO_REWARDS_DISTRIBUTOR_ROLE() view returns(bytes32)
```

> Role for AutoRewardsDistributor contracts

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### _acceptAdmin

```javascript
function _acceptAdmin() nonpayable
```

> Accepts transfer of admin rights. msg.sender must be pendingAdmin

> Admin function for pending admin to accept role and update admin

#### _addMarket

```javascript
function _addMarket(address) nonpayable
```

> Add a default market to claim rewards for in `claimRewards()`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market to add |

#### _grantComp

```javascript
function _grantComp(address,uint256) nonpayable
```

> Transfer COMP to the recipient

> Note: If there is not enough COMP, we do not perform the transfer all.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| recipient | address | The address of the recipient to transfer COMP to |
| amount | uint256 | The amount of COMP to (possibly) transfer |

#### _setCompBorrowSpeed

```javascript
function _setCompBorrowSpeed(address,uint256) nonpayable
```

> Set COMP speed for a single market

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market whose COMP speed to update |
| compSpeed | uint256 | New COMP speed for market |

#### _setCompSupplySpeed

```javascript
function _setCompSupplySpeed(address,uint256) nonpayable
```

> Set COMP speed for a single market

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address | The market whose COMP speed to update |
| compSpeed | uint256 | New COMP speed for market |

#### _setContributorCompSpeed

```javascript
function _setContributorCompSpeed(address,uint256) nonpayable
```

> Set COMP speed for a single contributor

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| contributor | address | The contributor whose COMP speed to update |
| compSpeed | uint256 | New COMP speed for contributor |

#### _setImplementation

```javascript
function _setImplementation(address) nonpayable
```

> Set logic contract address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| implementation_ | address |  |

#### _setPendingAdmin

```javascript
function _setPendingAdmin(address) nonpayable
```

> Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

> Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newPendingAdmin | address | New pending admin. |

#### compBorrowSpeeds

```javascript
function compBorrowSpeeds(address) view returns(uint256)
```

> The portion of compRate that each market currently receives

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### compSupplySpeeds

```javascript
function compSupplySpeeds(address) view returns(uint256)
```

> The portion of compRate that each market currently receives

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
