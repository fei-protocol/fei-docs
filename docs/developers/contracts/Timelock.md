# Timelock

## Events


 - CancelTransaction(bytes32,address,uint256,string,bytes,uint256)
 - ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)
 - NewAdmin(address)
 - NewDelay(uint256)
 - NewPendingAdmin(address)
 - QueueTransaction(bytes32,address,uint256,string,bytes,uint256)

## Methods


 - GRACE_PERIOD()
 - MAXIMUM_DELAY()
 - MINIMUM_DELAY()
 - acceptAdmin()
 - admin()
 - cancelTransaction(address,uint256,string,bytes,uint256)
 - delay()
 - executeTransaction(address,uint256,string,bytes,uint256)
 - getTxHash(address,uint256,string,bytes,uint256)
 - pendingAdmin()
 - queueTransaction(address,uint256,string,bytes,uint256)
 - queuedTransactions(bytes32)
 - setDelay(uint256)
 - setPendingAdmin(address)
