import { v4 as uuid } from 'uuid';

import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Audi',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Bmw',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
];
