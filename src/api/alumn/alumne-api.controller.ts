import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlumnApiService } from './alumn-api.service';
import { CreateAlumnDto } from 'src/domain/alumn/dto/create-alumn.dto';
import { Alumn } from 'src/domain/alumn/alumn.entity';

@Controller('alumnes')
export class AlumnApiController {
    constructor(private readonly alumnApiService: AlumnApiService) {}

    @Post()
    async create(@Body() dto: CreateAlumnDto): Promise<Alumn> {
        return this.alumnApiService.create(dto);
    }

    @Get()
    async findAll(): Promise<Alumn[]> {
        return this.alumnApiService.findAll();
    }
}
