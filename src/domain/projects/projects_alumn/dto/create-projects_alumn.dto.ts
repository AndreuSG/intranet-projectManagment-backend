import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateProjectAlumnDto {
    @IsNotEmpty()
    @IsString()
    titol: string;

    @IsNotEmpty()
    @IsString()
    estudi: string;

    @IsNotEmpty()
    creatPer: number;

    @IsNotEmpty()
    @IsArray()
    alumnesIds: number[];
}
