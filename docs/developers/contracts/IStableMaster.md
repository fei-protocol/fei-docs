[⬅️ Contracts](contracts.md)

# [IStableMaster](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/angle/AngleUniswapPCVDeposit.sol)

## Methods

#### agToken

```javascript
function agToken() nonpayable returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### burn

```javascript
function burn(uint256,address,address,address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 |  |
| burner | address |  |
| dest | address |  |
| poolManager | address |  |
| minCollatAmount | uint256 |  |

#### mint

```javascript
function mint(uint256,address,address,uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amount | uint256 |  |
| user | address |  |
| poolManager | address |  |
| minStableAmount | uint256 |  |

#### unpause

```javascript
function unpause(bytes32,address) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| agent | bytes32 |  |
| poolManager | address |  |

[⬅️ Contracts](contracts.md)
