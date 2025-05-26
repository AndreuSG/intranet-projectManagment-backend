import { Controller, Get, UseGuards } from '@nestjs/common';
import { CursosGrupsApiService } from './curs_grup-api.service';
import { AdminGuard } from 'src/auth/guard/admin.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/cursos-grups`)
@UseGuards(JwtAuthGuard, AdminGuard)
export class CursosGrupsApiController {
   constructor(private readonly cursosGrupsApiService: CursosGrupsApiService) { }
   @Get()
   async getAllCursos() {
      return this.cursosGrupsApiService.getAllCursos();
   }
}

