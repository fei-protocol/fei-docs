# PCVDripController

> a PCV dripping controller
> 
> Author: Fei Protocol

## Events


 - BufferCapUpdate(uint256,uint256)
 - BufferUsed(uint256,uint256)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - DripAmountUpdate(uint256,uint256)
 - Dripped(address,address,uint256)
 - DurationUpdate(uint256,uint256)
 - IncentiveUpdate(uint256,uint256)
 - Paused(address)
 - RateLimitPerSecondUpdate(uint256,uint256)
 - SourceUpdate(address,address)
 - TargetUpdate(address,address)
 - TimerReset(uint256)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - MAX_RATE_LIMIT_PER_SECOND()
 - buffer()
 - bufferCap()
 - core()
 - doPartialAction()
 - drip()
 - dripAmount()
 - dripEligible()
 - duration()
 - fei()
 - feiBalance()
 - incentiveAmount()
 - isContractAdmin(address)
 - isTimeEnded()
 - isTimeStarted()
 - lastBufferUsedTime()
 - pause()
 - paused()
 - rateLimitPerSecond()
 - remainingTime()
 - setBufferCap(uint256)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDripAmount(uint256)
 - setIncentiveAmount(uint256)
 - setRateLimitPerSecond(uint256)
 - setSource(address)
 - setTarget(address)
 - source()
 - startTime()
 - target()
 - timeSinceStart()
 - tribe()
 - tribeBalance()
 - unpause()
