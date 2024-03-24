import { ChainId, ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.BLAST_SEPOLIA]: ChainKey.BLAST_SEPOLIA
}

export const CHAIN_ID: { [chainId: number]: number } = {
  [ChainId.BLAST_SEPOLIA]: ChainId.BLAST_SEPOLIA
}
