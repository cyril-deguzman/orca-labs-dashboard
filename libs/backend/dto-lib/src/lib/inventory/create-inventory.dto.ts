import { OmitType } from '@nestjs/mapped-types';
import { Inventory } from './inventory.entity';

export class CreateInventoryDto extends OmitType(Inventory, [
  'id',
  'createdAt',
]) {}
