# GovernorTimelockCompound


DEV NOTE: Extension of {Governor} that binds the execution process to a Compound Timelock. This adds a delay, enforced by the external timelock to all successful proposal (in addition to the voting duration). The {Governor} needs to be the admin of the timelock for any operation to be performed. A public, unrestricted, {GovernorTimelockCompound-__acceptAdmin} is available to accept ownership of the timelock. Using this model means the proposal will be operated by the {TimelockController} and not by the {Governor}. Thus, the assets and permissions must be attached to the {TimelockController}. Any asset sent to the {Governor} will be inaccessible. _Available since v4.3._

## Events


 - ProposalCanceled(uint256)
 - ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)
 - ProposalExecuted(uint256)
 - ProposalQueued(uint256,uint256)
 - TimelockChange(address,address)
 - VoteCast(address,uint256,uint8,uint256,string)

## Methods


 - BALLOT_TYPEHASH()
 - COUNTING_MODE()
 - __acceptAdmin()
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
 - proposalThreshold()
 - propose(address[],uint256[],bytes[],string)
 - queue(address[],uint256[],bytes[],bytes32)
 - quorum(uint256)
 - state(uint256)
 - supportsInterface(bytes4)
 - timelock()
 - updateTimelock(address)
 - version()
 - votingDelay()
 - votingPeriod()
