import {
  Transfer as TransferEvent
} from "../generated/WETH/WETH"
import {
  Transfer
} from "../generated/schema"

// const providerURL: string = "https://api-gateway.skymavis.com/rpc/archive";
// const treasuryDeploymentBlock: number = 16377111;
// const walletAddress: string = "0x245db945c485b68fdc429e4f7085a1761aa4d45d";

// const erc20ABI: string = `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]`;

// const contractAddresses: string[] = [
//   "0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5",
//   "0x97a9107c1793bc407d6f527b77e7fff4d812bece",
//   "0xa8754b9fa15fc18bb59458815510e40a12cd2014",
// ];

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
  entity._token = event.address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
