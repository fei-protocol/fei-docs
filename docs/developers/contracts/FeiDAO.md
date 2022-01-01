[⬅️ Contracts](contracts.md)

# [FeiDAO](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/FeiDAO.sol)

## Mainnet implementations

| Name | Address |
| ---- | ------- |
| feiDAO | [0x0BEF27FEB58e857046d630B2c03dFb7bae567494](https://etherscan.io/address/0x0BEF27FEB58e857046d630B2c03dFb7bae567494) |
| tribeRariDAO | [0x637deEED4e4deb1D222650bD4B64192abf002c00](https://etherscan.io/address/0x637deEED4e4deb1D222650bD4B64192abf002c00) |

## Related Contracts


[FeiDAOTimelock](FeiDAOTimelock.md), [Tribe](Tribe.md), [Timelock](Timelock.md)

## Events

#### ProposalCanceled

```javascript
event ProposalCanceled(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

#### ProposalCreated

```javascript
event ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| proposer | address |  |
| targets | address[] |  |
| values | uint256[] |  |
| signatures | string[] |  |
| calldatas | bytes[] |  |
| startBlock | uint256 |  |
| endBlock | uint256 |  |
| description | string |  |

#### ProposalExecuted

```javascript
event ProposalExecuted(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

#### ProposalQueued

```javascript
event ProposalQueued(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| eta | uint256 |  |

#### ProposalThresholdUpdated

```javascript
event ProposalThresholdUpdated(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldProposalThreshold | uint256 |  |
| newProposalThreshold | uint256 |  |

#### QuorumUpdated

```javascript
event QuorumUpdated(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldQuorum | uint256 |  |
| newQuorum | uint256 |  |

#### Rollback

```javascript
event Rollback()
```

#### RollbackQueued

```javascript
event RollbackQueued(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| eta | uint256 |  |

#### TimelockChange

```javascript
event TimelockChange(address,address)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldTimelock | address |  |
| newTimelock | address |  |

#### VoteCast

```javascript
event VoteCast(address,uint256,uint8,uint256,string)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| voter indexed | address |  |
| proposalId | uint256 |  |
| support | uint8 |  |
| weight | uint256 |  |
| reason | string |  |

#### VotingDelayUpdated

```javascript
event VotingDelayUpdated(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldVotingDelay | uint256 |  |
| newVotingDelay | uint256 |  |

#### VotingPeriodUpdated

```javascript
event VotingPeriodUpdated(uint256,uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| oldVotingPeriod | uint256 |  |
| newVotingPeriod | uint256 |  |

## Methods

#### BACKUP_GOVERNOR

```javascript
function BACKUP_GOVERNOR() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### BALLOT_TYPEHASH

```javascript
function BALLOT_TYPEHASH() view returns(bytes32)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bytes32 |  |

#### COUNTING_MODE

```javascript
function COUNTING_MODE() pure returns(string)
```

> module:voting

> A description of the possible `support` values for {castVote} and the way these votes are counted, meant to be consumed by UIs to show correct vote options and interpret the results. The string is a URL-encoded sequence of key-value pairs that each describe one aspect, for example `support=bravo&quorum=for,abstain`. There are 2 standard keys: `support` and `quorum`. - `support=bravo` refers to the vote options 0 = Against, 1 = For, 2 = Abstain, as in `GovernorBravo`. - `quorum=bravo` means that only For votes are counted towards quorum. - `quorum=for,abstain` means that both For and Abstain votes are counted towards quorum. NOTE: The string can be decoded by the standard https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams[`URLSearchParams`] JavaScript class.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### ROLLBACK_DEADLINE

```javascript
function ROLLBACK_DEADLINE() view returns(uint256)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### __acceptAdmin

```javascript
function __acceptAdmin() nonpayable
```

> Accept admin right over the timelock.

#### __executeRollback

```javascript
function __executeRollback() nonpayable
```

> complete the rollback

#### __rollback

```javascript
function __rollback(uint256) nonpayable
```

> one-time option to roll back the DAO to old GovernorAlpha

> guardian-only, and expires after the deadline. This function is here as a fallback in case something goes wrong.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| eta | uint256 |  |

#### cancel

```javascript
function cancel(uint256) nonpayable
```

> Cancels a proposal only if sender is the proposer, or proposer delegates dropped below proposal threshold.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

#### castVote

```javascript
function castVote(uint256,uint8) nonpayable returns(uint256)
```

> See {IGovernor-castVote}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| support | uint8 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### castVoteBySig

```javascript
function castVoteBySig(uint256,uint8,uint8,bytes32,bytes32) nonpayable returns(uint256)
```

> See {IGovernor-castVoteBySig}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| support | uint8 |  |
| v | uint8 |  |
| r | bytes32 |  |
| s | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### castVoteWithReason

```javascript
function castVoteWithReason(uint256,uint8,string) nonpayable returns(uint256)
```

> See {IGovernor-castVoteWithReason}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| support | uint8 |  |
| reason | string |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### execute

```javascript
function execute(address[],uint256[],bytes[],bytes32) payable returns(uint256)
```

> See {IGovernor-execute}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| calldatas | bytes[] |  |
| descriptionHash | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### execute

```javascript
function execute(uint256) payable
```

> See {IGovernorCompatibilityBravo-execute}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

#### getActions

```javascript
function getActions(uint256) view returns(address[],uint256[],string[],bytes[])
```

> See {IGovernorCompatibilityBravo-getActions}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| signatures | string[] |  |
| calldatas | bytes[] |  |

#### getReceipt

```javascript
function getReceipt(uint256,address) view returns(tuple)
```

> See {IGovernorCompatibilityBravo-getReceipt}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| voter | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | tuple |  |

#### getVotes

```javascript
function getVotes(address,uint256) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| account | address |  |
| blockNumber | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### hasVoted

```javascript
function hasVoted(uint256,address) view returns(bool)
```

> See {IGovernor-hasVoted}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| account | address |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### hashProposal

```javascript
function hashProposal(address[],uint256[],bytes[],bytes32) pure returns(uint256)
```

> See {IGovernor-hashProposal}. The proposal id is produced by hashing the RLC encoded `targets` array, the `values` array, the `calldatas` array and the descriptionHash (bytes32 which itself is the keccak256 hash of the description string). This proposal id can be produced from the proposal data which is part of the {ProposalCreated} event. It can even be computed in advance, before the proposal is submitted. Note that the chainId and the governor address are not part of the proposal id computation. Consequently, the same proposal (with same operation and same description) will have the same id if submitted on multiple governors accross multiple networks. This also means that in order to execute the same operation twice (on the same governor) the proposer will have to change the description in order to avoid proposal id conflicts.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| calldatas | bytes[] |  |
| descriptionHash | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### name

```javascript
function name() view returns(string)
```

> See {IGovernor-name}.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### proposalDeadline

```javascript
function proposalDeadline(uint256) view returns(uint256)
```

> See {IGovernor-proposalDeadline}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### proposalEta

```javascript
function proposalEta(uint256) view returns(uint256)
```

> Public accessor to check the eta of a queued proposal

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### proposalSnapshot

```javascript
function proposalSnapshot(uint256) view returns(uint256)
```

> See {IGovernor-proposalSnapshot}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### proposalThreshold

```javascript
function proposalThreshold() view returns(uint256)
```

> Part of the Governor Bravo's interface: _"The number of votes required in order for a voter to become a proposer"_.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### proposals

```javascript
function proposals(uint256) view returns(uint256,address,uint256,uint256,uint256,uint256,uint256,uint256,bool,bool)
```

> See {IGovernorCompatibilityBravo-proposals}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| id | uint256 |  |
| proposer | address |  |
| eta | uint256 |  |
| startBlock | uint256 |  |
| endBlock | uint256 |  |
| forVotes | uint256 |  |
| againstVotes | uint256 |  |
| abstainVotes | uint256 |  |
| canceled | bool |  |
| executed | bool |  |

#### propose

```javascript
function propose(address[],uint256[],bytes[],string) nonpayable returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| calldatas | bytes[] |  |
| description | string |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### propose

```javascript
function propose(address[],uint256[],string[],bytes[],string) nonpayable returns(uint256)
```

> See {IGovernorCompatibilityBravo-propose}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| signatures | string[] |  |
| calldatas | bytes[] |  |
| description | string |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### queue

```javascript
function queue(address[],uint256[],bytes[],bytes32) nonpayable returns(uint256)
```

> Function to queue a proposal to the timelock.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| targets | address[] |  |
| values | uint256[] |  |
| calldatas | bytes[] |  |
| descriptionHash | bytes32 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### queue

```javascript
function queue(uint256) nonpayable
```

> See {IGovernorCompatibilityBravo-queue}.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

#### quorum

```javascript
function quorum(uint256) view returns(uint256)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### quorumVotes

```javascript
function quorumVotes() view returns(uint256)
```

> See {IGovernorCompatibilityBravo-quorumVotes}.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### setProposalThreshold

```javascript
function setProposalThreshold(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newProposalThreshold | uint256 |  |

#### setQuorum

```javascript
function setQuorum(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newQuorum | uint256 |  |

#### setVotingDelay

```javascript
function setVotingDelay(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newVotingDelay | uint256 |  |

#### setVotingPeriod

```javascript
function setVotingPeriod(uint256) nonpayable
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newVotingPeriod | uint256 |  |

#### state

```javascript
function state(uint256) view returns(uint8)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint8 |  |

#### supportsInterface

```javascript
function supportsInterface(bytes4) view returns(bool)
```

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| interfaceId | bytes4 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | bool |  |

#### timelock

```javascript
function timelock() view returns(address)
```

> Public accessor to check the address of the timelock

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### token

```javascript
function token() view returns(address)
```

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### updateTimelock

```javascript
function updateTimelock(address) nonpayable
```

> Public endpoint to update the underlying timelock instance. Restricted to the timelock itself, so updates must be proposed, scheduled and executed using the {Governor} workflow. For security reason, the timelock must be handed over to another admin before setting up a new one. The two operations (hand over the timelock) and do the update can be batched in a single proposal. Note that if the timelock admin has been handed over in a previous operation, we refuse updates made through the timelock if admin of the timelock has already been accepted and the operation is executed outside the scope of governance.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| newTimelock | address |  |

#### version

```javascript
function version() view returns(string)
```

> See {IGovernor-version}.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### votingDelay

```javascript
function votingDelay() view returns(uint256)
```

> module:user-config

> Delay, in number of block, between the proposal is created and the vote starts. This can be increassed to leave time for users to buy voting power, of delegate it, before the voting of a proposal starts.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### votingPeriod

```javascript
function votingPeriod() view returns(uint256)
```

> module:user-config

> Delay, in number of blocks, between the vote start and vote ends. NOTE: The {votingDelay} can delay the start of the vote. This must be considered when setting the voting duration compared to the voting delay.

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

[⬅️ Contracts](contracts.md)
