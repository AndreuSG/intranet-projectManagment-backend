import { IsString, IsOptional } from 'class-validator';

export class CreateRubricCourseDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsString()
    imageUrl: string;
}
