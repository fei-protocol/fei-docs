# IVotingToken

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

#### delegate

```javascript
function delegate(address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| delegatee | address |  |

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
