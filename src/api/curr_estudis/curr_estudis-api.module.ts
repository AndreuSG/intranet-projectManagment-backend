import { Module } from '@nestjs/common';
import { CurrEstudisModule } from 'src/domain/curr_estudis/curr_estudis.module';
import { CurrEstudisApiService } from './curr_estudis-api.service';
import { CurrEstudisApiController } from './curr_estudis-api.controller';

@Module({
    imports: [CurrEstudisModule],
    controllers: [CurrEstudisApiController],
    providers: [CurrEstudisApiService],
})
export class CurrEstudisApiModule {}
