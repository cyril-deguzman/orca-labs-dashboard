import { CreateInventoryDto, UpdateInventoryDto } from '@ex03/dto-lib';
import { PrismaService } from '@ex03/prisma-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createInventoryDto: CreateInventoryDto) {
    const inventory = await this.prismaService.inventory.create({
      data: createInventoryDto,
    });

    return inventory;
  }

  async findAll() {
    const allInventory = await this.prismaService.inventory.findMany();

    return allInventory;
  }

  async findOne(name: string) {
    const inventory = await this.prismaService.inventory.findUnique({
      where: {
        name: name,
      },
    });

    return inventory;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    const Inventory = updateInventoryDto;

    return `This action updates a #${id} Inventory ${Inventory}`;
  }

  remove(id: number) {
    return `This action removes a #${id} Inventory`;
  }
}
