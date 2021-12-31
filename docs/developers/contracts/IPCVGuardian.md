# IPCVGuardian

> IPCVGuardian


an interface for defining how the PCVGuardian functions


DEV NOTE: any implementation of this contract should be granted the roles of Guardian and PCVController in order to work correctly

## Events


 - PCVGuardianERC20Withdrawal(address,address,address,uint256)
 - PCVGuardianETHWithdrawal(address,address,uint256)
 - PCVGuardianWithdrawal(address,address,uint256)
 - SafeAddressAdded(address)
 - SafeAddressRemoved(address)

## Methods


 - getSafeAddresses()
 - isSafeAddress(address)
 - setSafeAddress(address)
 - setSafeAddresses(address[])
 - unsetSafeAddress(address)
 - unsetSafeAddresses(address[])
 - withdrawERC20ToSafeAddress(address,address,address,uint256,bool,bool)
 - withdrawETHToSafeAddress(address,address,uint256,bool,bool)
 - withdrawToSafeAddress(address,address,uint256,bool,bool)
