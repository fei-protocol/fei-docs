[⬅️ Contracts](contracts.md)

# [ProxyAdmin](https://github.com/fei-protocol/fei-protocol-core/blob/develop/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol)


DEV NOTE: This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| proxyAdmin | [0xf8c2b645988b7658E7748BA637fE25bdD46A704A](https://etherscan.io/address/0xf8c2b645988b7658E7748BA637fE25bdD46A704A) |

## Related Contracts


[FeiDAOTimelock](FeiDAOTimelock.md), [IAaveIncentivesController](IAaveIncentivesController.md), [TribalChief](TribalChief.md), [CollateralizationOracleWrapper](CollateralizationOracleWrapper.md)

## Events

#### OwnershipTransferred

```javascript
event OwnershipTransferred(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| previousOwner indexed | address |  |
| newOwner indexed | address |  |

## Methods

#### changeProxyAdmin

```javascript
function changeProxyAdmin(address,address) nonpayable
```

> Changes the admin of `proxy` to `newAdmin`. Requirements: - This contract must be the current admin of `proxy`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proxy | address |  |
| newAdmin | address |  |

#### getProxyAdmin

```javascript
function getProxyAdmin(address) view returns(address)
```

> Returns the current admin of `proxy`. Requirements: - This contract must be the admin of `proxy`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proxy | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getProxyImplementation

```javascript
function getProxyImplementation(address) view returns(address)
```

> Returns the current implementation of `proxy`. Requirements: - This contract must be the admin of `proxy`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proxy | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### owner

```javascript
function owner() view returns(address)
```

> Returns the address of the current owner.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### renounceOwnership

```javascript
function renounceOwnership() nonpayable
```

> Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

#### transferOwnership

```javascript
function transferOwnership(address) nonpayable
```

> Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOwner | address |  |

#### upgrade

```javascript
function upgrade(address,address) nonpayable
```

> Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}. Requirements: - This contract must be the admin of `proxy`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proxy | address |  |
| implementation | address |  |

#### upgradeAndCall

```javascript
function upgradeAndCall(address,address,bytes) payable
```

> Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}. Requirements: - This contract must be the admin of `proxy`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proxy | address |  |
| implementation | address |  |
| data | bytes |  |

[⬅️ Contracts](contracts.md)
