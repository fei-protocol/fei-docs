[⬅️ Contracts](contracts.md)

# [BPTLens](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/balancer/BPTLens.sol)

> BPTLens
> 
> Author: Fei Protocol


a contract to read manipulation resistant balances from BPTs

## Methods

#### VAULT

```javascript
function VAULT() view returns(address)
```

> the Balancer V2 Vault

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### balance

```javascript
function balance() view returns(uint256)
```

> gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### balanceReportedIn

```javascript
function balanceReportedIn() view returns(address)
```

> the token the lens reports balances in

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### feiInPair

```javascript
function feiInPair() view returns(bool)
```

> true if FEI is in the pair

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### feiIsReportedIn

```javascript
function feiIsReportedIn() view returns(bool)
```

> true if FEI is the reported balance

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### otherOracle

```javascript
function otherOracle() view returns(address)
```

> the oracle for the other token in the pair (not balanceReportedIn)

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### pool

```javascript
function pool() view returns(address)
```

> the balancer pool to look at

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### reportedOracle

```javascript
function reportedOracle() view returns(address)
```

> the oracle for balanceReportedIn token

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### resistantBalanceAndFei

```javascript
function resistantBalanceAndFei() view returns(uint256,uint256)
```

> Calculates the manipulation resistant balances of Balancer pool tokens using the logic described here: https://docs.gyro.finance/learn/oracles/bpt-oracle This is robust to price manipulations within the Balancer pool.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |
|  | uint256 |  |

[⬅️ Contracts](contracts.md)
