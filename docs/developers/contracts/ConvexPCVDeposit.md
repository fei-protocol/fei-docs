[⬅️ Contracts](contracts.md)

# [ConvexPCVDeposit](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/convex/ConvexPCVDeposit.sol)

> ConvexPCVDeposit: implementation for a PCVDeposit that stake/unstake the Curve LP tokens on Convex, and can claim rewards.
> 
> Author: Fei Protocol

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| d3poolConvexPCVDeposit | [0x5ae217dE26f6Ff5F481C6e10ec48b2cf2fc857C8](https://etherscan.io/address/0x5ae217dE26f6Ff5F481C6e10ec48b2cf2fc857C8) |

## Related Contracts


[Core](Core.md)

## Events

#### ContractAdminRoleUpdate

```javascript
event ContractAdminRoleUpdate(bytes32,bytes32)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldContractAdminRole | bytes32 indexed |  |
| newContractAdminRole | bytes32 indexed |  |

#### CoreUpdate

```javascript
event CoreUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldCore | address indexed |  |
| newCore | address indexed |  |

#### Deposit

```javascript
event Deposit(address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _from | address indexed |  |
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
| _caller | address indexed |  |
| _token | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

#### WithdrawETH

```javascript
event WithdrawETH(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

#### Withdrawal

```javascript
event Withdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _to | address indexed |  |
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

#### balance

```javascript
function balance() view returns(uint256)
```

> returns the balance in USD

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() pure returns(address)
```

> Curve/Convex deposits report their balance in USD

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### claimRewards

```javascript
function claimRewards() nonpayable
```

> claim CRV & CVX rewards earned by the LP tokens staked on this contract.

#### convexBooster

```javascript
function convexBooster() view returns(address)
```

> The Convex Booster contract (for deposit/withdraw)

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### convexRewards

```javascript
function convexRewards() view returns(address)
```

> The Convex Rewards contract (for claiming rewards)

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
|  | address | ICore implementation address |

#### curvePool

```javascript
function curvePool() view returns(address)
```

> The Curve pool to deposit in

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### deposit

```javascript
function deposit() nonpayable
```

> deposit Curve LP tokens on Convex and stake deposit tokens in the Convex rewards contract. Note : this call is permissionless, and can be used if LP tokens are transferred to this contract directly.

#### fei

```javascript
function fei() view returns(address)
```

> address of the Fei contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | IFei implementation address |

#### feiBalance

```javascript
function feiBalance() view returns(uint256)
```

> fei balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | fei amount held |

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

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> returns the resistant balance in USD and FEI held by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| resistantBalance | uint256 |  |
| resistantFei | uint256 |  |

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

#### tribe

```javascript
function tribe() view returns(address)
```

> address of the Tribe contract referenced by Core

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | IERC20 implementation address |

#### tribeBalance

```javascript
function tribeBalance() view returns(uint256)
```

> tribe balance of contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | tribe amount held |

#### unpause

```javascript
function unpause() nonpayable
```

> set pausable methods to unpaused

#### withdraw

```javascript
function withdraw(address,uint256) nonpayable
```

> unstake LP tokens from Convex Rewards, and withdraw Curve LP tokens from Convex

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address |  |
| amountLpTokens | uint256 |  |

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

[⬅️ Contracts](contracts.md)
