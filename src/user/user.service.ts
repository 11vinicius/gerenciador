import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    // return this.prisma.user.create({ createUserDto })
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDtoo) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
