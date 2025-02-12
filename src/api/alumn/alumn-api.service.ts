import { Injectable } from '@nestjs/common';
import { AlumnService } from 'src/domain/alumn/alumn.service';
import { CreateAlumnDto } from 'src/domain/alumn/dto/create-alumn.dto';
import { Alumn } from 'src/domain/alumn/alumn.entity';

@Injectable()
export class AlumnApiService {
    constructor(private readonly alumnService: AlumnService) {}

    create(dto: CreateAlumnDto): Promise<Alumn> {
        return this.alumnService.create(dto);
    }

    findAll(): Promise<Alumn[]> {
        return this.alumnService.findAll();
    }
}
