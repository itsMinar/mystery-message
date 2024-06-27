import { Document, Model, Schema, model, models } from 'mongoose';

// Message interface
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// Message schema
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: [true, 'Message Content is Required'],
  },
  createdAt: {
    type: Date,
    required: [true, 'Message createdAt is Required'],
    default: Date.now,
  },
});

// User interface
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

// User schema
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, 'Username is Required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please use a Valid Email address.'],
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
  },
  verifyCode: {
    type: String,
    required: [true, 'Verify Code is Required'],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry is Required'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

// User model
const UserModel =
  (models.User as Model<User>) || model<User>('User', UserSchema);

export default UserModel;
