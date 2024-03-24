import { UrlMap } from '../types'
import { ChainId } from '../enums'
import { CHAIN_KEY } from './chain'

export const ASSETS_BASEURL: UrlMap = {
  [ChainId.BLAST_SEPOLIA]: `https://raw.githubusercontent.com/planarfinance/assets/main/blockchains/${CHAIN_KEY[ChainId.BLAST_SEPOLIA]}`
}
