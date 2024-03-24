import { AddressMap } from '../types'
import { ChainId } from '../enums'

// BLAST_SEPOLIA ADDRESSES
//
// ╔══════════════╤════════════════════════════════════════════╗
// ║ Blast        │ 0x4300000000000000000000000000000000000002 ║
// ╟──────────────┼────────────────────────────────────────────╢
// ║ Blast Points │ 0x2fc95838c71e76ec69ff817983BFf17c710F34E0 ║
// ╟──────────────┼────────────────────────────────────────────╢
// ║ WETH         │ 0x4200000000000000000000000000000000000023 ║
// ╟──────────────┼────────────────────────────────────────────╢
// ║ USDB         │ 0x4200000000000000000000000000000000000022 ║
// ╚══════════════╧════════════════════════════════════════════╝
//
// ╔════════════════════════════════════╤════════════════════════════════════════════╗
// ║ uniswapInterfaceMulticallAddress   │ 0x96Ef5E7f9bf7aeb366a723273B2828978FcB04Ba ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ balanceFetcherAddress              │ 0xa18C87C1dFa9551a7217CA564F88E18cC52ea562 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ protocolEarningsAddress            │ 0x2c9B8086F9121560C888b44D47d5b4B38b9952D7 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planarLiquidityPoolFactoryAddress  │ 0xd43A268C18871063A92041e2a71690d38B17DaC6 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planarLiquidityPoolRouterAddress   │ 0x9e2B7771735a5200bF929d511C0E31DB06e87Da7 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planeTokenAddress                  │ 0x7DB2B351fd2eF74133EF90605Ed0F52249A34C6F ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ xPlaneTokenAddress                 │ 0x10fdc86392d5808a6923f92db116C2dCc4E44597 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planarMasterAddress                │ 0x1f471bC346796265d89E1E3ed9Ba49b5be037757 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ priceConsumerV3Address             │ 0xafE07344F86499223F79C8705b19d3c6bD87085F ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ lpNFTPoolFactoryAddress            │ 0xaB050e5F2976425Fc797cFa04b40D3dAB869E0A0 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ positionHelperAddress              │ 0xfaF6E92429146663a95687cAe3220Da2A8A5722E ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ yieldBoosterAddress                │ 0x4a450E9D3dB941bdB3523D9F51F7bDd3F54A70a4 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ dividendsV2Address                 │ 0x762Cb052674BbB8B00E27013A897fe07f7C84b08 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ launchpadAddress                   │ 0x282868Ad46AaB10C4A09fAcc0391f0a6B7d0fde4 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planeWETHLpAddress                 │ 0xfd8badE3948F162894b2e24f6Ab82FFc55084aDD ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ presaleAddress                     │ 0xd3C6702976F14903D8172674Ab718D2d57a174e5 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ advisorsVestingAddress             │ 0x78Cc8767fb5483f6dA1071ac254732975dC102f8 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ communityAndAirdropsVestingAddress │ 0x58E11CDaED1061cDf037E06BCC8d343c315b1967 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ coreContributorsVestingAddress     │ 0x665273A5E45f994A0D3316403726475a7b499Da6 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ developmentFundVestingAddress      │ 0x95b80a044C7144AEF2a37d00bE7c815888e8C192 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ ecosystemVestingAddress            │ 0x4D32e1a6d6Cb2dc537831E50953e877f50cAA286 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ hyperPoolExcessVestingAddress      │ 0x064536db6b6E061921296a87F4B8257043415381 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ partnershipsVestingAddress         │ 0x28876dB9535C91fc37BF17F1519Fe146F3737EA6 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ hyperPoolFactoryAddress            │ 0xdEDa33f6e3e5D8406E27B60b820359e7275A94be ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ wethUsdbLpAddress                  │ 0xaC0814Fe76c88e8aF8Ab8C012C5c591721f6AFF8 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ wethUsdbLpNFTPoolAddress           │ 0xece540C043B836Fde689044E31de4E4DE65CAFF8 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planeWethLpNFTPoolAddress          │ 0xF3C707585bCF8b7D0D09D04463Fe585398c8B06c ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ wethUsdbOriginPoolAddress          │ 0xDB9a998517822ABd1ffCE524182384334CDdFa9A ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planarTestnetTokenFactory          │ 0x787a153a8dE6e132f9BDddf70BbE2E8c2048f826 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ planarTestnetTokenFaucet           │ 0x9F5d0D94cFE8777555606073B2aeCf758d8E1567 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ penrosTestTokenAddress             │ 0xD931c5b1332aD4aB1dD7b9610bE3214fbCa8Ed85 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ bilvetTestTokenAddress             │ 0xf61f038f08A318b5613F884A6Cc9d97ab74A11ac ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ mobiusTokenAddress                 │ 0xDDa41DB7bD819F6DE8499DAEC9Fe9a888EC5B029 ║
// ╟────────────────────────────────────┼────────────────────────────────────────────╢
// ║ belvedereTokenAddress              │ 0xB0281FAB7Cd9a30C2e62b87DE3084e4D07863e98 ║
// ╚════════════════════════════════════╧════════════════════════════════════════════╝

export const MULTICALL3_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xcA11bde05977b3631167028862bE2a173976CA11',
}

export const BLAST_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x4300000000000000000000000000000000000002',
}

export const BLAST_POINTS_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x2fc95838c71e76ec69ff817983BFf17c710F34E0',
}

export const WETH_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x4200000000000000000000000000000000000023',
}

export const WNATIVE_ADDRESS: AddressMap = {
  ...WETH_ADDRESS
}

export const USDB_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x4200000000000000000000000000000000000022'
}

export const USD_ADDRESS: AddressMap = {
  ...USDB_ADDRESS
}

export const UNISWAPINTERFACEMULTICALL_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x96Ef5E7f9bf7aeb366a723273B2828978FcB04Ba',
}

export const BALANCEFETCHER_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xa18C87C1dFa9551a7217CA564F88E18cC52ea562',
}

export const PROTOCOLEARNINGS_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x2c9B8086F9121560C888b44D47d5b4B38b9952D7',
}

export const PLANARLIQUIDITYPOOLFACTORY_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xd43A268C18871063A92041e2a71690d38B17DaC6',
}

export const PLANARLIQUIDITYPOOLROUTER_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x9e2B7771735a5200bF929d511C0E31DB06e87Da7',
}

export const PLANETOKEN_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x7DB2B351fd2eF74133EF90605Ed0F52249A34C6F',
}

export const XPLANETOKEN_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x10fdc86392d5808a6923f92db116C2dCc4E44597',
}

export const PLANARMASTER_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x1f471bC346796265d89E1E3ed9Ba49b5be037757',
}

export const PRICECONSUMERV3_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xafE07344F86499223F79C8705b19d3c6bD87085F',
}

export const LPNFTPOOLFACTORY_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xaB050e5F2976425Fc797cFa04b40D3dAB869E0A0',
}

export const POSITIONHELPER_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xfaF6E92429146663a95687cAe3220Da2A8A5722E',
}

export const YIELDBOOSTER_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x4a450E9D3dB941bdB3523D9F51F7bDd3F54A70a4',
}

export const DIVIDENDSV2_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x762Cb052674BbB8B00E27013A897fe07f7C84b08',
}

export const LAUNCHPAD_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x282868Ad46AaB10C4A09fAcc0391f0a6B7d0fde4',
}

export const PLANEWETHLP_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xfd8badE3948F162894b2e24f6Ab82FFc55084aDD',
}

export const PRESALE_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xd3C6702976F14903D8172674Ab718D2d57a174e5',
}

export const ADVISORSVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x78Cc8767fb5483f6dA1071ac254732975dC102f8',
}

export const COMMUNITYANDAIRDROPSVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x58E11CDaED1061cDf037E06BCC8d343c315b1967',
}

export const CORECONTRIBUTORSVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x665273A5E45f994A0D3316403726475a7b499Da6',
}

export const DEVELOPMENTFUNDVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x95b80a044C7144AEF2a37d00bE7c815888e8C192',
}

export const ECOSYSTEMVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x4D32e1a6d6Cb2dc537831E50953e877f50cAA286',
}

export const HYPERPOOLEXCESSVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x064536db6b6E061921296a87F4B8257043415381',
}

export const PARTNERSHIPSVESTING_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x28876dB9535C91fc37BF17F1519Fe146F3737EA6',
}

export const HYPERPOOLFACTORY_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xdEDa33f6e3e5D8406E27B60b820359e7275A94be',
}

export const WETHUSDBLP_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xaC0814Fe76c88e8aF8Ab8C012C5c591721f6AFF8',
}

export const WETHUSDBLPNFTPOOL_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xece540C043B836Fde689044E31de4E4DE65CAFF8',
}

export const PLANEWETHLPNFTPOOL_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xF3C707585bCF8b7D0D09D04463Fe585398c8B06c',
}

export const WETHUSDBORIGINPOOL_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xDB9a998517822ABd1ffCE524182384334CDdFa9A',
}

export const PLANARTESTNETTOKENFACTORY_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x787a153a8dE6e132f9BDddf70BbE2E8c2048f826',
}

export const PLANARTESTNETTOKENFAUCET_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0x9F5d0D94cFE8777555606073B2aeCf758d8E1567',
}

export const PENROSTESTTOKEN_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xD931c5b1332aD4aB1dD7b9610bE3214fbCa8Ed85',
}

export const BILVETESTTOKEN_ADDRESS: AddressMap = {
  [ChainId.BLAST_SEPOLIA]: '0xf61f038f08A318b5613F884A6Cc9d97ab74A11ac',
}
