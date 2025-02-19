import { Module } from '@nestjs/common';
import { AlumnModule } from 'src/domain/alumn/alumn.module';
import { AlumnApiService } from './alumn-api.service';
import { AlumnApiController } from './alumne-api.controller';

@Module({
    imports: [AlumnModule],
    controllers: [AlumnApiController],
    providers: [AlumnApiService],
})
export class AlumnApiModule {}