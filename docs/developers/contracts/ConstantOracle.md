[⬅️ Contracts](contracts.md)

# [ConstantOracle](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/ConstantOracle.sol)

> Constant oracle
> 
> Author: Fei Protocol


Return a constant oracle price

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| oneConstantOracle | [0x2374800337c6BE8B935f96AA6c10b33f9F12Bd40](https://etherscan.io/address/0x2374800337c6BE8B935f96AA6c10b33f9F12Bd40) |
| zeroConstantOracle | [0x43b99923CF06D6D9101110b595234670f73A4934](https://etherscan.io/address/0x43b99923CF06D6D9101110b595234670f73A4934) |

## Related Contracts


[Core](Core.md), [CollateralizationOracle](CollateralizationOracle.md)

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

#### Update

```javascript
event Update(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _peg | uint256 |  |

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

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | ICore implementation address |

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

#### isOutdated

```javascript
function isOutdated() pure returns(bool)
```

> determine if read value is stale

> always false, oracle is fixed

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

#### read

```javascript
function read() view returns(tuple,bool)
```

> read the oracle price

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple | constant oracle price |
|  | bool | true if not paused |

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

#### update

```javascript
function update() pure
```

> updates the oracle price

> no-op, oracle is fixed

[⬅️ Contracts](contracts.md)
