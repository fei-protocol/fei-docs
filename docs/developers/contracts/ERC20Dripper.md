# ERC20Dripper

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - Deposit(address,uint256)
 - Dripped(uint256)
 - DurationUpdate(uint256,uint256)
 - Paused(address)
 - TimerReset(uint256)
 - Unpaused(address)
 - WithdrawERC20(address,address,address,uint256)
 - WithdrawETH(address,address,uint256)
 - Withdrawal(address,address,uint256)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - amountToDrip()
 - balance()
 - balanceReportedIn()
 - core()
 - deposit()
 - drip()
 - duration()
 - fei()
 - feiBalance()
 - isContractAdmin(address)
 - isTimeEnded()
 - isTimeStarted()
 - pause()
 - paused()
 - remainingTime()
 - resistantBalanceAndFei()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - startTime()
 - target()
 - timeSinceStart()
 - token()
 - tribe()
 - tribeBalance()
 - unpause()
 - withdraw(address,uint256)
 - withdrawERC20(address,address,uint256)
 - withdrawETH(address,uint256)
