# EthLidoPCVDeposit

> implementation for PCV Deposit that can take ETH and get stETH either by staking on Lido or swapping on Curve, and sell back stETH for ETH on Curve.
> 
> Author: eswak, realisation

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - Deposit(address,uint256)
 - Paused(address)
 - Unpaused(address)
 - UpdateMaximumSlippage(uint256)
 - WithdrawERC20(address,address,address,uint256)
 - WithdrawETH(address,address,uint256)
 - Withdrawal(address,address,uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - balance()
 - balanceReportedIn()
 - core()
 - deposit()
 - fei()
 - feiBalance()
 - isContractAdmin(address)
 - maximumSlippageBasisPoints()
 - pause()
 - paused()
 - resistantBalanceAndFei()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setMaximumSlippage(uint256)
 - stableswap()
 - steth()
 - tribe()
 - tribeBalance()
 - unpause()
 - withdraw(address,uint256)
 - withdrawERC20(address,address,uint256)
 - withdrawETH(address,uint256)
