import { PrismaModule } from '@ex03/prisma-lib';
import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [PrismaModule],
})
export class InventoryModule {}
