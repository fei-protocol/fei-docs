# ExchangerTimelock

> Send RGT straight to TRIBE timelock
> 
> Author: Joey Santoro


For Rari core contributors to trustlessly maintain incentive alignment

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

#### exchangeToTimelock

```javascript
function exchangeToTimelock() nonpayable
```

> exchange RGT to TRIBE and send to timelock

#### exchanger

```javascript
function exchanger() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### guardian

```javascript
function guardian() view returns(address)
```

> rari DAO timelock can clawback in event of no-deal

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### owner

```javascript
function owner() view returns(address)
```

> Returns the address of the current owner.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### recoverRGT

```javascript
function recoverRGT() nonpayable
```

> guardian sends back RGT

#### renounceOwnership

```javascript
function renounceOwnership() nonpayable
```

> Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

#### rgt

```javascript
function rgt() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### timelock

```javascript
function timelock() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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
