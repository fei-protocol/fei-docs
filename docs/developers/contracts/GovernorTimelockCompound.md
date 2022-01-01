# GovernorTimelockCompound


DEV NOTE: Extension of {Governor} that binds the execution process to a Compound Timelock. This adds a delay, enforced by the external timelock to all successful proposal (in addition to the voting duration). The {Governor} needs to be the admin of the timelock for any operation to be performed. A public, unrestricted, {GovernorTimelockCompound-__acceptAdmin} is available to accept ownership of the timelock. Using this model means the proposal will be operated by the {TimelockController} and not by the {Governor}. Thus, the assets and permissions must be attached to the {TimelockController}. Any asset sent to the {Governor} will be inaccessible. _Available since v4.3._

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

## Methods

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

#### __acceptAdmin

```javascript
function __acceptAdmin() nonpayable
```

> Accept admin right over the timelock.

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

#### getVotes

```javascript
function getVotes(address,uint256) view returns(uint256)
```

> module:reputation

> Voting power of an `account` at a specific `blockNumber`. Note: this can be implemented in a number of ways, for example by reading the delegated balance from one (or multiple), {ERC20Votes} tokens.

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

> module:voting

> Returns weither `account` has cast a vote on `proposalId`.

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

#### propose

```javascript
function propose(address[],uint256[],bytes[],string) nonpayable returns(uint256)
```

> See {IGovernor-propose}.

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

#### quorum

```javascript
function quorum(uint256) view returns(uint256)
```

> module:user-config

> Minimum number of cast voted required for a proposal to be successful. Note: The `blockNumber` parameter corresponds to the snaphot used for counting vote. This allows to scale the quroum depending on values such as the totalSupply of a token at this block (see {ERC20Votes}).

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| blockNumber | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### state

```javascript
function state(uint256) view returns(uint8)
```

> Overriden version of the {Governor-state} function with added support for the `Queued` and `Expired` status.

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

> See {IERC165-supportsInterface}.

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
