# AutoRewardsDistributor


Controller Contract to set tribe per block in Rewards Distributor Admin on Rari

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - Paused(address)
 - RewardsDistributorAdminChanged(address,address)
 - SpeedChanged(uint256)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - cTokenAddress()
 - core()
 - fei()
 - feiBalance()
 - getNewRewardSpeed()
 - isBorrowIncentivized()
 - isContractAdmin(address)
 - pause()
 - paused()
 - rewardsDistributorAdmin()
 - setAutoRewardsDistribution()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setRewardsDistributorAdmin(address)
 - tribalChief()
 - tribalChiefRewardIndex()
 - tribe()
 - tribeBalance()
 - unpause()
