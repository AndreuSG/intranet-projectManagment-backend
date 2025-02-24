import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    DatabaseModule,
    ApiModule,
    AuthModule,
  ],
})
export class AppModule {}
