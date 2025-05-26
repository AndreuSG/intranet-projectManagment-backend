import { Module } from '@nestjs/common';
import { ConfigApiService } from './config-api.service';
import { ConfigApiController } from './config-api.controller';
import { ConfigModule } from 'src/domain/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [ConfigApiService],
  controllers: [ConfigApiController]
})
export class ConfigApiModule {}
