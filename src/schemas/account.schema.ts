import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Roles } from 'src/constants/accounts.enum';
import { Profile } from './profile.schema';
import * as bcrypt from 'bcrypt';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  middleName: string;

  @Prop()
  lastName: string;

  @Prop({ type: [String], enum: [Roles], default: [Roles.USER] })
  roles: Roles[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile', default: null })
  profile: Profile;

  // For comparing passwords
  async matchPassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}

export const AccountSchema = SchemaFactory.createForClass(Account);

AccountSchema.loadClass(Account);
