import { CreateInventoryDto, UpdateInventoryDto } from '@ex03/dto-lib';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() createinventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createinventoryDto);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.inventoryService.findOne(email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateinventoryDto: UpdateInventoryDto
  ) {
    return this.inventoryService.update(+id, updateinventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
