# QuadraticTimelockedDelegator

> a timelock for tokens allowing for bulk delegation
> 
> Author: Fei Protocol


allows the timelocked tokens to be delegated by the beneficiary while locked

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
 - delegate(address)
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
