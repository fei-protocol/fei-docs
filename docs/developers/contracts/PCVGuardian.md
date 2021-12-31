# PCVGuardian

## Events


 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - PCVGuardianERC20Withdrawal(address,address,address,uint256)
 - PCVGuardianETHWithdrawal(address,address,uint256)
 - PCVGuardianWithdrawal(address,address,uint256)
 - Paused(address)
 - SafeAddressAdded(address)
 - SafeAddressRemoved(address)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - core()
 - fei()
 - feiBalance()
 - getSafeAddresses()
 - isContractAdmin(address)
 - isSafeAddress(address)
 - pause()
 - paused()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setSafeAddress(address)
 - setSafeAddresses(address[])
 - tribe()
 - tribeBalance()
 - unpause()
 - unsetSafeAddress(address)
 - unsetSafeAddresses(address[])
 - withdrawERC20ToSafeAddress(address,address,address,uint256,bool,bool)
 - withdrawETHToSafeAddress(address,address,uint256,bool,bool)
 - withdrawToSafeAddress(address,address,uint256,bool,bool)
