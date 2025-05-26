import { Injectable } from '@nestjs/common';
import { CursGrupService } from 'src/domain/curs_grup/curs_grup.service';

@Injectable()
export class CursosGrupsApiService {
   constructor(private readonly cursGrupService: CursGrupService) { }

   async getAllCursos() {
      return this.cursGrupService.getAllCursos();
   }
}
