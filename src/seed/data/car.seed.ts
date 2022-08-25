import { v4 as uuid } from 'uuid';

import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
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
