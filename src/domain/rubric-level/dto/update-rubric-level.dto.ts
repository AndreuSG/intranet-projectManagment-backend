import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateRubricLevelDto {
  @IsOptional()
  @IsInt()
  criteriId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  nom?: string;

  @IsOptional()
  @IsInt()
  valor?: number;

  @IsOptional()
  @IsString()
  descripcio?: string;
}
