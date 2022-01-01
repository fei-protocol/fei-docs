[⬅️ Contracts](contracts.md)

# [ChainlinkOracleWrapper](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/ChainlinkOracleWrapper.sol)

> Chainlink oracle wrapper
> 
> Author: eswak


Reads a Chainlink oracle value & wrap it under the standard Fei oracle interface

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| chainlinkBALEthOracle | [0x7261D245454Daa070C77B2a26eA192E3a4c8F655](https://etherscan.io/address/0x7261D245454Daa070C77B2a26eA192E3a4c8F655) |
| chainlinkCREAMEthOracle | [0xDE02522cDc4959117fe839a7326D80F9858f383C](https://etherscan.io/address/0xDE02522cDc4959117fe839a7326D80F9858f383C) |
| chainlinkDaiUsdOracleWrapper | [0x231aDa12E273eDf3fA54CbD90c5C1a73129D5bb9](https://etherscan.io/address/0x231aDa12E273eDf3fA54CbD90c5C1a73129D5bb9) |
| chainlinkDpiUsdOracleWrapper | [0xB594d2bd55Ede471e16b92AE6F7651648DA871c3](https://etherscan.io/address/0xB594d2bd55Ede471e16b92AE6F7651648DA871c3) |
| chainlinkEthUsdOracleWrapper | [0xCd3c40AE1256922BA16C7872229385E20Bc8351e](https://etherscan.io/address/0xCd3c40AE1256922BA16C7872229385E20Bc8351e) |
| chainlinkEurUsdOracleWrapper | [0xFb3a062236A7E08b572F17bc9Ad2bBc2becB87b1](https://etherscan.io/address/0xFb3a062236A7E08b572F17bc9Ad2bBc2becB87b1) |
| chainlinkFeiEthOracleWrapper | [0x060Be7B51F78DFFd04749332fd306BA1228e7444](https://etherscan.io/address/0x060Be7B51F78DFFd04749332fd306BA1228e7444) |
| chainlinkLUSDOracleWrapper | [0xe61d11ec732d556A26fb863B192052BEa03eF8B5](https://etherscan.io/address/0xe61d11ec732d556A26fb863B192052BEa03eF8B5) |
| chainlinkRaiEthOracleWrapper | [0x3d49573ee6aFCBDe606F8a1c2AA1C498048E7190](https://etherscan.io/address/0x3d49573ee6aFCBDe606F8a1c2AA1C498048E7190) |
| chainlinkTribeEthOracleWrapper | [0x061118ccabF0c2c62f05a2e3C2bd4379c0C70079](https://etherscan.io/address/0x061118ccabF0c2c62f05a2e3C2bd4379c0C70079) |

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

#### chainlinkOracle

```javascript
function chainlinkOracle() view returns(address)
```

> the referenced chainlink oracle

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

#### oracleDecimalsNormalizer

```javascript
function oracleDecimalsNormalizer() view returns(uint256)
```

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
function update() view
```

> updates the oracle price

> no-op, Chainlink is updated automatically

[⬅️ Contracts](contracts.md)
