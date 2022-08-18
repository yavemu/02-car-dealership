import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  get() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseUUIDPipe) id: string) {
    const car = this.carsService.findById(id);
    return car;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return { id, body };
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return id;
  }
}
