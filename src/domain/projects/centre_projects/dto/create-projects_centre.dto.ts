import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProjectCentreDto {
    @IsNotEmpty()
    @IsString()
    titol: string;

    @IsNotEmpty()
    @IsString()
    estudi: string;

    @IsNotEmpty()
    @IsNumber()
    creatPer: number;
}
