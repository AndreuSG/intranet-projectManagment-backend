import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm/repository/Repository';
import { User } from './user.entity';
import { USER_ROLE } from 'src/shared/enums/user.role';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException('User with this id was not founded');

    return user;
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { usuari: username } });
  }

  findByRole(role: USER_ROLE): Promise<User[]> {
    return this.userRepository.find({ where: { tipus: role } });
  }
}
