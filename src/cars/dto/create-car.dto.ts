import { IsNumber, IsString, Min } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsNumber()
  @Min(1885)
  readonly year: number;
}
