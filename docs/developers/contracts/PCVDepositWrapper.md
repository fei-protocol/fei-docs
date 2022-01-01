[⬅️ Contracts](contracts.md)

# [PCVDepositWrapper](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/utils/PCVDepositWrapper.sol)


a lightweight contract to wrap old PCV deposits to use the new interface 

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| aaveEthPCVDepositWrapper | [0x43Ef03755991056681F01EE2182234eF6aF1f658](https://etherscan.io/address/0x43Ef03755991056681F01EE2182234eF6aF1f658) |
| aaveFeiPCVDepositWrapper | [0xFAc571b6054619053ac311dA8112939C9a374A85](https://etherscan.io/address/0xFAc571b6054619053ac311dA8112939C9a374A85) |
| aaveRaiPCVDepositWrapper | [0x1267B39c93711Dd374DEAB15e0127e4adB259BE0](https://etherscan.io/address/0x1267B39c93711Dd374DEAB15e0127e4adB259BE0) |
| compoundDaiPCVDepositWrapper | [0xfDe7077AAEcDaf2C4B85261Aa858c96A7E737a61](https://etherscan.io/address/0xfDe7077AAEcDaf2C4B85261Aa858c96A7E737a61) |
| compoundEthPCVDepositWrapper | [0x0735e14D28eD395048d5Fa4a8dbe6e6EB9fc0470](https://etherscan.io/address/0x0735e14D28eD395048d5Fa4a8dbe6e6EB9fc0470) |
| ethLidoPCVDepositWrapper | [0xA271fF86426c7fdAaAE72603e6Ce68c892d69ED7](https://etherscan.io/address/0xA271fF86426c7fdAaAE72603e6Ce68c892d69ED7) |
| ethReserveStabilizerWrapper | [0xB24570Bc46efDf97b4Aa7f008B4268005Eb7A27E](https://etherscan.io/address/0xB24570Bc46efDf97b4Aa7f008B4268005Eb7A27E) |
| feiOATimelockWrapper | [0x7Eb88140af813294aEDce981b6aC08fcd139d408](https://etherscan.io/address/0x7Eb88140af813294aEDce981b6aC08fcd139d408) |
| rariPool18FeiPCVDepositWrapper | [0x07F2DD7E6A78D96c08D0a8212f4097dCC129d629](https://etherscan.io/address/0x07F2DD7E6A78D96c08D0a8212f4097dCC129d629) |
| rariPool19DpiPCVDepositWrapper | [0x9a774a1B1208C323EDeD05E6Daf592E6E59cAa55](https://etherscan.io/address/0x9a774a1B1208C323EDeD05E6Daf592E6E59cAa55) |
| rariPool19FeiPCVDepositWrapper | [0x7e39bBA9D0d967Ee55524fAe9e54900B02d9889a](https://etherscan.io/address/0x7e39bBA9D0d967Ee55524fAe9e54900B02d9889a) |
| rariPool24FeiPCVDepositWrapper | [0x508f6fbd78B6569C29E9D75986a51558dE9E5865](https://etherscan.io/address/0x508f6fbd78B6569C29E9D75986a51558dE9E5865) |
| rariPool25FeiPCVDepositWrapper | [0xB4FFD10C4C290Dc13E8e30BF186F1509001515fD](https://etherscan.io/address/0xB4FFD10C4C290Dc13E8e30BF186F1509001515fD) |
| rariPool26FeiPCVDepositWrapper | [0x82aebeE64a52180d8541eB601A8381e012A1eD04](https://etherscan.io/address/0x82aebeE64a52180d8541eB601A8381e012A1eD04) |
| rariPool27FeiPCVDepositWrapper | [0xe2e35097638F0Ff2EeCA2EF70F352Be37431945f](https://etherscan.io/address/0xe2e35097638F0Ff2EeCA2EF70F352Be37431945f) |
| rariPool6FeiPCVDepositWrapper | [0x7aA4b1558C3e219cFFFd6a356421C071F71966e7](https://etherscan.io/address/0x7aA4b1558C3e219cFFFd6a356421C071F71966e7) |
| rariPool7FeiPCVDepositWrapper | [0xb13C755107301eBFeD6A93190aCdE09281b2f8A5](https://etherscan.io/address/0xb13C755107301eBFeD6A93190aCdE09281b2f8A5) |
| rariPool8FeiPCVDepositWrapper | [0xD6598a23418c7FEf7c0Dc863265515B623B720F9](https://etherscan.io/address/0xD6598a23418c7FEf7c0Dc863265515B623B720F9) |
| rariPool9FeiPCVDepositWrapper | [0x96A657eE40A79A964c6b4eA551c895D98e885a75](https://etherscan.io/address/0x96A657eE40A79A964c6b4eA551c895D98e885a75) |
| rariPool9RaiPCVDepositWrapper | [0xCCe230c087F31032fc17621a2CF5E425A0b80C96](https://etherscan.io/address/0xCCe230c087F31032fc17621a2CF5E425A0b80C96) |

## Related Contracts


[CollateralizationOracle](CollateralizationOracle.md)

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

#### pcvDeposit

```javascript
function pcvDeposit() view returns(address)
```

> the referenced PCV Deposit

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

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

[⬅️ Contracts](contracts.md)
