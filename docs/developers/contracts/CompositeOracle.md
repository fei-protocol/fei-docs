[⬅️ Contracts](contracts.md)

# [CompositeOracle](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/CompositeOracle.sol)

> A composite oracle
> 
> Author: Fei Protocol


Reads two oracles and returns their product

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| balUsdCompositeOracle | [0xDe0407851AEC6F073A63D27C7D29805CCD59D3e0](https://etherscan.io/address/0xDe0407851AEC6F073A63D27C7D29805CCD59D3e0) |
| chainlinkRaiUsdCompositeOracle | [0x392b1d29eDab680c5CA778D3A32b8284859BFBB0](https://etherscan.io/address/0x392b1d29eDab680c5CA778D3A32b8284859BFBB0) |
| compositeOracle | [0x8721f9EAba0B9081069970bCBce38763D3D4f28E](https://etherscan.io/address/0x8721f9EAba0B9081069970bCBce38763D3D4f28E) |
| creamUsdCompositeOracle | [0x2BDca027c7f57eD9AC1769Ba3a3D64600578bA49](https://etherscan.io/address/0x2BDca027c7f57eD9AC1769Ba3a3D64600578bA49) |
| tribeUsdCompositeOracle | [0xD7B8207f8644ee5cc60095023a8fcb8BdCF54732](https://etherscan.io/address/0xD7B8207f8644ee5cc60095023a8fcb8BdCF54732) |

## Related Contracts


[Core](Core.md), [ChainlinkOracleWrapper](ChainlinkOracleWrapper.md), [CollateralizationOracle](CollateralizationOracle.md), [BalancerPCVDepositWeightedPool](BalancerPCVDepositWeightedPool.md), [TribeReserveStabilizer](TribeReserveStabilizer.md)

## Events

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
|  | address |  |

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
function isOutdated() view returns(bool)
```

> determine if read value is stale

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### oracleA

```javascript
function oracleA() view returns(address)
```

> the first referenced oracle

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### oracleB

```javascript
function oracleB() view returns(address)
```

> the second referenced oracle

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

#### read

```javascript
function read() view returns(tuple,bool)
```

> read the oracle price

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |
|  | bool |  |

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

#### update

```javascript
function update() nonpayable
```

> updates the oracle price

[⬅️ Contracts](contracts.md)
