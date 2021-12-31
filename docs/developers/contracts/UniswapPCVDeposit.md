# UniswapPCVDeposit

> implementation for Uniswap LP PCV Deposit
> 
> Author: Fei Protocol

## Events


 - BackupOracleUpdate(address,address)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DecimalsNormalizerUpdate(int256,int256)
 - Deposit(address,uint256)
 - InvertUpdate(bool,bool)
 - MaxBasisPointsFromPegLPUpdate(uint256,uint256)
 - OracleUpdate(address,address)
 - PairUpdate(address,address)
 - Paused(address)
 - Unpaused(address)
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
 - fei()
 - feiBalance()
 - getReserves()
 - invert((uint256))
 - isContractAdmin(address)
 - liquidityOwned()
 - maxBasisPointsFromPegLP()
 - oracle()
 - pair()
 - pause()
 - paused()
 - readOracle()
 - resistantBalanceAndFei()
 - router()
 - setBackupOracle(address)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDecimalsNormalizer(int256)
 - setDoInvert(bool)
 - setMaxBasisPointsFromPegLP(uint256)
 - setOracle(address)
 - setPair(address)
 - token()
 - tribe()
 - tribeBalance()
 - unpause()
 - updateOracle()
 - withdraw(address,uint256)
 - withdrawERC20(address,address,uint256)
 - withdrawETH(address,uint256)
