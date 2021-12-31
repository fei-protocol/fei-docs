# RewardsDistributorAdmin


this contract has its own internal ACL. The reasons for doing this and not leveraging core are twofold. One, it simplifies devops operations around adding and removing users, and two, by being self contained, it is more efficient as it does not need to make external calls to figure out who has a particular role.

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - Paused(address)
 - RoleAdminChanged(bytes32,bytes32,bytes32)
 - RoleGranted(bytes32,address,address)
 - RoleRevoked(bytes32,address,address)
 - Unpaused(address)

## Methods


 - AUTO_REWARDS_DISTRIBUTOR_ROLE()
 - CONTRACT_ADMIN_ROLE()
 - DEFAULT_ADMIN_ROLE()
 - _acceptAdmin()
 - _addMarket(address)
 - _grantComp(address,uint256)
 - _setCompBorrowSpeed(address,uint256)
 - _setCompSupplySpeed(address,uint256)
 - _setContributorCompSpeed(address,uint256)
 - _setImplementation(address)
 - _setPendingAdmin(address)
 - becomeAdmin()
 - compBorrowSpeeds(address)
 - compSupplySpeeds(address)
 - core()
 - fei()
 - feiBalance()
 - getRoleAdmin(bytes32)
 - getRoleMember(bytes32,uint256)
 - getRoleMemberCount(bytes32)
 - grantRole(bytes32,address)
 - guardianDisableBorrowSpeed(address)
 - guardianDisableSupplySpeed(address)
 - hasRole(bytes32,address)
 - isContractAdmin(address)
 - pause()
 - paused()
 - renounceRole(bytes32,address)
 - revokeRole(bytes32,address)
 - rewardsDistributorContract()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - supportsInterface(bytes4)
 - tribe()
 - tribeBalance()
 - unpause()
