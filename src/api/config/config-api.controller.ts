import { Controller, Get, Post, Body, Put, UseGuards, Param } from '@nestjs/common';
import { Config } from 'src/domain/config/config.entity';
import { ConfigApiService } from './config-api.service';
import { CreateConfigDto } from 'src/domain/config/dto/create-config.dto';
import { UpdateConfigDto } from 'src/domain/config/dto/update-config.dto';
import { API_BASE } from 'src/shared/constants/API';
import { USER_ROLE } from 'src/shared/enums/user.role';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { AdminGuard } from 'src/auth/guard/admin.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller(`${API_BASE}/config`)
@UseGuards(JwtAuthGuard, AdminGuard)
export class ConfigApiController {
   constructor(private readonly configApiService: ConfigApiService) {}

   @Get()
   async findAll(): Promise<Config[]> {
      return this.configApiService.findAll();
   }

   @Get(':code')
   async findOneByCode(@Param('code') code: string) {
      return this.configApiService.findOneByCode(code);
   }

   @Post()
   async set(@Body() dtos: CreateConfigDto[]): Promise<Config[]> {
      return this.configApiService.set(dtos);
   }

   @Put()
   async update(@Body() dtos: UpdateConfigDto[]): Promise<Config[]> {
      return this.configApiService.update(dtos);
   }
}
