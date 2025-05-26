import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursGrup } from './curs_grup.entity';
import { CursGrupService } from './curs_grup.service';

@Module({
   imports: [TypeOrmModule.forFeature([CursGrup])],
   providers: [CursGrupService],
   exports: [CursGrupService],
})
export class CursGrupModule {}
