# QuadtraticTimelockedSubdelegator

> a timelock for TRIBE allowing for sub-delegation
> 
> Author: Fei Protocol


allows the timelocked TRIBE to be delegated by the beneficiary while locked

## Events


 - BeneficiaryUpdate(address)
 - Delegate(address,uint256)
 - DurationUpdate(uint256,uint256)
 - PendingBeneficiaryUpdate(address)
 - Release(address,address,uint256)
 - TimerReset(uint256)
 - Undelegate(address,uint256)

## Methods


 - acceptBeneficiary()
 - alreadyReleasedAmount()
 - availableForRelease()
 - beneficiary()
 - clawback()
 - clawbackAdmin()
 - cliffSeconds()
 - delegate(address,uint256)
 - delegateAmount(address)
 - delegateContract(address)
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
 - totalDelegated()
 - totalToken()
 - tribe()
 - undelegate(address)
