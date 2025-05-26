import { Injectable } from '@nestjs/common';
import { Config } from 'src/domain/config/config.entity';
import { CreateConfigDto } from 'src/domain/config/dto/create-config.dto';
import { UpdateConfigDto } from 'src/domain/config/dto/update-config.dto';
import { ConfigService } from 'src/domain/config/config.service';

@Injectable()
export class ConfigApiService {
   constructor(private readonly configService: ConfigService) {}

   async findAll(): Promise<Config[]> {
      return this.configService.findAll();
   }

   async findOneByCode(code: string): Promise<Config> {
      return this.configService.findOneByCode(code);
   }

   async set(dtos: CreateConfigDto[]): Promise<Config[]> {
      const configs: Config[] = [];
      for (const dto of dtos) {
         const config = await this.configService.set(dto);
         configs.push(config);
      }
      return configs;
   }

   async update(dtos: UpdateConfigDto[]): Promise<Config[]> {
      for (const dto of dtos) {
         await this.configService.update(dto);
      }

      return this.findAll();
   }
}
