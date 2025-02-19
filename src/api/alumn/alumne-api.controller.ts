import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlumnApiService } from './alumn-api.service';
import { CreateAlumnDto } from 'src/domain/alumn/dto/create-alumn.dto';
import { Alumn } from 'src/domain/alumn/alumn.entity';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/alumnes`)
export class AlumnApiController {
    constructor(private readonly alumnApiService: AlumnApiService) {}
}
