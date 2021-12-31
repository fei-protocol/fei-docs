# ICollateralizationOracleWrapper

> Collateralization ratio oracle interface for Fei Protocol
> 
> Author: Fei Protocol

## Events


 - CachedValueUpdate(address,uint256,uint256,int256)
 - CollateralizationOracleUpdate(address,address,address)
 - DeviationThresholdUpdate(address,uint256,uint256)
 - ReadPauseOverrideUpdate(bool)
 - Update(uint256)

## Methods


 - cachedProtocolControlledValue()
 - cachedProtocolEquity()
 - cachedUserCirculatingFei()
 - collateralizationOracle()
 - deviationThresholdBasisPoints()
 - isExceededDeviationThreshold()
 - isOutdated()
 - isOutdatedOrExceededDeviationThreshold()
 - isOvercollateralized()
 - pcvStats()
 - pcvStatsCurrent()
 - read()
 - readPauseOverride()
 - setCache(uint256,uint256,int256)
 - setCollateralizationOracle(address)
 - setDeviationThresholdBasisPoints(uint256)
 - setReadPauseOverride(bool)
 - setValidityDuration(uint256)
 - update()
 - updateIfOutdated()
