[⬅️ Contracts](contracts.md)

# [Tribe](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/Tribe.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| tribe | [0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B](https://etherscan.io/address/0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B) |

## Related Contracts


[Core](Core.md), [CErc20Delegator](CErc20Delegator.md), [FeiDAO](FeiDAO.md), [ERC20Dripper](ERC20Dripper.md), [IAaveIncentivesController](IAaveIncentivesController.md), [TribeMinter](TribeMinter.md), [TribeReserveStabilizer](TribeReserveStabilizer.md)

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
| amount | uint256 |  |

#### DelegateChanged

```javascript
event DelegateChanged(address,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegator | address indexed |  |
| fromDelegate | address indexed |  |
| toDelegate | address indexed |  |

#### DelegateVotesChanged

```javascript
event DelegateVotesChanged(address,uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegate | address indexed |  |
| previousBalance | uint256 |  |
| newBalance | uint256 |  |

#### MinterChanged

```javascript
event MinterChanged(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| minter | address |  |
| newMinter | address |  |

#### Transfer

```javascript
event Transfer(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address indexed |  |
| to | address indexed |  |
| amount | uint256 |  |

## Methods

#### DELEGATION_TYPEHASH

```javascript
function DELEGATION_TYPEHASH() view returns(bytes32)
```

> The EIP-712 typehash for the delegation struct used by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### DOMAIN_TYPEHASH

```javascript
function DOMAIN_TYPEHASH() view returns(bytes32)
```

> The EIP-712 typehash for the contract's domain

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### PERMIT_TYPEHASH

```javascript
function PERMIT_TYPEHASH() view returns(bytes32)
```

> The EIP-712 typehash for the permit struct used by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### allowance

```javascript
function allowance(address,address) view returns(uint256)
```

> Get the number of tokens `spender` is approved to spend on behalf of `account`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | The address of the account holding the funds |
| spender | address | The address of the account spending the funds |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | The number of tokens approved |

#### approve

```javascript
function approve(address,uint256) nonpayable returns(bool)
```

> Approve `spender` to transfer up to `amount` from `src`

> This will overwrite the approval amount for `spender`  and is subject to issues noted [here](https://eips.ethereum.org/EIPS/eip-20#approve)

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| spender | address | The address of the account which may transfer tokens |
| rawAmount | uint256 | The number of tokens that are approved (2^256-1 means infinite) |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool | Whether or not the approval succeeded |

#### balanceOf

```javascript
function balanceOf(address) view returns(uint256)
```

> Get the number of tokens held by the `account`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | The address of the account to get the balance of |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 | The number of tokens held |

#### checkpoints

```javascript
function checkpoints(address,uint32) view returns(uint32,uint96)
```

> A record of votes checkpoints for each account, by index

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
|  | uint32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| fromBlock | uint32 |  |
| votes | uint96 |  |

#### decimals

```javascript
function decimals() view returns(uint8)
```

> EIP-20 token decimals for this token

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint8 |  |

#### delegate

```javascript
function delegate(address) nonpayable
```

> Delegate votes from `msg.sender` to `delegatee`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address | The address to delegate votes to |

#### delegateBySig

```javascript
function delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32) nonpayable
```

> Delegates votes from signatory to `delegatee`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address | The address to delegate votes to |
| nonce | uint256 | The contract state required to match the signature |
| expiry | uint256 | The time at which to expire the signature |
| v | uint8 | The recovery byte of the signature |
| r | bytes32 | Half of the ECDSA signature pair |
| s | bytes32 | Half of the ECDSA signature pair |

#### delegates

```javascript
function delegates(address) view returns(address)
```

> A record of each accounts delegate

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getCurrentVotes

```javascript
function getCurrentVotes(address) view returns(uint96)
```

> Gets the current votes balance for `account`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | The address to get votes balance |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint96 | The number of current votes for `account` |

#### getPriorVotes

```javascript
function getPriorVotes(address,uint256) view returns(uint96)
```

> Determine the prior number of votes for an account as of a block number

> Block number must be a finalized block or else this function will revert to prevent misinformation.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address | The address of the account to check |
| blockNumber | uint256 | The block number to get the vote balance at |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint96 | The number of votes the account had as of the given block |

#### mint

```javascript
function mint(address,uint256) nonpayable
```

> Mint new tokens

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| dst | address | The address of the destination account |
| rawAmount | uint256 | The number of tokens to be minted |

#### minter

```javascript
function minter() view returns(address)
```

> Address which may mint new tokens

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### name

```javascript
function name() view returns(string)
```

> EIP-20 token name for this token

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### nonces

```javascript
function nonces(address) view returns(uint256)
```

> A record of states for signing / validating signatures

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### numCheckpoints

```javascript
function numCheckpoints(address) view returns(uint32)
```

> The number of checkpoints for each account

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint32 |  |

#### permit

```javascript
function permit(address,address,uint256,uint256,uint8,bytes32,bytes32) nonpayable
```

> Triggers an approval from owner to spends

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| owner | address | The address to approve from |
| spender | address | The address to be approved |
| rawAmount | uint256 | The number of tokens that are approved (2^256-1 means infinite) |
| deadline | uint256 | The time at which to expire the signature |
| v | uint8 | The recovery byte of the signature |
| r | bytes32 | Half of the ECDSA signature pair |
| s | bytes32 | Half of the ECDSA signature pair |

#### setMinter

```javascript
function setMinter(address) nonpayable
```

> Change the minter address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| minter_ | address | The address of the new minter |

#### symbol

```javascript
function symbol() view returns(string)
```

> EIP-20 token symbol for this token

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### totalSupply

```javascript
function totalSupply() view returns(uint256)
```

> Total number of tokens in circulation

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### transfer

```javascript
function transfer(address,uint256) nonpayable returns(bool)
```

> Transfer `amount` tokens from `msg.sender` to `dst`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| dst | address | The address of the destination account |
| rawAmount | uint256 | The number of tokens to transfer |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool | Whether or not the transfer succeeded |

#### transferFrom

```javascript
function transferFrom(address,address,uint256) nonpayable returns(bool)
```

> Transfer `amount` tokens from `src` to `dst`

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| src | address | The address of the source account |
| dst | address | The address of the destination account |
| rawAmount | uint256 | The number of tokens to transfer |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool | Whether or not the transfer succeeded |

[⬅️ Contracts](contracts.md)
