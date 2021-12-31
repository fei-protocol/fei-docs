# CollateralizationOracle

> Fei Protocol's Collateralization Oracle
> 
> Author: eswak


Reads a list of PCVDeposit that report their amount of collateral         and the amount of protocol-owned FEI they manage, to deduce the         protocol-wide collateralization ratio.

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DepositAdd(address,address,address)
 - DepositRemove(address,address)
 - OracleUpdate(address,address,address,address)
 - Paused(address)
 - Unpaused(address)
 - Update(uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - addDeposit(address)
 - addDeposits(address[])
 - core()
 - depositToToken(address)
 - fei()
 - feiBalance()
 - getDepositForToken(address,uint256)
 - getDepositsForToken(address)
 - getTokenInPcv(uint256)
 - getTokensInPcv()
 - isContractAdmin(address)
 - isOutdated()
 - isOvercollateralized()
 - isTokenInPcv(address)
 - pause()
 - paused()
 - pcvStats()
 - read()
 - removeDeposit(address)
 - removeDeposits(address[])
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setOracle(address,address)
 - setOracles(address[],address[])
 - swapDeposit(address,address)
 - tokenToOracle(address)
 - tribe()
 - tribeBalance()
 - unpause()
 - update()
