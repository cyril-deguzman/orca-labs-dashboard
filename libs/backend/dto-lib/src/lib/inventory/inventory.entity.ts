import { Inventory as InventoryModel } from '@prisma/client';

export class Inventory implements InventoryModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  quantity: number;
}
