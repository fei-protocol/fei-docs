[⬅️ Contracts](contracts.md)

# [Core](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/core/Core.sol)

> Source of truth for Fei Protocol
> 
> Author: Fei Protocol


maintains roles, access control, fei, tribe, genesisGroup, and the TRIBE treasury

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| core | [0x8d5ED43dCa8C2F7dFB20CF7b53CC7E593635d7b9](https://etherscan.io/address/0x8d5ED43dCa8C2F7dFB20CF7b53CC7E593635d7b9) |

## Related Contracts


[CollateralizationOracleGuardian](CollateralizationOracleGuardian.md), [Fei](Fei.md), [BalancerLBPSwapper](BalancerLBPSwapper.md), [OwnableTimedMinter](OwnableTimedMinter.md), [PCVEquityMinter](PCVEquityMinter.md), [PCVGuardian](PCVGuardian.md), [RatioPCVController](RatioPCVController.md), [Tribe](Tribe.md), [TribeMinter](TribeMinter.md), [FeiDAOTimelock](FeiDAOTimelock.md), [OptimisticTimelock](OptimisticTimelock.md), [PCVDripController](PCVDripController.md), [EthBondingCurve](EthBondingCurve.md), [PriceBoundPSM](PriceBoundPSM.md), [EthReserveStabilizer](EthReserveStabilizer.md), [TribeReserveStabilizer](TribeReserveStabilizer.md), [AavePCVDeposit](AavePCVDeposit.md), [AngleUniswapPCVDeposit](AngleUniswapPCVDeposit.md), [BalancerPCVDepositWeightedPool](BalancerPCVDepositWeightedPool.md), [ERC20CompoundPCVDeposit](ERC20CompoundPCVDeposit.md), [EthCompoundPCVDeposit](EthCompoundPCVDeposit.md), [ConvexPCVDeposit](ConvexPCVDeposit.md), [CurvePCVDepositPlainPool](CurvePCVDepositPlainPool.md), [UniswapPCVDeposit](UniswapPCVDeposit.md), [EthLidoPCVDeposit](EthLidoPCVDeposit.md), [EthTokemakPCVDeposit](EthTokemakPCVDeposit.md), [SnapshotDelegatorPCVDeposit](SnapshotDelegatorPCVDeposit.md), [ERC20TokemakPCVDeposit](ERC20TokemakPCVDeposit.md), [CollateralizationOracle](CollateralizationOracle.md), [CollateralizationOracleWrapper](CollateralizationOracleWrapper.md), [NamedStaticPCVDepositWrapper](NamedStaticPCVDepositWrapper.md), [CompositeOracle](CompositeOracle.md), [ChainlinkOracleWrapper](ChainlinkOracleWrapper.md), [ConstantOracle](ConstantOracle.md), [CollateralizationOracleKeeper](CollateralizationOracleKeeper.md), [AutoRewardsDistributor](AutoRewardsDistributor.md), [ERC20Dripper](ERC20Dripper.md), [TribalChief](TribalChief.md)

## Events

#### FeiUpdate

```javascript
event FeiUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _fei indexed | address |  |

#### GenesisGroupUpdate

```javascript
event GenesisGroupUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _genesisGroup indexed | address |  |

#### GenesisPeriodComplete

```javascript
event GenesisPeriodComplete(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _timestamp | uint256 |  |

#### RoleAdminChanged

```javascript
event RoleAdminChanged(bytes32,bytes32,bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role indexed | bytes32 |  |
| previousAdminRole indexed | bytes32 |  |
| newAdminRole indexed | bytes32 |  |

#### RoleGranted

```javascript
event RoleGranted(bytes32,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role indexed | bytes32 |  |
| account indexed | address |  |
| sender indexed | address |  |

#### RoleRevoked

```javascript
event RoleRevoked(bytes32,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role indexed | bytes32 |  |
| account indexed | address |  |
| sender indexed | address |  |

#### TribeAllocation

```javascript
event TribeAllocation(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _to indexed | address |  |
| _amount | uint256 |  |

#### TribeUpdate

```javascript
event TribeUpdate(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _tribe indexed | address |  |

## Methods

#### BURNER_ROLE

```javascript
function BURNER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### DEFAULT_ADMIN_ROLE

```javascript
function DEFAULT_ADMIN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### GOVERN_ROLE

```javascript
function GOVERN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### GUARDIAN_ROLE

```javascript
function GUARDIAN_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### MINTER_ROLE

```javascript
function MINTER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### PCV_CONTROLLER_ROLE

```javascript
function PCV_CONTROLLER_ROLE() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### allocateTribe

```javascript
function allocateTribe(address,uint256) nonpayable
```

> sends TRIBE tokens from treasury to an address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | the address to send TRIBE to |
| amount | uint256 | the amount of TRIBE to send |

#### createRole

```javascript
function createRole(bytes32,bytes32) nonpayable
```

> creates a new role to be maintained

> can also be used to update admin of existing role

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 | the new role id |
| adminRole | bytes32 | the admin role id for `role` |

#### fei

```javascript
function fei() view returns(address)
```

> the address of the FEI contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getRoleAdmin

```javascript
function getRoleAdmin(bytes32) view returns(bytes32)
```

> Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### getRoleMember

```javascript
function getRoleMember(bytes32,uint256) view returns(address)
```

> Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| index | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getRoleMemberCount

```javascript
function getRoleMemberCount(bytes32) view returns(uint256)
```

> Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### grantBurner

```javascript
function grantBurner(address) nonpayable
```

> grants burner role to address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| burner | address | new burner |

#### grantGovernor

```javascript
function grantGovernor(address) nonpayable
```

> grants governor role to address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| governor | address | new governor |

#### grantGuardian

```javascript
function grantGuardian(address) nonpayable
```

> grants guardian role to address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| guardian | address | new guardian |

#### grantMinter

```javascript
function grantMinter(address) nonpayable
```

> grants minter role to address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| minter | address | new minter |

#### grantPCVController

```javascript
function grantPCVController(address) nonpayable
```

> grants controller role to address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvController | address | new controller |

#### grantRole

```javascript
function grantRole(bytes32,address) nonpayable
```

> Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### hasRole

```javascript
function hasRole(bytes32,address) view returns(bool)
```

> Returns `true` if `account` has been granted `role`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### init

```javascript
function init() nonpayable
```

#### isBurner

```javascript
function isBurner(address) view returns(bool)
```

> checks if address is a burner

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address | address to check |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isGovernor

```javascript
function isGovernor(address) view returns(bool)
```

> checks if address is a governor

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address | address to check |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isGuardian

```javascript
function isGuardian(address) view returns(bool)
```

> checks if address is a guardian

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address | address to check |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isMinter

```javascript
function isMinter(address) view returns(bool)
```

> checks if address is a minter

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address | address to check |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isPCVController

```javascript
function isPCVController(address) view returns(bool)
```

> checks if address is a controller

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _address | address | address to check |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### renounceRole

```javascript
function renounceRole(bytes32,address) nonpayable
```

> Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### revokeBurner

```javascript
function revokeBurner(address) nonpayable
```

> revokes burner role from address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| burner | address | ex burner |

#### revokeGovernor

```javascript
function revokeGovernor(address) nonpayable
```

> revokes governor role from address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| governor | address | ex governor |

#### revokeGuardian

```javascript
function revokeGuardian(address) nonpayable
```

> revokes guardian role from address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| guardian | address | ex guardian |

#### revokeMinter

```javascript
function revokeMinter(address) nonpayable
```

> revokes minter role from address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| minter | address | ex minter |

#### revokeOverride

```javascript
function revokeOverride(bytes32,address) nonpayable
```

> revokes a role from address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 | the role to revoke |
| account | address | the address to revoke the role from |

#### revokePCVController

```javascript
function revokePCVController(address) nonpayable
```

> revokes pcvController role from address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvController | address | ex pcvController |

#### revokeRole

```javascript
function revokeRole(bytes32,address) nonpayable
```

> Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| role | bytes32 |  |
| account | address |  |

#### setFei

```javascript
function setFei(address) nonpayable
```

> sets Fei address to a new address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address | new fei address |

#### setTribe

```javascript
function setTribe(address) nonpayable
```

> sets Tribe address to a new address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address | new tribe address |

#### supportsInterface

```javascript
function supportsInterface(bytes4) view returns(bool)
```

> See {IERC165-supportsInterface}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| interfaceId | bytes4 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### tribe

```javascript
function tribe() view returns(address)
```

> the address of the TRIBE contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

[⬅️ Contracts](contracts.md)
