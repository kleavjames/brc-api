import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { RegisterAccountDto } from './dto/register-account.dto';
import { LoginAccountDto } from './dto/login-account.dt';
import { Response } from 'express';

@Controller('accounts')
export class AccountsController {
  constructor(private accounsService: AccountsService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async registerAccount(
    @Body() registerAccountDto: RegisterAccountDto,
    @Res() res: Response,
  ) {
    const account = await this.accounsService.register(registerAccountDto);
    if (!account)
      throw new HttpException(
        'Account already existed',
        HttpStatus.BAD_REQUEST,
      );
    res.status(HttpStatus.CREATED).send({
      message: account,
    });
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginAccountDto: LoginAccountDto, @Res() res: Response) {
    const loginRes = await this.accounsService.login(loginAccountDto);
    if (!loginRes.token)
      throw new HttpException(
        'Incorrect user or password',
        HttpStatus.UNAUTHORIZED,
      );

    res.status(HttpStatus.OK).send({
      token: loginRes.token,
    });
  }
}
