import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      year: 2005,
    },
    {
      id: 2,
      brand: 'Audi',
      year: 2000,
    },
    {
      id: 3,
      brand: 'Bmw',
      year: 2010,
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }
}
