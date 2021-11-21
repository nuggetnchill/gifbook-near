import { context, u128, PersistentVector } from "near-sdk-as";

@nearBindgen
export class PostedMessage {
  premium: boolean;
  donation: u128;
  sender: string;
  timestamp: string;

  constructor(public text: string, public gif: string) {
    this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
    this.donation = context.attachedDeposit;
    this.sender = context.sender;
    this.timestamp = context.blockTimestamp.toString();
  }
}

export const messages = new PersistentVector<PostedMessage>("m");
