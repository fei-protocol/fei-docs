# TRIBERagequit

> Contract to exchange TRIBE with FEI post-merger
> 
> Author: elee, Joey Santoro


Exchange TRIBE for FEI at Intrinsic Value (semi-manually set) Intrinsic Value = equity / circulating TRIBE. equity = PCV - user FEI circulating TRIBE = total supply - treasury - liquidity mining

## Events


 - Accept(address)
 - Enabled(address)
 - Exchange(address,uint256,uint256)

## Methods


 - bothPartiesAccepted()
 - claimed(address)
 - coreAddress()
 - exchangeRate(uint256)
 - fei()
 - getCirculatingTribe()
 - guardian()
 - intrinsicValueExchangeRateBase()
 - merkleRoot()
 - ngmi(uint256,uint256,bytes32[])
 - rageQuitEnd()
 - rageQuitStart()
 - rewardsDripper()
 - rgt()
 - rgtAccept()
 - rgtAccepted()
 - rgtTimelock()
 - scalar()
 - setBothPartiesAccepted()
 - setExchangeRate(uint256)
 - tribe()
 - tribeAccept()
 - tribeAccepted()
 - tribeRariDAO()
 - tribeTimelock()
