[⬅️ Contracts](contracts.md)

# [CErc20Delegator](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/external/CErc20Delegator.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| rariPool8Dai | [0x7e9cE3CAa9910cc048590801e64174957Ed41d43](https://etherscan.io/address/0x7e9cE3CAa9910cc048590801e64174957Ed41d43) |
| rariPool8Eth | [0xbB025D470162CC5eA24daF7d4566064EE7f5F111](https://etherscan.io/address/0xbB025D470162CC5eA24daF7d4566064EE7f5F111) |
| rariPool8Fei | [0xd8553552f8868C1Ef160eEdf031cF0BCf9686945](https://etherscan.io/address/0xd8553552f8868C1Ef160eEdf031cF0BCf9686945) |
| rariPool8Tribe | [0xFd3300A9a74b3250F1b2AbC12B47611171910b07](https://etherscan.io/address/0xFd3300A9a74b3250F1b2AbC12B47611171910b07) |

## Events

#### Approval

```javascript
event Approval(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| owner indexed | address |  |
| spender indexed | address |  |
| value | uint256 |  |

#### Transfer

```javascript
event Transfer(address,address,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from indexed | address |  |
| to indexed | address |  |
| value | uint256 |  |

## Methods

#### _acceptAdmin

```javascript
function _acceptAdmin() nonpayable returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### _setInterestRateModel

```javascript
function _setInterestRateModel(address) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newInterestRateModel | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### _setPendingAdmin

```javascript
function _setPendingAdmin(address) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newPendingAdmin | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### admin

```javascript
function admin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### allowance

```javascript
function allowance(address,address) view returns(uint256)
```

> Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.

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

> Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.

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

> Returns the amount of tokens owned by `account`.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceOfUnderlying

```javascript
function balanceOfUnderlying(address) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| owner | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### interestRateModel

```javascript
function interestRateModel() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### mint

```javascript
function mint(uint256) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| mintAmount | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### pendingAdmin

```javascript
function pendingAdmin() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### totalSupply

```javascript
function totalSupply() view returns(uint256)
```

> Returns the amount of tokens in existence.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### transfer

```javascript
function transfer(address,uint256) nonpayable returns(bool)
```

> Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

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

> Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

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

[⬅️ Contracts](contracts.md)
