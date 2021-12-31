# FeiDAOTimelock

> Fei DAO Timelock


Timelock with veto admin roles


DEV NOTE: this timelock has the ability for the Guardian to pause queing or executing proposals, as well as being able to veto specific transactions.  The timelock itself could not unpause the timelock while in paused state.

## Events


 - CancelTransaction(bytes32,address,uint256,string,bytes,uint256)
 - ContractAdminRoleUpdate(bytes32,bytes32)
 - CoreUpdate(address,address)
 - ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)
 - NewAdmin(address)
 - NewDelay(uint256)
 - NewPendingAdmin(address)
 - Paused(address)
 - QueueTransaction(bytes32,address,uint256,string,bytes,uint256)
 - Unpaused(address)

## Methods


 - CONTRACT_ADMIN_ROLE()
 - GRACE_PERIOD()
 - MAXIMUM_DELAY()
 - MINIMUM_DELAY()
 - OLD_TIMELOCK()
 - ROLLBACK_DEADLINE()
 - acceptAdmin()
 - admin()
 - cancelTransaction(address,uint256,string,bytes,uint256)
 - core()
 - delay()
 - executeTransaction(address,uint256,string,bytes,uint256)
 - fei()
 - feiBalance()
 - getTxHash(address,uint256,string,bytes,uint256)
 - governorSetPendingAdmin(address)
 - isContractAdmin(address)
 - pause()
 - paused()
 - pendingAdmin()
 - queueTransaction(address,uint256,string,bytes,uint256)
 - queuedTransactions(bytes32)
 - rollback()
 - setContractAdminRole(bytes32)
 - setCore(address)
 - setDelay(uint256)
 - setPendingAdmin(address)
 - tribe()
 - tribeBalance()
 - unpause()
 - vetoTransactions(address[],uint256[],string[],bytes[],uint256[])
