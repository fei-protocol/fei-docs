# IGovernorTimelock


DEV NOTE: Extension of the {IGovernor} for timelock supporting modules. _Available since v4.3._

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

#### castVote

```javascript
function castVote(uint256,uint8) nonpayable returns(uint256)
```

> Cast a vote Emits a {VoteCast} event.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| support | uint8 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| balance | uint256 |  |

#### castVoteBySig

```javascript
function castVoteBySig(uint256,uint8,uint8,bytes32,bytes32) nonpayable returns(uint256)
```

> Cast a vote using the user cryptographic signature. Emits a {VoteCast} event.

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
| balance | uint256 |  |

#### castVoteWithReason

```javascript
function castVoteWithReason(uint256,uint8,string) nonpayable returns(uint256)
```

> Cast a with a reason Emits a {VoteCast} event.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |
| support | uint8 |  |
| reason | string |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
| balance | uint256 |  |

#### execute

```javascript
function execute(address[],uint256[],bytes[],bytes32) payable returns(uint256)
```

> Execute a successful proposal. This requires the quorum to be reached, the vote to be successful, and the deadline to be reached. Emits a {ProposalExecuted} event. Note: some module can modify the requirements for execution, for example by adding an additional timelock.

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
| proposalId | uint256 |  |

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

> module:core

> Hashing function used to (re)build the proposal id from the proposal details..

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

> module:core

> Name of the governor instance (used in building the ERC712 domain separator).

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | string |  |

#### proposalDeadline

```javascript
function proposalDeadline(uint256) view returns(uint256)
```

> module:core

> Block number at which votes close. Votes close at the end of this block, so it is possible to cast a vote during this block.

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

> module:core

> Block number used to retrieve user's votes and quorum. As per Compound's Comp and OpenZeppelin's ERC20Votes, the snapshot is performed at the end of this block. Hence, voting for this proposal starts at the beginning of the following block.

##### Params

| Param | Type | Notes |
| ----- | ---- | ----- |
| proposalId | uint256 |  |

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | uint256 |  |

#### propose

```javascript
function propose(address[],uint256[],bytes[],string) nonpayable returns(uint256)
```

> Create a new proposal. Vote start {IGovernor-votingDelay} blocks after the proposal is created and ends {IGovernor-votingPeriod} blocks after the voting starts. Emits a {ProposalCreated} event.

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
| proposalId | uint256 |  |

#### queue

```javascript
function queue(address[],uint256[],bytes[],bytes32) nonpayable returns(uint256)
```

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
| proposalId | uint256 |  |

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

> module:core

> Current state of a proposal, following Compound's convention

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

> Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.

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

##### Returns

| Param | Type | Notes |
| ----- | ---- | ----- |
|  | address |  |

#### version

```javascript
function version() view returns(string)
```

> module:core

> Version of the governor instance (used in building the ERC712 domain separator). Default: "1"

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
