import { ChainTokenMap, TokenMap } from '../types'
import { USDB_ADDRESS, WETH_ADDRESS, PLANETOKEN_ADDRESS } from './addresses'
import { ChainId } from '../enums'
import { Token } from '../entities/Token'

export const WETH: TokenMap = {
  [ChainId.BLAST_SEPOLIA]: new Token(ChainId.BLAST_SEPOLIA, WETH_ADDRESS[ChainId.BLAST_SEPOLIA], 18, 'WETH', 'Wrapped Ether'),
}

export const USDB: TokenMap = {
  [ChainId.BLAST_SEPOLIA]:new Token(ChainId.BLAST_SEPOLIA,USDB_ADDRESS[ChainId.BLAST_SEPOLIA],18,'USDB','Rebasing USD')
}

export const USD: TokenMap = {
  ...USDB,
}

export const WNATIVE: TokenMap = {
  ...WETH
}

export const PLANE: ChainTokenMap = {
  [ChainId.BLAST_SEPOLIA]: new Token(ChainId.BLAST_SEPOLIA, PLANETOKEN_ADDRESS[ChainId.BLAST_SEPOLIA], 18, 'PLANE', 'Planar token')
}
