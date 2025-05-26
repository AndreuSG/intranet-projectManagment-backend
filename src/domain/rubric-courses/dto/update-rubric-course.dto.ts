import { IsString, IsOptional } from 'class-validator';

export class UpdateRubricCourseDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    imageUrl?: string;
}
