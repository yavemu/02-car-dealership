// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
