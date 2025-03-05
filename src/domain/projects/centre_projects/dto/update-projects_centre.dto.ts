import { IsString, IsOptional, IsArray } from 'class-validator';
import { Attachment } from 'src/domain/attachment/attachemt.entity';
import { User } from 'src/domain/user/user.entity';
import { DeepPartial } from 'typeorm';

export class UpdateProjectCentreDto {
    
    @IsOptional()
    @IsString()
    titol: string;

    @IsOptional()
    @IsString()
    estudi: string;

    @IsOptional()
    @IsString()
    descripcio: string;

    @IsOptional()
    @IsArray()
    attachments?: DeepPartial<Attachment>[];
}
