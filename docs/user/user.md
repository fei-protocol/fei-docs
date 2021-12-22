# Fei User Documentation


---
## Table of Contents

* Fei Improvement Proposals - TODO
* Optimistic Approval - TODO
* Moderation - TODO
* DAI Minting and Redemptions

## DAI Minting and Redemption Limits

The maximum amount of FEI that can be minted from a peg stability module at any given point in time is equal to the buffer plus all of the FEI that PSM holds at any given point in time. This function can be called on any PSM:

function buffer() public view returns(**uint256**);

The maximum amount of asset that can be redeemed from the PSM is the amount of asset in the PSM at the time of redemption. The asset amount can go down if the PSM is over the reserve threshold and the allocate function is called. The maximum amount up for redemption is the amount of asset in the PSM. As an example, if there is 10m worth of eth in the PSM, the maximum redemption amount is 10m - the 50bps fee which would mean a total of 10.05m FEI would need to be redeemed to take all of the existing ETH liquidity.