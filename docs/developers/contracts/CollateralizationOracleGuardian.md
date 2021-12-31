# CollateralizationOracleGuardian

> Fei Protocol's Collateralization Oracle Guardian
> 
> Author: Fei Protocol This contract needs to be granted the ORACLE_ADMIN role The guardian can leverage this contract to make small bounded changes to CR This is intended to be used only in emergencies when the base CollateralizationOracle is compromised The guardian should be able to approximate manual changes to CR via this contract without retaining too much power

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DeviationThresholdUpdate(uint256,uint256)
 - DurationUpdate(uint256,uint256)
 - Paused(address)
 - TimerReset(uint256)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - calculateDeviationThresholdBasisPoints(uint256,uint256)
 - core()
 - deviationThresholdBasisPoints()
 - duration()
 - fei()
 - feiBalance()
 - isContractAdmin(address)
 - isTimeEnded()
 - isTimeStarted()
 - oracleWrapper()
 - pause()
 - paused()
 - remainingTime()
 - setCache(uint256,uint256)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDeviationThresholdBasisPoints(uint256)
 - startTime()
 - timeSinceStart()
 - tribe()
 - tribeBalance()
 - unpause()
