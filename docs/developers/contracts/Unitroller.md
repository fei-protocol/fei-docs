[⬅️ Contracts](contracts.md)

# [Unitroller](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/external/Unitroller.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| rariPool8Comptroller | [0xc54172e34046c1653d1920d40333dd358c7a1af4](https://etherscan.io/address/0xc54172e34046c1653d1920d40333dd358c7a1af4) |

## Methods

#### _acceptAdmin

```javascript
function _acceptAdmin() nonpayable returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### _setBorrowPaused

```javascript
function _setBorrowPaused(address,bool) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address |  |
| borrowPaused | bool |  |

#### _setCloseFactor

```javascript
function _setCloseFactor(uint256) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newCloseFactorMantissa | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### _setCollateralFactor

```javascript
function _setCollateralFactor(address,uint256) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address |  |
| newCollateralFactorMantissa | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### _setLiquidationIncentive

```javascript
function _setLiquidationIncentive(uint256) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newLiquidationIncentiveMantissa | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### _setPendingAdmin

```javascript
function _setPendingAdmin(address) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newPendingAdmin | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### admin

```javascript
function admin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### borrowGuardianPaused

```javascript
function borrowGuardianPaused(address) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cToken | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### closeFactorMantissa

```javascript
function closeFactorMantissa() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### comptrollerImplementation

```javascript
function comptrollerImplementation() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### liquidationIncentiveMantissa

```javascript
function liquidationIncentiveMantissa() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### markets

```javascript
function markets(address) view returns(bool,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| isListed | bool |  |
| collateralFactorMantissa | uint256 |  |

#### pendingAdmin

```javascript
function pendingAdmin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### rewardsDistributors

```javascript
function rewardsDistributors(uint256) view returns(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| index | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

[⬅️ Contracts](contracts.md)
