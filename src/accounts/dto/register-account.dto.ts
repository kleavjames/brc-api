import { IsString, IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { Roles } from 'src/constants/accounts.enum';

export class RegisterAccountDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  @IsEnum(Roles, { each: true })
  roles: Roles[];

  @IsMongoId()
  @IsOptional()
  profile: string;
}
