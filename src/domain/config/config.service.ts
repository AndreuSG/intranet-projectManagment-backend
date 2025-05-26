import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Config } from './config.entity';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
@Injectable()
export class ConfigService {
   constructor(
      @InjectRepository(Config)
      private configRepository: Repository<Config>,
   ) {}

   async findAll(): Promise<Config[]> {
      return this.configRepository.find();
   }

   async findOneByCode(code: string): Promise<Config> {
      const config = this.configRepository.findOneByOrFail({
         code
      })

      return config
   }

   async set(dto: CreateConfigDto): Promise<Config> {
      const { code, value } = dto;
      return this.configRepository.create({ code, value: JSON.stringify(value) });
   }

   async update(dto: UpdateConfigDto): Promise<void> {
      const { code, value } = dto;
      await this.configRepository.update(code, { value: JSON.stringify(value) });
   }
}
