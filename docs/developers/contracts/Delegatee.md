[⬅️ Contracts](contracts.md)

# [Delegatee](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/TimelockedDelegator.sol)

> a proxy delegate contract for TRIBE
> 
> Author: Fei Protocol

## Events

#### OwnershipTransferred

```javascript
event OwnershipTransferred(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| previousOwner indexed | address |  |
| newOwner indexed | address |  |

## Methods

#### owner

```javascript
function owner() view returns(address)
```

> Returns the address of the current owner.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### renounceOwnership

```javascript
function renounceOwnership() nonpayable
```

> Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

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

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### withdraw

```javascript
function withdraw() nonpayable
```

> send TRIBE back to timelock and selfdestruct

[⬅️ Contracts](contracts.md)
