import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ApiModule } from './api/api.module';


@Module({
  imports: [
    DatabaseModule,
    ApiModule,
  ],
})
export class AppModule {}
