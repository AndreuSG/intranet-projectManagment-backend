import { IsString, IsJSON } from 'class-validator';

export class UpdateConfigDto {
   @IsString()
   code: string;

   @IsString()
   value: string;
}