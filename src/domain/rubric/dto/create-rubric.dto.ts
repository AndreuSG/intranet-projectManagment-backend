// src/domain/rubrics/dto/create-rubric.dto.ts
import { IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateRubricDto {
    @IsInt()
    rubriquesGrupId: number;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    maxScore?: number = 4;
}
