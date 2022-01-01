[⬅️ Contracts](contracts.md)

# [TribeMinter](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/TribeMinter.sol)

> implementation for a TRIBE Minter Contract
> 
> Author: Fei Protocol This contract will be the unique TRIBE minting contract.  All minting is subject to an annual inflation rate limit. For example if circulating supply is 1m and inflation is capped at 10%, then no more than 100k TRIBE can enter circulation in the following year. The contract will increase (decrease) the rate limit proportionally as supply increases (decreases) Governance and admins can only lower the max inflation %.  They can also exclude (unexclude) addresses' TRIBE balances from the circulating supply.  The minter's balance is excluded by default. ACCESS_CONTROL: This contract follows a somewhat unique access control pattern.  It has a contract admin which is NOT intended for optimistic approval, but rather for contracts such as the TribeReserveStabilizer. An additional potential contract admin is one which automates the inclusion and removal of excluded deposits from on-chain timelocks. Additionally, the ability to transfer the tribe minter role is held by the contract *owner* rather than governor or admin. The owner will intially be the DAO timelock. This keeps the power to transfer or burn TRIBE minting rights isolated.

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| tribeMinter | [0xFC3532b443383d9022b1B2c6FD5Fd0895943360A](https://etherscan.io/address/0xFC3532b443383d9022b1B2c6FD5Fd0895943360A) |

## Related Contracts


[Core](Core.md), [TribeReserveStabilizer](TribeReserveStabilizer.md), [Tribe](Tribe.md), [ERC20Dripper](ERC20Dripper.md), [FeiDAOTimelock](FeiDAOTimelock.md)

## Events

#### AnnualMaxInflationUpdate

```javascript
event AnnualMaxInflationUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldAnnualMaxInflationBasisPoints | uint256 |  |
| newAnnualMaxInflationBasisPoints | uint256 |  |

#### BufferCapUpdate

```javascript
event BufferCapUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldBufferCap | uint256 |  |
| newBufferCap | uint256 |  |

#### BufferUsed

```javascript
event BufferUsed(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| amountUsed | uint256 |  |
| bufferRemaining | uint256 |  |

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

#### OwnershipTransferred

```javascript
event OwnershipTransferred(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| previousOwner | address indexed |  |
| newOwner | address indexed |  |

#### Paused

```javascript
event Paused(address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |

#### RateLimitPerSecondUpdate

```javascript
event RateLimitPerSecondUpdate(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldRateLimitPerSecond | uint256 |  |
| newRateLimitPerSecond | uint256 |  |

#### TribeRewardsDripperUpdate

```javascript
event TribeRewardsDripperUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTribeRewardsDripper | address indexed |  |
| newTribeRewardsDripper | address indexed |  |

#### TribeTreasuryUpdate

```javascript
event TribeTreasuryUpdate(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTribeTreasury | address indexed |  |
| newTribeTreasury | address indexed |  |

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

#### MAX_RATE_LIMIT_PER_SECOND

```javascript
function MAX_RATE_LIMIT_PER_SECOND() view returns(uint256)
```

> maximum rate limit per second governance can set for this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### annualMaxInflationBasisPoints

```javascript
function annualMaxInflationBasisPoints() view returns(uint256)
```

> the max inflation in TRIBE circulating supply per year in basis points (1/10000)

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### buffer

```javascript
function buffer() view returns(uint256)
```

> the amount of action used before hitting limit

> replenishes at rateLimitPerSecond per second up to bufferCap

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### bufferCap

```javascript
function bufferCap() view returns(uint256)
```

> the cap of the buffer that can be used at once

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### core

```javascript
function core() view returns(address)
```

> address of the Core contract referenced

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address | ICore implementation address |

#### doPartialAction

```javascript
function doPartialAction() view returns(bool)
```

> a flag for whether to allow partial actions to complete if the buffer is less than amount

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

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

#### idealBufferCap

```javascript
function idealBufferCap() view returns(uint256)
```

> return the ideal buffer cap based on TRIBE circulating supply

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

#### isPokeNeeded

```javascript
function isPokeNeeded() view returns(bool)
```

> return whether a poke is needed or not i.e. is buffer cap != ideal cap

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### lastBufferUsedTime

```javascript
function lastBufferUsedTime() view returns(uint256)
```

> the last time the buffer was used by the contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### mint

```javascript
function mint(address,uint256) nonpayable
```

> mints TRIBE to the target address, subject to rate limit

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| to | address | the address to send TRIBE to |
| amount | uint256 | the amount of TRIBE to send |

#### owner

```javascript
function owner() view returns(address)
```

> Returns the address of the current owner.

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

#### poke

```javascript
function poke() nonpayable
```

> update the rate limit per second and buffer cap

#### rateLimitPerSecond

```javascript
function rateLimitPerSecond() view returns(uint256)
```

> the rate per second for this contract

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### renounceOwnership

```javascript
function renounceOwnership() nonpayable
```

> Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

#### setAnnualMaxInflationBasisPoints

```javascript
function setAnnualMaxInflationBasisPoints(uint256) nonpayable
```

> sets the max annual inflation relative to current supply

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newAnnualMaxInflationBasisPoints | uint256 | the new max inflation % denominated in basis points (1/10000) |

#### setBufferCap

```javascript
function setBufferCap(uint256) pure
```

> no-op, reverts. Prevent admin or governor from overwriting ideal buffer cap

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

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

#### setMinter

```javascript
function setMinter(address) nonpayable
```

> changes the TRIBE minter address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newMinter | address | the new minter address |

#### setRateLimitPerSecond

```javascript
function setRateLimitPerSecond(uint256) pure
```

> no-op, reverts. Prevent admin or governor from overwriting ideal rate limit

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setTribeRewardsDripper

```javascript
function setTribeRewardsDripper(address) nonpayable
```

> sets the new TRIBE treasury rewards dripper

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTribeRewardsDripper | address |  |

#### setTribeTreasury

```javascript
function setTribeTreasury(address) nonpayable
```

> sets the new TRIBE treasury address

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTribeTreasury | address |  |

#### totalSupply

```javascript
function totalSupply() view returns(uint256)
```

> alias for tribeCirculatingSupply

> for compatibility with ERC-20 standard for off-chain 3rd party sites

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### transferOwnership

```javascript
function transferOwnership(address) nonpayable
```

> Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newOwner | address |  |

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

#### tribeCirculatingSupply

```javascript
function tribeCirculatingSupply() view returns(uint256)
```

> return the TRIBE supply, subtracting locked TRIBE

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### tribeRewardsDripper

```javascript
function tribeRewardsDripper() view returns(address)
```

> the tribe rewards dripper address used to exclude from circulating supply

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tribeTreasury

```javascript
function tribeTreasury() view returns(address)
```

> the tribe treasury address used to exclude from circulating supply

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### unpause

```javascript
function unpause() nonpayable
```

> set pausable methods to unpaused

[⬅️ Contracts](contracts.md)
