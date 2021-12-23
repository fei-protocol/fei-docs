# Fei User Documentation


---
## Table of Contents

* Fei Improvement Proposals - TODO
* Optimistic Approval - TODO
* Moderation - TODO
* DAI Minting and Redemptions

## DAI Minting and Redemption Limits

The PSM allows users to both mint FEI by providing DAI and redeem their FEI for DAI. Both of these actions are rate limited.

For redemptions, every 30 minutes, 5m DAI will be dripped into PSM if it has less than 5m DAI to allow continuous redemptions.

FEI is minted from a buffer that is continually refilled and has a maximum balance of 10m FEI. Whenever the buffer contains under 10m FEI, the PSM adds 10k FEI per second to the buffer. 
