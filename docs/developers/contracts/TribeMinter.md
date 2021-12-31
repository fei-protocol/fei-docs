# TribeMinter

> implementation for a TRIBE Minter Contract
> 
> Author: Fei Protocol This contract will be the unique TRIBE minting contract.  All minting is subject to an annual inflation rate limit. For example if circulating supply is 1m and inflation is capped at 10%, then no more than 100k TRIBE can enter circulation in the following year. The contract will increase (decrease) the rate limit proportionally as supply increases (decreases) Governance and admins can only lower the max inflation %.  They can also exclude (unexclude) addresses' TRIBE balances from the circulating supply.  The minter's balance is excluded by default. ACCESS_CONTROL: This contract follows a somewhat unique access control pattern.  It has a contract admin which is NOT intended for optimistic approval, but rather for contracts such as the TribeReserveStabilizer. An additional potential contract admin is one which automates the inclusion and removal of excluded deposits from on-chain timelocks. Additionally, the ability to transfer the tribe minter role is held by the contract *owner* rather than governor or admin. The owner will intially be the DAO timelock. This keeps the power to transfer or burn TRIBE minting rights isolated.

## Events


 - AnnualMaxInflationUpdate(uint256,uint256)
 - BufferCapUpdate(uint256,uint256)
 - BufferUsed(uint256,uint256)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - OwnershipTransferred(address,address)
 - Paused(address)
 - RateLimitPerSecondUpdate(uint256,uint256)
 - TribeRewardsDripperUpdate(address,address)
 - TribeTreasuryUpdate(address,address)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - MAX_RATE_LIMIT_PER_SECOND()
 - annualMaxInflationBasisPoints()
 - buffer()
 - bufferCap()
 - core()
 - doPartialAction()
 - fei()
 - feiBalance()
 - idealBufferCap()
 - isContractAdmin(address)
 - isPokeNeeded()
 - lastBufferUsedTime()
 - mint(address,uint256)
 - owner()
 - pause()
 - paused()
 - poke()
 - rateLimitPerSecond()
 - renounceOwnership()
 - setAnnualMaxInflationBasisPoints(uint256)
 - setBufferCap(uint256)
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setMinter(address)
 - setRateLimitPerSecond(uint256)
 - setTribeRewardsDripper(address)
 - setTribeTreasury(address)
 - totalSupply()
 - transferOwnership(address)
 - tribe()
 - tribeBalance()
 - tribeCirculatingSupply()
 - tribeRewardsDripper()
 - tribeTreasury()
 - unpause()
