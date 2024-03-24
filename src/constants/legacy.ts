import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.BLAST_SEPOLIA]:'0x343b49673034cbb4b499068f998ccfd4107dc506c3592cfe2703f28d97455ce0'
}

export const INIT_CODE_HASH_LPNFT: { [chainId: number]: string } = {
  [ChainId.BLAST_SEPOLIA]:'0xd3f74d85355df91c73d8ca4051abe3f6053a366f2a771bffba33a72929c55982'
}
