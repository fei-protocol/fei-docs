# IPCVGuardian

> IPCVGuardian


an interface for defining how the PCVGuardian functions


DEV NOTE: any implementation of this contract should be granted the roles of Guardian and PCVController in order to work correctly

## Events

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

## Methods

#### getSafeAddresses

```javascript
function getSafeAddresses() view returns(address[])
```

> returns all safe addresses

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address[] |  |

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
| safeAddresses | address[] | the addresses to set as safe, as calldata |

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
| safeAddresses | address[] | the addresses to un-set as safe |

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
| token | address | the token to withdraw |
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
