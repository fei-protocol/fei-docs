[⬅️ Contracts](contracts.md)

# [CollateralizationOracle](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/oracle/collateralization/CollateralizationOracle.sol)

> Fei Protocol's Collateralization Oracle
> 
> Author: eswak


Reads a list of PCVDeposit that report their amount of collateral         and the amount of protocol-owned FEI they manage, to deduce the         protocol-wide collateralization ratio.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| collateralizationOracle | [0xFF6f59333cfD8f4Ebc14aD0a0E181a83e655d257](https://etherscan.io/address/0xFF6f59333cfD8f4Ebc14aD0a0E181a83e655d257) |

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

#### DepositAdd

```javascript
event DepositAdd(address,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address |  |
| deposit indexed | address |  |
| token indexed | address |  |

#### DepositRemove

```javascript
event DepositRemove(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address |  |
| deposit indexed | address |  |

#### OracleUpdate

```javascript
event OracleUpdate(address,address,address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| from | address |  |
| token indexed | address |  |
| oldOracle indexed | address |  |
| newOracle indexed | address |  |

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

#### addDeposit

```javascript
function addDeposit(address) nonpayable
```

> Add a PCVDeposit to the list of deposits inspected by the         collateralization ratio oracle.         note : this function reverts if the deposit is already in the list.         note : this function reverts if the deposit's token has no oracle.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _deposit | address | : the PCVDeposit to add to the list. |

#### addDeposits

```javascript
function addDeposits(address[]) nonpayable
```

> adds a list of multiple PCV deposits. See addDeposit.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _deposits | address[] |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### depositToToken

```javascript
function depositToToken(address) view returns(address)
```

> Map from deposit address to token address. It is used like an         indexed version of the pcvDeposits array, to check existence         of a PCVdeposit in the current config.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

#### getDepositForToken

```javascript
function getDepositForToken(address,uint256) view returns(address)
```

> returns the address of deposit at index i of token _token

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address |  |
| i | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getDepositsForToken

```javascript
function getDepositsForToken(address) view returns(address[])
```

> returns an array of the deposits holding a given token.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _token | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address[] |  |

#### getTokenInPcv

```javascript
function getTokenInPcv(uint256) view returns(address)
```

> returns token at index i of the array of PCV tokens

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| i | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### getTokensInPcv

```javascript
function getTokensInPcv() view returns(address[])
```

> returns an array of the addresses of tokens held in the pcv.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address[] |  |

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

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isOvercollateralized

```javascript
function isOvercollateralized() view returns(bool)
```

> returns true if the protocol is overcollateralized. Overcollateralization         is defined as the protocol having more assets in its PCV (Protocol         Controlled Value) than the circulating (user-owned) FEI, i.e.         a positive Protocol Equity.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### isTokenInPcv

```javascript
function isTokenInPcv(address) view returns(bool)
```

> returns true if a token is held in the pcv

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| token | address |  |

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

#### pcvStats

```javascript
function pcvStats() view returns(uint256,uint256,int256,bool)
```

> returns the Protocol-Controlled Value, User-circulating FEI, and         Protocol Equity.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| protocolControlledValue | uint256 | : the total USD value of all assets held         by the protocol. |
| userCirculatingFei | uint256 | : the number of FEI not owned by the protocol. |
| protocolEquity | int256 | : the signed difference between PCV and user circulating FEI. |
| validityStatus | bool | : the current oracle validity status (false if any         of the oracles for tokens held in the PCV are invalid, or if         this contract is paused). |

#### read

```javascript
function read() view returns(tuple,bool)
```

> Get the current collateralization ratio of the protocol.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| collateralRatio | tuple | the current collateral ratio of the protocol. |
| validityStatus | bool | the current oracle validity status (false if any         of the oracles for tokens held in the PCV are invalid, or if         this contract is paused). |

#### removeDeposit

```javascript
function removeDeposit(address) nonpayable
```

> Remove a PCVDeposit from the list of deposits inspected by         the collateralization ratio oracle.         note : this function reverts if the input deposit is not found.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _deposit | address | : the PCVDeposit address to remove from the list. |

#### removeDeposits

```javascript
function removeDeposits(address[]) nonpayable
```

> removes a list of multiple PCV deposits. See removeDeposit.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _deposits | address[] |  |

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

#### setOracle

```javascript
function setOracle(address,address) nonpayable
```

> Set the price feed oracle (in USD) for a given asset.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _token | address | : the asset to add price oracle for |
| _newOracle | address | : price feed oracle for the given asset |

#### setOracles

```javascript
function setOracles(address[],address[]) nonpayable
```

> adds a list of token oracles. See setOracle.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _tokens | address[] |  |
| _oracles | address[] |  |

#### swapDeposit

```javascript
function swapDeposit(address,address) nonpayable
```

> Swap a PCVDeposit with a new one, for instance when a new version         of a deposit (holding the same token) is deployed.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| _oldDeposit | address | : the PCVDeposit to remove from the list. |
| _newDeposit | address | : the PCVDeposit to add to the list. |

#### tokenToOracle

```javascript
function tokenToOracle(address) view returns(address)
```

> Map of oracles to use to get USD values of assets held in         PCV deposits. This map is used to get the oracle address from         and ERC20 address.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

> update all oracles required for this oracle to work that are not         paused themselves.

[⬅️ Contracts](contracts.md)
