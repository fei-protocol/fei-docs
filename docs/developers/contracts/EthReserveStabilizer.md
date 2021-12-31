# EthReserveStabilizer

> implementation for an ETH Reserve Stabilizer
> 
> Author: Fei Protocol

## Events


 - BackupOracleUpdate(address,address)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DecimalsNormalizerUpdate(int256,int256)
 - Deposit(address,uint256)
 - FeiExchange(address,uint256,uint256)
 - InvertUpdate(bool,bool)
 - OracleUpdate(address,address)
 - Paused(address)
 - Unpaused(address)
 - UsdPerFeiRateUpdate(uint256,uint256)
 - WithdrawERC20(address,address,address,uint256)
 - WithdrawETH(address,address,uint256)
 - Withdrawal(address,address,uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - backupOracle()
 - balance()
 - balanceReportedIn()
 - core()
 - decimalsNormalizer()
 - deposit()
 - doInvert()
 - exchangeFei(uint256)
 - fei()
 - feiBalance()
 - getAmountOut(uint256)
 - invert((uint256))
 - isContractAdmin(address)
 - oracle()
 - pause()
 - paused()
 - readOracle()
 - resistantBalanceAndFei()
 - setBackupOracle(address)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDecimalsNormalizer(int256)
 - setDoInvert(bool)
 - setOracle(address)
 - setUsdPerFeiRate(uint256)
 - token()
 - tribe()
 - tribeBalance()
 - unpause()
 - updateOracle()
 - usdPerFeiBasisPoints()
 - withdraw(address,uint256)
 - withdrawERC20(address,address,uint256)
 - withdrawETH(address,uint256)
