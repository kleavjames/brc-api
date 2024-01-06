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
  outsideDvo: boolean;

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
  districtNumber: number;

  @Prop({ required: false })
  barangay: string;

  @Prop()
  city: string;

  @Prop()
  region: string;

  @Prop({ required: false })
  networkHead: string;

  @Prop()
  leadershipLevel: string;

  @Prop({ required: false })
  divineAppointmentDate: Date | null;

  @Prop()
  isRegistered: boolean;

  @Prop()
  votingOutsideDvo: boolean;

  @Prop()
  sameAddress: boolean;

  @Prop({ required: false })
  votingPrecinctId: string;

  @Prop({ required: false })
  votingDistrict: string;

  @Prop({ required: false })
  votingDistrictNumber: number;

  @Prop({ required: false })
  votingBarangay: string;

  @Prop({ required: false })
  votingCity: string;

  @Prop({ required: false })
  votingRegion: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);

ProfileSchema.loadClass(Profile);
