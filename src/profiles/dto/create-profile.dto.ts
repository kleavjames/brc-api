import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProfileDto {
  @IsString()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  @IsBoolean()
  outsideDvo: boolean;

  @IsDateString()
  birthdate: string;

  @IsString()
  gender: string;

  @IsString()
  status: string;

  @IsString()
  address: string;

  @IsString()
  district: string;

  @IsNumber()
  districtNumber: number;

  @IsString()
  barangay: string;

  @IsString()
  city: string;

  @IsString()
  region: string;

  @IsString()
  networkHead: string;

  @IsString()
  leadershipLevel: string;

  @IsDateString()
  @IsOptional()
  divineAppointmentDate: string;

  @IsBoolean()
  votingOutsideDvo: boolean;

  @IsBoolean()
  sameAddress: boolean;

  @IsBoolean()
  isRegistered: boolean;

  @IsString()
  @IsOptional()
  votingPrecinctId?: string;

  @IsString()
  @IsOptional()
  votingDistrict?: string;

  @IsNumber()
  @IsOptional()
  votingDistrictNumber?: number;

  @IsString()
  @IsOptional()
  votingBarangay?: string;

  @IsString()
  @IsOptional()
  votingCity?: string;

  @IsString()
  @IsOptional()
  votingRegion?: string;
}
