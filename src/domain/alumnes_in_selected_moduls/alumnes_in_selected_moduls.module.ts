import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnesInSelectedModulsService } from './alumnes-in-selected-moduls.service';
import { AlumnesInSelectedModuls } from './entity/alumnes-selected-moduls.entity';
import { AlumnModule } from '../alumn/alumn.module';

@Module({
    imports: [TypeOrmModule.forFeature([AlumnesInSelectedModuls]), AlumnModule],
    providers: [AlumnesInSelectedModulsService],
    exports: [AlumnesInSelectedModulsService],
})
export class AlumnesInSelectedModulsModule {}
