import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsNumber()
  @Min(1885)
  readonly year?: number;
}
