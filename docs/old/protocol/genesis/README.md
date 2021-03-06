---
description: "The equal opportunity launch of Fei Protocol \U0001F680"
---

# Genesis

Fei Protocol Genesis starts at 12:01 pm PT on March 31, 2021. It will last 3 days, ending April 3, 2021. Additional details about the Genesis event are available in our Medium announcement.

## Genesis Group

The Genesis Group contract is the user entry point for Genesis participation. It provides users the ability to:

* Enter Genesis with an ETH commitment
* Optionally pre-swap TRIBE with Genesis FEI
* Launch Fei Protocol
* Redeem rewards after launch
* Emergency exit if the launch fails

{% hint style="warning" %}
Genesis entry is one-way. There is no way to redeem committed ETH, unless the launch fails.

Optional pre-swapping of TRIBE is one-way. There is no way to revert back to uncommitted Genesis ETH.
{% endhint %}

{% page-ref page="genesisgroup.md" %}

## Initial DEX Offering \(IDO\)

As part of the Genesis launch, Fei Protocol will supply liquidity for [FEI](../fei-stablecoin/) and [TRIBE](../../governance/tribe.md) on Uniswap. This will amount to 20% of the [TRIBE initial token distribution](https://medium.com/fei-protocol/the-tribe-token-distribution-887f26169e44). The corresponding FEI will be minted by the protocol equal to 20% of the FEI generated by Genesis. This sets the total TRIBE value equal to the value of FEI at Genesis. The liquidity for this IDO will be timelocked and owned by the Fei Core Team.

{% page-ref page="ido.md" %}

{% page-ref page="../references/lineartokentimelock.md" %}

## Fei Core Team Timelocks

The Fei Core Team and early-backers will own timelocked [TRIBE](../../governance/tribe.md) as well as the LP tokens associated with the IDO. These timelocks follow a linear release schedule over a 4 year window on the contract level. The Fei Core Team has elected a back-weighted 5 year timelock period. All tokens follow the 4 year timelock on the contract level. The difference for the team will be managed at the company level.

The TRIBE will be held in a special timelock called the TimelockedDelegator which allows for sub-delegation of portions of the held tokens, even while timelocked. If you'd like to be considered as a sponsored delegate, reach out on Discord.

{% page-ref page="timelockeddelegator.md" %}

{% page-ref page="../references/lineartokentimelock.md" %}



