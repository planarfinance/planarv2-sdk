import { Ether } from '../entities/Native'
import { ChainId } from '../enums'
import { NativeMap } from '../types'

export const NATIVE: NativeMap = {
  [ChainId.BLAST_SEPOLIA]: Ether.onChain(ChainId.BLAST_SEPOLIA),
}
