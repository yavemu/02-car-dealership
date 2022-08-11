import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Audi', 'Bmw'];

  @Get()
  get() {
    return this.cars;
  }
}
