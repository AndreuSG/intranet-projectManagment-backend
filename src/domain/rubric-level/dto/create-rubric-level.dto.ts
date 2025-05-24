import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRubricLevelDto {
  @IsInt()
  criteriId: number;

  @IsString()
  @MaxLength(100)
  nom: string;

  @IsInt()
  valor: number;

  @IsOptional()
  @IsString()
  descripcio?: string;
}
