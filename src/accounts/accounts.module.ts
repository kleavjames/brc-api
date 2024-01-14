import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/account.schema';
import { Profile, ProfileSchema } from 'src/schemas/profile.schema';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Profile.name,
        schema: ProfileSchema,
      },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: Account.name,
        useFactory: () => {
          const schema = AccountSchema;
          schema.pre('save', async function () {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService],
})
export class AccountsModule {}
