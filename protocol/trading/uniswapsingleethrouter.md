---
description: A Uniswap router focusing on single ETH/token swaps
---

# UniswapSingleEthRouter

## Contract

[UniswapSingleEthRouter.sol](https://github.com/fei-protocol/fei-protocol-core/blob/master/contracts/router/UniswapSingleEthRouter.sol) implements [IUniswapSingleEthRouter](https://github.com/fei-protocol/fei-protocol-core/blob/master/contracts/router/IUniswapSingleEthRouter.sol)

## Description

A router for swapping tokens and ETH on a single predetermined Uniswap pair.

The router implements only two of the standard [Uniswap router](https://uniswap.org/docs/v2/smart-contracts/router02) methods:

* `swapExactETHForTokens`
* `swapExactTokensForETH`

Both have the same standard behavior as the Uniswap router, specifying a `amountOutMin` to protect against slippage and a `deadline` to timebox trades.

## State-Changing Functions <a id="state-changing-functions"></a>

### Public

#### swapExactETHForTokens

```javascript
function swapExactETHForTokens(
    uint256 amountOutMin,
    address to,
    uint256 deadline
) external payable returns (uint256 amountOut);
```

Buy at least `amountOutMin` tokens for ETH and send the ETH to address `to` before the block timestamp exceeds `deadline`.

#### swapExactTokensForETH

```javascript
function swapExactTokensForETH(
    uint256 amountIn,
    uint256 amountOutMin,
    address to,
    uint256 deadline
) external returns (uint256 amountOut);
```

Sell `amountIn` FEI to receive at least `amountOutMin` ETH and send the FEI to address `to` before the block timestamp exceeds `deadline`. 

