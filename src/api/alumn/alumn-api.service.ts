import { Injectable } from '@nestjs/common';
import { AlumnService } from 'src/domain/alumn/alumn.service';

@Injectable()
export class AlumnApiService {
    constructor(private readonly alumnService: AlumnService) {}

}
