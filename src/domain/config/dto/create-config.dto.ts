import { IsString, IsJSON } from 'class-validator';

export class CreateConfigDto {
   @IsString()
   code: string;

   @IsString()
   value: string;
}