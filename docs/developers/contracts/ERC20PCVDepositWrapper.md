# ERC20PCVDepositWrapper


a lightweight contract to wrap ERC20 holding PCV contracts

## Methods

#### balance

```javascript
function balance() view returns(uint256)
```

> returns total balance of PCV in the Deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() view returns(address)
```

> display the related token of the balance reported

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### isProtocolFeiDeposit

```javascript
function isProtocolFeiDeposit() view returns(bool)
```

> a flag for whether to report the balance as protocol owned FEI

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

#### token

```javascript
function token() view returns(address)
```

> the balance reported in token

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### tokenDeposit

```javascript
function tokenDeposit() view returns(address)
```

> the referenced token deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |
