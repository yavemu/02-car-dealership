import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      ...createBrandDto,
      id: uuid(),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.filter((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const oldBrand = this.findOne(id);

    if (!oldBrand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };
      }
      return brand;
    });

    return this.findOne(id);
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id != id);
  }
}
