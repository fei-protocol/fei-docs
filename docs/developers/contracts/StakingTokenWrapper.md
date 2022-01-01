[⬅️ Contracts](contracts.md)

# [StakingTokenWrapper](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/staking/StakingTokenWrapper.sol)

> StakingTokenWrapper for TribalChief


Allows the TribalChief to distribute TRIBE to a beneficiary contract  The beneficiary is the sole holder of a dummy token staked in the TribalChief

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| stakingTokenWrapperBribeD3pool | [0x462515dC7c21C728C8b7A777fDC89EEdAcF74537](https://etherscan.io/address/0x462515dC7c21C728C8b7A777fDC89EEdAcF74537) |
| stakingTokenWrapperFOXLaaS | [0x3CD384ff1Fa1cbA8f06DF326AF4cbDA634aF94e8](https://etherscan.io/address/0x3CD384ff1Fa1cbA8f06DF326AF4cbDA634aF94e8) |
| stakingTokenWrapperGROLaaS | [0x508629e8E0B96986Df4D0F1F60aadeF1d0FbaE96](https://etherscan.io/address/0x508629e8E0B96986Df4D0F1F60aadeF1d0FbaE96) |
| stakingTokenWrapperKYLINLaaS | [0xFe266d143dB42a9835e2B1AB43B64a46278398cc](https://etherscan.io/address/0xFe266d143dB42a9835e2B1AB43B64a46278398cc) |
| stakingTokenWrapperMStableLaaS | [0x9B9ad20Cd99Cac3B536b94497A18346d66db0379](https://etherscan.io/address/0x9B9ad20Cd99Cac3B536b94497A18346d66db0379) |
| stakingTokenWrapperNEARLaaS | [0x3b3591a4f7FD386E9987Eb48d898e29b57c30c47](https://etherscan.io/address/0x3b3591a4f7FD386E9987Eb48d898e29b57c30c47) |
| stakingTokenWrapperPoolTogetherLaaS | [0x6b018170311F3DA23c3fA62AFe1b2D0638522CCD](https://etherscan.io/address/0x6b018170311F3DA23c3fA62AFe1b2D0638522CCD) |
| stakingTokenWrapperRari | [0xd81Be1B9A7895C996704A8DDa794BbA4454EeB90](https://etherscan.io/address/0xd81Be1B9A7895C996704A8DDa794BbA4454EeB90) |
| stakingTokenWrapperSYNLaaS | [0x5Db85e395735Bb42eEB720Fe2EE69627d246e300](https://etherscan.io/address/0x5Db85e395735Bb42eEB720Fe2EE69627d246e300) |
| stakingTokenWrapperUMALaaS | [0x90B336dFF819b9e4b3D9A32cabdcAB0E92836065](https://etherscan.io/address/0x90B336dFF819b9e4b3D9A32cabdcAB0E92836065) |

## Related Contracts


[TribalChief](TribalChief.md), [VotiumBriber](VotiumBriber.md), [STWBulkHarvest](STWBulkHarvest.md)

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

## Methods

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

#### beneficiary

```javascript
function beneficiary() view returns(address)
```

> the recipient of all harvested TRIBE

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### harvest

```javascript
function harvest() nonpayable
```

> send rewards to the beneficiary

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

#### init

```javascript
function init(uint256) nonpayable
```

> initialize the pool with this token as the sole staker

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _pid | uint256 | the pool id of the staking pool associated with this token |

#### name

```javascript
function name() view returns(string)
```

> Returns the name of the token.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### pid

```javascript
function pid() view returns(uint256)
```

> the pool id of the corresponding pool in the TribalChief

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### tribalChief

```javascript
function tribalChief() view returns(address)
```

> the TribalChief staking rewards contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

[⬅️ Contracts](contracts.md)
