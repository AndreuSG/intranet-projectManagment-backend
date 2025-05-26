// src/domain/rubric-criterion/dto/create-rubric-criterion.dto.ts
import { IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateRubricCriterionDto {
    @IsString() @MaxLength(100)
    nom: string;

    @IsOptional() @IsString()
    descripcio?: string;

    @IsNumber() @Min(0)
    pes: number;
}
