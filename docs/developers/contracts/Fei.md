[⬅️ Contracts](contracts.md)

# [Fei](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/token/Fei.sol)

> FEI stablecoin
> 
> Author: Fei Protocol

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| fei | [0x956F47F50A910163D8BF957Cf5846D573E7f87CA](https://etherscan.io/address/0x956F47F50A910163D8BF957Cf5846D573E7f87CA) |

## Related Contracts


[Core](Core.md), [CErc20Delegator](CErc20Delegator.md), [FeiDAOTimelock](FeiDAOTimelock.md), [CollateralizationOracleKeeper](CollateralizationOracleKeeper.md), [PCVDripController](PCVDripController.md), [EthBondingCurve](EthBondingCurve.md), [PriceBoundPSM](PriceBoundPSM.md), [AavePCVDeposit](AavePCVDeposit.md), [AngleUniswapPCVDeposit](AngleUniswapPCVDeposit.md), [UniswapPCVDeposit](UniswapPCVDeposit.md), [ERC20CompoundPCVDeposit](ERC20CompoundPCVDeposit.md)

## Events

#### Approval

```javascript
event Approval(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| owner | address indexed |  |
| spender | address indexed |  |
| value | uint256 |  |

#### Burning

```javascript
event Burning(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _to | address indexed |  |
| _burner | address indexed |  |
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

#### IncentiveContractUpdate

```javascript
event IncentiveContractUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _incentivized | address indexed |  |
| _incentiveContract | address indexed |  |

#### Minting

```javascript
event Minting(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _to | address indexed |  |
| _minter | address indexed |  |
| _amount | uint256 |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### Transfer

```javascript
event Transfer(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address indexed |  |
| to | address indexed |  |
| value | uint256 |  |

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

#### DOMAIN_SEPARATOR

```javascript
function DOMAIN_SEPARATOR() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### PERMIT_TYPEHASH

```javascript
function PERMIT_TYPEHASH() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### allowance

```javascript
function allowance(address,address) view returns(uint256)
```

> See {IERC20-allowance}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| owner | address |  |
| spender | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### approve

```javascript
function approve(address,uint256) nonpayable returns(bool)
```

> See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| spender | address |  |
| amount | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### balanceOf

```javascript
function balanceOf(address) view returns(uint256)
```

> See {IERC20-balanceOf}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### burn

```javascript
function burn(uint256) nonpayable
```

> burn FEI tokens from caller

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 | the amount to burn |

#### burnFrom

```javascript
function burnFrom(address,uint256) nonpayable
```

> burn FEI tokens from specified account

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | the account to burn from |
| amount | uint256 | the amount to burn |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | ICore implementation address |

#### decimals

```javascript
function decimals() view returns(uint8)
```

> Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint8 |  |

#### decreaseAllowance

```javascript
function decreaseAllowance(address,uint256) nonpayable returns(bool)
```

> Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| spender | address |  |
| subtractedValue | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

#### incentiveContract

```javascript
function incentiveContract(address) view returns(address)
```

> get associated incentive contract, 0 address if N/A

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### increaseAllowance

```javascript
function increaseAllowance(address,uint256) nonpayable returns(bool)
```

> Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| spender | address |  |
| addedValue | uint256 |  |

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

#### mint

```javascript
function mint(address,uint256) nonpayable
```

> mint FEI tokens

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | the account to mint to |
| amount | uint256 | the amount to mint |

#### name

```javascript
function name() view returns(string)
```

> Returns the name of the token.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### nonces

```javascript
function nonces(address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### permit

```javascript
function permit(address,address,uint256,uint256,uint8,bytes32,bytes32) nonpayable
```

> permit spending of FEI

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| owner | address | the FEI holder |
| spender | address | the approved operator |
| value | uint256 | the amount approved |
| deadline | uint256 | the deadline after which the approval is no longer valid |
| v | uint8 |  |
| r | bytes32 |  |
| s | bytes32 |  |

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

#### setIncentiveContract

```javascript
function setIncentiveContract(address,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | the account to incentivize |
| incentive | address | the associated incentive contract |

#### symbol

```javascript
function symbol() view returns(string)
```

> Returns the symbol of the token, usually a shorter version of the name.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### totalSupply

```javascript
function totalSupply() view returns(uint256)
```

> See {IERC20-totalSupply}.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### transfer

```javascript
function transfer(address,uint256) nonpayable returns(bool)
```

> See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| recipient | address |  |
| amount | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### transferFrom

```javascript
function transferFrom(address,address,uint256) nonpayable returns(bool)
```

> See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| sender | address |  |
| recipient | address |  |
| amount | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

[⬅️ Contracts](contracts.md)
