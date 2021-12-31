# Core

> Source of truth for Fei Protocol
> 
> Author: Fei Protocol


maintains roles, access control, fei, tribe, genesisGroup, and the TRIBE treasury

## Events


 - FeiUpdate(address)
 - GenesisGroupUpdate(address)
 - GenesisPeriodComplete(uint256)
 - RoleAdminChanged(bytes32,bytes32,bytes32)
 - RoleGranted(bytes32,address,address)
 - RoleRevoked(bytes32,address,address)
 - TribeAllocation(address,uint256)
 - TribeUpdate(address)

## Methods


 - BURNER_ROLE()
 - DEFAULT_ADMIN_ROLE()
 - GOVERN_ROLE()
 - GUARDIAN_ROLE()
 - MINTER_ROLE()
 - PCV_CONTROLLER_ROLE()
 - allocateTribe(address,uint256)
 - createRole(bytes32,bytes32)
 - fei()
 - getRoleAdmin(bytes32)
 - getRoleMember(bytes32,uint256)
 - getRoleMemberCount(bytes32)
 - grantBurner(address)
 - grantGovernor(address)
 - grantGuardian(address)
 - grantMinter(address)
 - grantPCVController(address)
 - grantRole(bytes32,address)
 - hasRole(bytes32,address)
 - init()
 - isBurner(address)
 - isGovernor(address)
 - isGuardian(address)
 - isMinter(address)
 - isPCVController(address)
 - renounceRole(bytes32,address)
 - revokeBurner(address)
 - revokeGovernor(address)
 - revokeGuardian(address)
 - revokeMinter(address)
 - revokeOverride(bytes32,address)
 - revokePCVController(address)
 - revokeRole(bytes32,address)
 - setFei(address)
 - setTribe(address)
 - supportsInterface(bytes4)
 - tribe()
