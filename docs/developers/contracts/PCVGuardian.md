# PCVGuardian

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

#### PCVGuardianERC20Withdrawal

```javascript
event PCVGuardianERC20Withdrawal(address,address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit indexed | address |  |
| destination indexed | address |  |
| token indexed | address |  |
| amount | uint256 |  |

#### PCVGuardianETHWithdrawal

```javascript
event PCVGuardianETHWithdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit indexed | address |  |
| destination indexed | address |  |
| amount | uint256 |  |

#### PCVGuardianWithdrawal

```javascript
event PCVGuardianWithdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit indexed | address |  |
| destination indexed | address |  |
| amount | uint256 |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### SafeAddressAdded

```javascript
event SafeAddressAdded(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| safeAddress indexed | address |  |

#### SafeAddressRemoved

```javascript
event SafeAddressRemoved(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| safeAddress indexed | address |  |

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

#### getSafeAddresses

```javascript
function getSafeAddresses() view returns(address[])
```

> returns all safe addresses

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address[] |  |

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

#### isSafeAddress

```javascript
function isSafeAddress(address) view returns(bool)
```

> returns true if the the provided address is a valid destination to withdraw funds to

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit | address | the address to check |

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

#### setSafeAddress

```javascript
function setSafeAddress(address) nonpayable
```

> governor-only method to set an address as "safe" to withdraw funds to

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit | address | the address to set as safe |

#### setSafeAddresses

```javascript
function setSafeAddresses(address[]) nonpayable
```

> batch version of setSafeAddress

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _safeAddresses | address[] | the addresses to set as safe, as calldata |

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

#### unsetSafeAddress

```javascript
function unsetSafeAddress(address) nonpayable
```

> governor-or-guardian-only method to un-set an address as "safe" to withdraw funds to

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit | address | the address to un-set as safe |

#### unsetSafeAddresses

```javascript
function unsetSafeAddresses(address[]) nonpayable
```

> batch version of unsetSafeAddresses

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _safeAddresses | address[] | the addresses to un-set as safe |

#### withdrawERC20ToSafeAddress

```javascript
function withdrawERC20ToSafeAddress(address,address,address,uint256,bool,bool) nonpayable
```

> governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit | address | the deposit to pull funds from |
| safeAddress | address | the destination address to withdraw to |
| token | address |  |
| amount | uint256 | the amount of funds to withdraw |
| pauseAfter | bool | whether to pause the pcv after withdrawing |
| depositAfter | bool | if true, attempts to deposit to the target PCV deposit |

#### withdrawETHToSafeAddress

```javascript
function withdrawETHToSafeAddress(address,address,uint256,bool,bool) nonpayable
```

> governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit | address | the address of the pcv deposit contract |
| safeAddress | address | the destination address to withdraw to |
| amount | uint256 | the amount of tokens to withdraw |
| pauseAfter | bool | if true, the pcv contract will be paused after the withdraw |
| depositAfter | bool | if true, attempts to deposit to the target PCV deposit |

#### withdrawToSafeAddress

```javascript
function withdrawToSafeAddress(address,address,uint256,bool,bool) nonpayable
```

> governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| pcvDeposit | address | the address of the pcv deposit contract |
| safeAddress | address | the destination address to withdraw to |
| amount | uint256 | the amount to withdraw |
| pauseAfter | bool | if true, the pcv contract will be paused after the withdraw |
| depositAfter | bool | if true, attempts to deposit to the target PCV deposit |
