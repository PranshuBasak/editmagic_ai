import { Document, Schema, model, models } from "mongoose";


// iuser interface for UserSchema
export interface IUser extends Document {
    clerkId: string; // 1. Clerk ID of the user
    email: string; // 2. Email of the user
    username: string; // 3. Username of the user
    photo: string; // 4. URL of the user's photo
    firstName?: string; // 5. First name of the user (optional)
    lastName?: string; // 6. Last name of the user (optional)
    planId?: number; // 7. Plan ID of the user, defaulting to 1 if not provided (optional)
    creditBalance?: number; // 8. Credit balance of the user, defaulting to 10 if not provided (optional)
}



const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;