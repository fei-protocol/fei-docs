# ConvexPCVDeposit

> ConvexPCVDeposit: implementation for a PCVDeposit that stake/unstake the Curve LP tokens on Convex, and can claim rewards.
> 
> Author: Fei Protocol

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - Deposit(address,uint256)
 - Paused(address)
 - Unpaused(address)
 - WithdrawERC20(address,address,address,uint256)
 - WithdrawETH(address,address,uint256)
 - Withdrawal(address,address,uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - balance()
 - balanceReportedIn()
 - claimRewards()
 - convexBooster()
 - convexRewards()
 - core()
 - curvePool()
 - deposit()
 - fei()
 - feiBalance()
 - isContractAdmin(address)
 - pause()
 - paused()
 - resistantBalanceAndFei()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - tribe()
 - tribeBalance()
 - unpause()
 - withdraw(address,uint256)
 - withdrawERC20(address,address,uint256)
 - withdrawETH(address,uint256)
