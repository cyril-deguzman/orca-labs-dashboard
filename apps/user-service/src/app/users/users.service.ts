import { CreateUserDto, UpdateUserDto } from '@ex03/dto-lib';
import { PrismaService } from '@ex03/prisma-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll() {
    const allUsers = await this.prismaService.user.findMany();

    return allUsers;
  }

  async findOne(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = updateUserDto;

    return `This action updates a #${id} user ${user}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
