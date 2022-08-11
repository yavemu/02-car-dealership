import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  get() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const car = this.CarsService.findById(Number(id));
    return car;
  }
}
