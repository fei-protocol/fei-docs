# PCVEquityMinter

> PCVEquityMinter


A FeiTimedMinter that mints based on a percentage of PCV equity

## Events


 - APRUpdate(uint256,uint256)
 - BufferCapUpdate(uint256,uint256)
 - BufferUsed(uint256,uint256)
 - CollateralizationOracleUpdate(address,address)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DurationUpdate(uint256,uint256)
 - FeiMinting(address,uint256)
 - IncentiveUpdate(uint256,uint256)
 - MintAmountUpdate(uint256,uint256)
 - Paused(address)
 - RateLimitPerSecondUpdate(uint256,uint256)
 - TargetUpdate(address,address)
 - TimerReset(uint256)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - MAX_APR_BASIS_POINTS()
 - MAX_MINT_FREQUENCY()
 - MAX_RATE_LIMIT_PER_SECOND()
 - MIN_MINT_FREQUENCY()
 - aprBasisPoints()
 - buffer()
 - bufferCap()
 - collateralizationOracle()
 - core()
 - doPartialAction()
 - duration()
 - fei()
 - feiBalance()
 - incentiveAmount()
 - isContractAdmin(address)
 - isTimeEnded()
 - isTimeStarted()
 - lastBufferUsedTime()
 - mint()
 - mintAmount()
 - pause()
 - paused()
 - rateLimitPerSecond()
 - remainingTime()
 - setAPRBasisPoints(uint256)
 - setBufferCap(uint256)
 - setCollateralizationOracle(address)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setFrequency(uint256)
 - setIncentiveAmount(uint256)
 - setMintAmount(uint256)
 - setRateLimitPerSecond(uint256)
 - setTarget(address)
 - startTime()
 - target()
 - timeSinceStart()
 - tribe()
 - tribeBalance()
 - unpause()
