import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Account } from 'src/schemas/account.schema';
import { Profile } from 'src/schemas/profile.schema';
import { RegisterAccountDto } from './dto/register-account.dto';
import { processString } from 'src/utils/strings';
import { LoginAccountDto } from './dto/login-account.dt';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async register(registerAccountDto: RegisterAccountDto): Promise<any> {
    const { firstName, middleName, lastName } = registerAccountDto;
    const profiles = await this.profileModel.find().exec();
    const accounts = await this.accountModel.find().exec();

    for await (const account of accounts) {
      if (
        processString(firstName) === processString(account.firstName) &&
        processString(middleName) === processString(account.middleName) &&
        processString(lastName) === processString(account.lastName)
      ) {
        return null;
      }
    }

    let profileId: Types.ObjectId | null = null;
    // check if register account has profile already
    for await (const profile of profiles) {
      if (
        processString(firstName) === processString(profile.firstName) &&
        processString(middleName) === processString(profile.middleName) &&
        processString(lastName) === processString(profile.lastName)
      ) {
        profileId = profile._id;
      }
    }
    const account = new this.accountModel({
      ...registerAccountDto,
      profile: profileId,
    });

    account.save();

    return {
      username: account.username,
      firstName: account.firstName,
      lastName: account.lastName,
      profile: account.profile,
    };
  }

  async login(
    loginAccountDto: LoginAccountDto,
  ): Promise<{ token: string | null }> {
    const account = await this.accountModel
      .findOne({
        username: loginAccountDto.username,
      })
      .select('+password');

    const isMatch = await account.matchPassword(loginAccountDto.password);
    if (!isMatch) {
      return {
        token: null,
      };
    }

    return {
      token: 'asdasdnj2nad',
    };
  }
}
