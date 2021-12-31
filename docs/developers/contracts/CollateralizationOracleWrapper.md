# CollateralizationOracleWrapper

> Fei Protocol's Collateralization Oracle
> 
> Author: eswak


Reads a list of PCVDeposit that report their amount of collateral         and the amount of protocol-owned FEI they manage, to deduce the         protocol-wide collateralization ratio.

## Events


 - CachedValueUpdate(address,uint256,uint256,int256)
 - CollateralizationOracleUpdate(address,address,address)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DeviationThresholdUpdate(address,uint256,uint256)
 - DurationUpdate(uint256,uint256)
 - Paused(address)
 - ReadPauseOverrideUpdate(bool)
 - TimerReset(uint256)
 - Unpaused(address)
 - Update(uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - cachedProtocolControlledValue()
 - cachedProtocolEquity()
 - cachedUserCirculatingFei()
 - collateralizationOracle()
 - core()
 - deviationThresholdBasisPoints()
 - duration()
 - fei()
 - feiBalance()
 - initialize(address,address,uint256,uint256)
 - isContractAdmin(address)
 - isExceededDeviationThreshold()
 - isOutdated()
 - isOutdatedOrExceededDeviationThreshold()
 - isOvercollateralized()
 - isTimeEnded()
 - isTimeStarted()
 - pause()
 - paused()
 - pcvStats()
 - pcvStatsCurrent()
 - read()
 - readPauseOverride()
 - remainingTime()
 - setCache(uint256,uint256,int256)
 - setCollateralizationOracle(address)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDeviationThresholdBasisPoints(uint256)
 - setReadPauseOverride(bool)
 - setValidityDuration(uint256)
 - startTime()
 - timeSinceStart()
 - tribe()
 - tribeBalance()
 - unpause()
 - update()
 - updateIfOutdated()
