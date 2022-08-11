import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  get() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const car = this.carsService.findById(Number(id));
    return car;
  }
}
