# TribalChiefSync

> TribalChief Synchronize contract This contract is able to keep the tribalChief and autoRewardsDistributor in sync when either: 1. adding pools or  2. updating block rewards It needs the EXECUTOR role on the optimistic timelock, so it can atomically trigger the 3 actions

## Methods


 - addPool(uint120,address,address,(uint128,uint128)[],bytes32)
 - autoRewardsDistributor()
 - decreaseRewards(uint256,bytes32)
 - resetPool(uint256,bytes32)
 - setPool(uint256,uint120,address,bool,bytes32)
 - timelock()
 - tribalChief()
