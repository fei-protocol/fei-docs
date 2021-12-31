# BalancerLBPSwapper

> BalancerLBPSwapper
> 
> Author: Fei Protocol


an auction contract which cyclically sells one token for another using Balancer LBP

## Events


 - BackupOracleUpdate(address,address)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DecimalsNormalizerUpdate(int256,int256)
 - DurationUpdate(uint256,uint256)
 - ExitPool()
 - InvertUpdate(bool,bool)
 - MinTokenSpentUpdate(uint256,uint256)
 - OracleUpdate(address,address)
 - Paused(address)
 - Swap(address,address,address,uint256,uint256)
 - TimerReset(uint256)
 - Unpaused(address)
 - UpdateReceivingAddress(address,address)
 - WithdrawERC20(address,address,address,uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - backupOracle()
 - core()
 - decimalsNormalizer()
 - doInvert()
 - duration()
 - exitPool(address)
 - fei()
 - feiBalance()
 - forceSwap()
 - getTokensIn(uint256)
 - init(address)
 - invert((uint256))
 - isContractAdmin(address)
 - isTimeEnded()
 - isTimeStarted()
 - minTokenSpentBalance()
 - oracle()
 - pause()
 - paused()
 - pid()
 - pool()
 - readOracle()
 - remainingTime()
 - setAssetManagerPoolConfig(address,address,(uint64,uint64,uint64))
 - setBackupOracle(address)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDecimalsNormalizer(int256)
 - setDoInvert(bool)
 - setMinTokenSpent(uint256)
 - setOracle(address)
 - setPaused(address,bool)
 - setReceivingAddress(address)
 - setSwapEnabled(address,bool)
 - setSwapFee(address,uint256)
 - setSwapFrequency(uint256)
 - startTime()
 - swap()
 - swapEndTime()
 - timeSinceStart()
 - tokenReceived()
 - tokenReceivingAddress()
 - tokenSpent()
 - tribe()
 - tribeBalance()
 - unpause()
 - updateOracle()
 - updateWeightsGradually(address,uint256,uint256,uint256[])
 - vault()
 - withdrawCollectedManagementFees(address,address)
 - withdrawERC20(address,address,uint256)
