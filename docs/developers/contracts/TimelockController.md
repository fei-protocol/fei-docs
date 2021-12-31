# TimelockController


DEV NOTE: Contract module which acts as a timelocked controller. When set as the owner of an `Ownable` smart contract, it enforces a timelock on all `onlyOwner` maintenance operations. This gives time for users of the controlled contract to exit before a potentially dangerous maintenance operation is applied. By default, this contract is self administered, meaning administration tasks have to go through the timelock process. The proposer (resp executor) role is in charge of proposing (resp executing) operations. A common use case is to position this {TimelockController} as the owner of a smart contract, with a multisig or a DAO as the sole proposer. _Available since v3.3._

## Events


 - CallExecuted(bytes32,uint256,address,uint256,bytes)
 - CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)
 - Cancelled(bytes32)
 - MinDelayChange(uint256,uint256)
 - RoleAdminChanged(bytes32,bytes32,bytes32)
 - RoleGranted(bytes32,address,address)
 - RoleRevoked(bytes32,address,address)

## Methods


 - DEFAULT_ADMIN_ROLE()
 - EXECUTOR_ROLE()
 - PROPOSER_ROLE()
 - TIMELOCK_ADMIN_ROLE()
 - cancel(bytes32)
 - execute(address,uint256,bytes,bytes32,bytes32)
 - executeBatch(address[],uint256[],bytes[],bytes32,bytes32)
 - getMinDelay()
 - getRoleAdmin(bytes32)
 - getTimestamp(bytes32)
 - grantRole(bytes32,address)
 - hasRole(bytes32,address)
 - hashOperation(address,uint256,bytes,bytes32,bytes32)
 - hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)
 - isOperation(bytes32)
 - isOperationDone(bytes32)
 - isOperationPending(bytes32)
 - isOperationReady(bytes32)
 - renounceRole(bytes32,address)
 - revokeRole(bytes32,address)
 - schedule(address,uint256,bytes,bytes32,bytes32,uint256)
 - scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)
 - supportsInterface(bytes4)
 - updateDelay(uint256)
