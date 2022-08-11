import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Audi', 'Bmw'];

  @Get()
  get() {
    return this.cars;
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.cars[id] || 'Car not found';
  }
}
