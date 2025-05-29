import { IsString, IsOptional, IsDateString, IsArray } from 'class-validator';

export class CreateCalendarEventDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsDateString()
    start_time: string;

    @IsOptional()
    @IsDateString()
    end_time?: string;

    @IsOptional()
    @IsString()
    color?: string;
}
