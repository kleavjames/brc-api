import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  middleName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsDateString()
  @IsOptional()
  birthdate: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  district: string;

  @IsNumber()
  @IsOptional()
  districtNumber: number;

  @IsString()
  @IsOptional()
  barangay: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  region: string;

  @IsString()
  @IsOptional()
  networkHead: string;

  @IsString()
  @IsOptional()
  leadershipLevel: string;

  @IsDateString()
  @IsOptional()
  divineAppointmentDate: string;

  @IsBoolean()
  @IsOptional()
  isRegistered: boolean;

  @IsString()
  @IsOptional()
  votingPrecinctId: string;

  @IsString()
  @IsOptional()
  votingDistrict: string;

  @IsNumber()
  @IsOptional()
  votingDistrictNumber: number;

  @IsString()
  @IsOptional()
  votingBarangay: string;

  @IsString()
  @IsOptional()
  votingCity: string;

  @IsString()
  @IsOptional()
  votingRegion: string;
}
