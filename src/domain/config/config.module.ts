import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { Config } from './config.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Config])],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
