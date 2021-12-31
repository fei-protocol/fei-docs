# ProxyAdmin


DEV NOTE: This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.

## Events


 - OwnershipTransferred(address,address)

## Methods


 - changeProxyAdmin(address,address)
 - getProxyAdmin(address)
 - getProxyImplementation(address)
 - owner()
 - renounceOwnership()
 - transferOwnership(address)
 - upgrade(address,address)
 - upgradeAndCall(address,address,bytes)
