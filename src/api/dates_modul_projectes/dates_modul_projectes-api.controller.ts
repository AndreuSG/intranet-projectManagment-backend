import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { DatesModulProjectesApiService } from './dates_modul_projectes-api.service';
import { API_BASE } from 'src/shared/constants/API';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AdminGuard } from 'src/auth/guard/admin.guard';
import { CreateDatesModulProjectesDto, UpdateDatesModulProjectesDto } from 'src/domain/dates_modul_projectes/dto/dates_modul_projectes.dto';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { USER_ROLE } from 'src/shared/enums/user.role';

@Controller(`${API_BASE}/dates-modul-projectes`)
@UseGuards(JwtAuthGuard)
export class DatesModulProjectesApiController {
   constructor(private readonly datesModulProjectesApiService: DatesModulProjectesApiService) { }

   @Get()
   async findAll() {
      return this.datesModulProjectesApiService.findAll();
   }

   @Get('modul/:idModul')
   async findByModul(@Param('idModul') idModul: number) {
      return this.datesModulProjectesApiService.findByModul(idModul);
   }

   @Get('profe/:idProfe')
   async findByProfe(@Param('idProfe') idProfe: number) {
      return this.datesModulProjectesApiService.findByProfe(idProfe);
   }

   @Get('grup/:idGrup')
   async findByGrup(@Param('idGrup') idGrup: string) {
      return this.datesModulProjectesApiService.findByGrup(idGrup);
   }

   @Get(':id')
   async findOne(@Param('id') id: number) {
      return this.datesModulProjectesApiService.findOne(id);
   }

   @Post()
   @UseGuards(RolesGuard)
   @Roles([USER_ROLE.PROFE])
   async create(@Body() createDto: CreateDatesModulProjectesDto) {
      return this.datesModulProjectesApiService.create(createDto);
   }

   @Put(':id')
   @UseGuards(RolesGuard)
   @Roles([USER_ROLE.PROFE])
   async update(@Param('id') id: number, @Body() updateDto: UpdateDatesModulProjectesDto) {
      return this.datesModulProjectesApiService.update(id, updateDto);
   }

   @Delete(':id')
   @UseGuards(RolesGuard)
   @Roles([USER_ROLE.PROFE])
   async remove(@Param('id') id: number) {
      return this.datesModulProjectesApiService.remove(id);
   }
} 