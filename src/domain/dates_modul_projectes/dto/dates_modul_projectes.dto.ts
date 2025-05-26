import { IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDatesModulProjectesDto {
   @IsNumber()
   idModul: number;

   @IsNumber()
   idProfe: number;

   @IsString()
   idGrup: string;

   @IsDate()
   @Type(() => Date)
   dataInici: Date;
}

export class UpdateDatesModulProjectesDto {
   @IsNumber()
   idModul?: number;
º
   @IsNumber()
   idProfe?: number;

   @IsString()
   idGrup?: string;

   @IsDate()
   @Type(() => Date)
   dataInici?: Date;
} 