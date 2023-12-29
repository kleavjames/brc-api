import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/schemas/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const newProfile = new this.profileModel(createProfileDto);
    return newProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<void> {
    await this.profileModel.findByIdAndUpdate(id, updateProfileDto);
  }

  async delete(id: string): Promise<void> {
    await this.profileModel.findByIdAndDelete(id);
  }
}
