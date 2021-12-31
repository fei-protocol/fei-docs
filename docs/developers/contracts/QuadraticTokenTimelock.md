# QuadraticTokenTimelock

## Events


 - BeneficiaryUpdate(address)
 - DurationUpdate(uint256,uint256)
 - PendingBeneficiaryUpdate(address)
 - Release(address,address,uint256)
 - TimerReset(uint256)

## Methods


 - acceptBeneficiary()
 - alreadyReleasedAmount()
 - availableForRelease()
 - beneficiary()
 - clawback()
 - clawbackAdmin()
 - cliffSeconds()
 - duration()
 - initialBalance()
 - isTimeEnded()
 - isTimeStarted()
 - lockedToken()
 - passedCliff()
 - pendingBeneficiary()
 - release(address,uint256)
 - releaseMax(address)
 - remainingTime()
 - setPendingBeneficiary(address)
 - startTime()
 - timeSinceStart()
 - totalToken()
