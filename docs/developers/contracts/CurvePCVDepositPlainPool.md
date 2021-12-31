# CurvePCVDepositPlainPool

> CurvePCVDepositPlainPool: implementation for a PCVDeposit that deploys liquidity on Curve, in a plain pool (3 stable assets).
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
 - core()
 - curvePool()
 - deposit()
 - exitPool()
 - fei()
 - feiBalance()
 - isContractAdmin(address)
 - maxSlippageBasisPoints()
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
 - withdrawOneCoin(uint256,address,uint256)
