# AavePCVDeposit

> Aave PCV Deposit
> 
> Author: Fei Protocol

## Events

#### ClaimRewards

```javascript
event ClaimRewards(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| caller indexed | address |  |
| amount | uint256 |  |

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

#### Deposit

```javascript
event Deposit(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _from indexed | address |  |
| _amount | uint256 |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### Unpaused

```javascript
event Unpaused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### WithdrawERC20

```javascript
event WithdrawERC20(address,address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller indexed | address |  |
| _token indexed | address |  |
| _to indexed | address |  |
| _amount | uint256 |  |

#### WithdrawETH

```javascript
event WithdrawETH(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller indexed | address |  |
| _to indexed | address |  |
| _amount | uint256 |  |

#### Withdrawal

```javascript
event Withdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller indexed | address |  |
| _to indexed | address |  |
| _amount | uint256 |  |

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

#### aToken

```javascript
function aToken() view returns(address)
```

> the associated Aave aToken for the deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### balance

```javascript
function balance() view returns(uint256)
```

> returns total balance of PCV in the Deposit

> aTokens are rebasing, so represent 1:1 on underlying value

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() view returns(address)
```

> display the related token of the balance reported

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### claimRewards

```javascript
function claimRewards() nonpayable
```

> claims Aave rewards from the deposit and transfers to this address

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### deposit

```javascript
function deposit() nonpayable
```

> deposit buffered aTokens

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

#### incentivesController

```javascript
function incentivesController() view returns(address)
```

> the Aave incentives controller for the aToken

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### lendingPool

```javascript
function lendingPool() view returns(address)
```

> the Aave v2 lending pool

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> gets the resistant token balance and protocol owned fei of this deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |

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

#### token

```javascript
function token() view returns(address)
```

> the underlying token of the PCV deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### withdraw

```javascript
function withdraw(address,uint256) nonpayable
```

> withdraw tokens from the PCV allocation

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | the address to send PCV to |
| amountUnderlying | uint256 | of tokens withdrawn |

#### withdrawERC20

```javascript
function withdrawERC20(address,address,uint256) nonpayable
```

> withdraw ERC20 from the contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address | address of the ERC20 to send |
| to | address | address destination of the ERC20 |
| amount | uint256 | quantity of ERC20 to send |

#### withdrawETH

```javascript
function withdrawETH(address,uint256) nonpayable
```

> withdraw ETH from the contract

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | address to send ETH |
| amountOut | uint256 | amount of ETH to send |

#### wrapETH

```javascript
function wrapETH() nonpayable
```

> Wraps all ETH held by the contract to WETH Anyone can call it
