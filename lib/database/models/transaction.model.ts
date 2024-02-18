import { Schema, model, models } from "mongoose";

// itransaction interface for TransactionSchema
export interface ITransaction {
    createdAt?: Date; // 1. Date and time when the transaction was created, defaults to current date if not provided (optional)
    stripeId: string; // 2. Stripe ID of the transaction
    amount: number; // 3. Amount of the transaction
    plan?: string; // 4. Plan associated with the transaction (optional)
    credits?: number; // 5. Credits associated with the transaction (optional)
    buyer: Schema.Types.ObjectId; // 6. Buyer of the transaction, referencing the 'User' schema
}


const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;