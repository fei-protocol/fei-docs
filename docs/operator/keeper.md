# Keepers

A list of routine protocol operations which need executing and their trigger conditions. These may include an FEI incentive paid via minted FEI.


| Name                     | Incentive  | Trigger
| ------------------------ | --------- | ----
| Collateralization Oracle |  1000 FEI | When the collateralization oracle wrapper is out of date or beyond deviation threshold `collateralizationOracleWrepper.isOutdatedOrExceededDeviationThreshold()` |
| ETH Bonding Curve        |  500 FEI  | Timer passed and premium exceeds incentive  |
| DAI Bonding Curve        |  100 FEI  | Timer passed and premium exceeds incentive  |
| DAI PCV Dripper          |  0 FEI    | Timer passed and target balance < threshold |
| PCV Equity Minter        |  1000 FEI | Timer passed and auction ended              |
| Tribe Rewards Dripper    |  0 FEI    | Timer passed                                |
| Aave ETH PCV Dripper     |  100 FEI  | Timer passed and target balance < threshold |
| Compound ETH PCV Dripper |  100 FEI  | Timer passed and target balance < threshold |
| TRIBE Reserve Stabilizer |  0 FEI    | Collateralization below (above) threshold and time not yet started (already started) |
| FeiRari TRIBE Syncer     |  0 FEI    | Ideal drip != current reward rate           |