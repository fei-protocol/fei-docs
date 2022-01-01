# StaticPCVDepositWrapper


a contract to report static PCV data to cover PCV not held with a reliable oracle or on-chain reading 

## Events

#### BalanceUpdate

```javascript
event BalanceUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBalance | uint256 |  |
| newBalance | uint256 |  |

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

#### FeiBalanceUpdate

```javascript
event FeiBalanceUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldFeiBalance | uint256 |  |
| newFeiBalance | uint256 |  |

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

#### balance

```javascript
function balance() view returns(uint256)
```

> the PCV balance

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() pure returns(address)
```

> display the related token of the balance reported

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

#### feiReportBalance

```javascript
function feiReportBalance() view returns(uint256)
```

> the reported FEI balance

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

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> returns the resistant balance and FEI in the deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |

#### setBalance

```javascript
function setBalance(uint256) nonpayable
```

> set the PCV balance

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newBalance | uint256 |  |

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

#### setFeiReportBalance

```javascript
function setFeiReportBalance(uint256) nonpayable
```

> set the protocol owned FEI amount

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newFeiBalance | uint256 |  |

#### shiftBalance

```javascript
function shiftBalance(int256) nonpayable
```

> increase or decrease PCV balance

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| shift | int256 |  |

#### shiftFeiReportBalance

```javascript
function shiftFeiReportBalance(int256) nonpayable
```

> increase or decrease Protocol Owned Fei balance

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| shift | int256 |  |

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
