# IGovernorTimelock


DEV NOTE: Extension of the {IGovernor} for timelock supporting modules. _Available since v4.3._

## Events


 - ProposalCanceled(uint256)
 - ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)
 - ProposalExecuted(uint256)
 - ProposalQueued(uint256,uint256)
 - VoteCast(address,uint256,uint8,uint256,string)

## Methods


 - COUNTING_MODE()
 - castVote(uint256,uint8)
 - castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)
 - castVoteWithReason(uint256,uint8,string)
 - execute(address[],uint256[],bytes[],bytes32)
 - getVotes(address,uint256)
 - hasVoted(uint256,address)
 - hashProposal(address[],uint256[],bytes[],bytes32)
 - name()
 - proposalDeadline(uint256)
 - proposalEta(uint256)
 - proposalSnapshot(uint256)
 - propose(address[],uint256[],bytes[],string)
 - queue(address[],uint256[],bytes[],bytes32)
 - quorum(uint256)
 - state(uint256)
 - supportsInterface(bytes4)
 - timelock()
 - version()
 - votingDelay()
 - votingPeriod()
