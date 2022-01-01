[⬅️ Contracts](contracts.md)

# [EthTokemakPCVDeposit](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/tokemak/EthTokemakPCVDeposit.sol)

> ETH implementation for a Tokemak PCV Deposit
> 
> Author: Fei Protocol

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| ethTokemakPCVDeposit | [0x0961d2a545e0c1201B313d14C57023682a546b9D](https://etherscan.io/address/0x0961d2a545e0c1201B313d14C57023682a546b9D) |

## Related Contracts


[Core](Core.md)

## Events

#### ClaimRewards

```javascript
event ClaimRewards(address,address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _token | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

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

#### RequestWithdrawal

```javascript
event RequestWithdrawal(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _caller | address indexed |  |
| _to | address indexed |  |
| _amount | uint256 |  |

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

> returns total balance of PCV in the Deposit excluding the FEI

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
function claimRewards(uint256,uint256,uint8,bytes32,bytes32) nonpayable
```

> For an example of IPFS json file, see :

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| cycle | uint256 |  |
| amount | uint256 |  |
| v | uint8 |  |
| r | bytes32 |  |
| s | bytes32 |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | ICore implementation address |

#### deposit

```javascript
function deposit() nonpayable
```

> deposit ETH to Tokemak

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

#### pool

```javascript
function pool() view returns(address)
```

> the tokemak pool to deposit in

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### requestWithdrawal

```javascript
function requestWithdrawal(uint256) nonpayable
```

> request to withdraw a given amount of tokens to Tokemak. These tokens will be available for withdraw in the next cycles. This function can be called by the contract admin, e.g. the OA multisig, in anticipation of the execution of a DAO proposal that will call withdraw().

> note that withdraw() calls will revert if this function has not been called before.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountUnderlying | uint256 | of tokens to withdraw in a subsequent withdraw() call. |

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

#### rewards

```javascript
function rewards() view returns(address)
```

> the tokemak rewards contract to claim TOKE incentives

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

> the token stored in the Tokemak pool

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

[⬅️ Contracts](contracts.md)
