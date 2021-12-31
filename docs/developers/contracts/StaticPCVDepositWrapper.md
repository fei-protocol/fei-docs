# StaticPCVDepositWrapper


a contract to report static PCV data to cover PCV not held with a reliable oracle or on-chain reading 

## Events


 - BalanceUpdate(uint256,uint256)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - FeiBalanceUpdate(uint256,uint256)
 - Paused(address)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - balance()
 - balanceReportedIn()
 - core()
 - fei()
 - feiBalance()
 - feiReportBalance()
 - isContractAdmin(address)
 - pause()
 - paused()
 - resistantBalanceAndFei()
 - setBalance(uint256)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setFeiReportBalance(uint256)
 - shiftBalance(int256)
 - shiftFeiReportBalance(int256)
 - tribe()
 - tribeBalance()
 - unpause()
