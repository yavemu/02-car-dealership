import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      year: 2005,
    },
    {
      id: uuid(),
      brand: 'Audi',
      year: 2000,
    },
    {
      id: uuid(),
      brand: 'Bmw',
      year: 2010,
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const oldCar = this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === oldCar.id) {
        return {
          ...oldCar,
          ...updateCarDto,
          id,
        };
      }
      return car;
    });

    return this.findById(id);
  }

  delete(id: string) {
    this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id !== id) {
        return car;
      }
    });
  }
}
