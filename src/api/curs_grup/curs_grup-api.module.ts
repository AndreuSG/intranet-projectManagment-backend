import { Module } from '@nestjs/common';
import { CursosGrupsApiService } from './curs_grup-api.service';
import { CursosGrupsApiController } from './curs_grup-api.controller';
import { CursGrupModule } from 'src/domain/curs_grup/curs_grup.module';

@Module({
  imports: [CursGrupModule],
  providers: [CursosGrupsApiService],
  controllers: [CursosGrupsApiController]
})
export class CursGrupApiModule {}
