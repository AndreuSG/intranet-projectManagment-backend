//! TODO: Refactor
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attachment } from './attachemt.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Attachment])],
    providers: [],
    exports: [],
})
export class AttachmentModule {}
