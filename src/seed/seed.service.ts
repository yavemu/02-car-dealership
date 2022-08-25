import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

import { CARS_SEED } from './data/car.seed';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDb() {
    this.carsService.populateSeeds(CARS_SEED);
    this.brandsService.populateSeeds(BRANDS_SEED);
    return `Seeds executed succesful`;
  }
}
