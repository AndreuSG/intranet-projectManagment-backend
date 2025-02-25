//! TODO: Refactor
import { Module } from '@nestjs/common';
import { AttachmentModule } from 'src/domain/attachment/attachment.module';


@Module({
    imports: [AttachmentModule],
    controllers: [],
    providers: [],
})
export class AttachmentApiModule {}