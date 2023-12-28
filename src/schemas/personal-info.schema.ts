import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop()
  firstName: string;

  @Prop()
  middleName: string;

  @Prop()
  lastName: string;

  @Prop()
  birthdate: Date;

  @Prop()
  gender: string;

  @Prop()
  status: string;

  @Prop()
  address: string;

  @Prop()
  district: string;

  @Prop()
  barangay: string;

  @Prop()
  city: string;

  @Prop()
  region: string;

  @Prop()
  networkHead: string;

  @Prop()
  leadershipLevel: string;

  @Prop()
  divineAppointmentDate: Date;

  @Prop()
  isRegistered: boolean;

  @Prop()
  precinctId: string;

  @Prop()
  votingDistrict: string;

  @Prop()
  votingBarangay: string;

  @Prop()
  votingCity: string;

  @Prop()
  votingRegion: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
