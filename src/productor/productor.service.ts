import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProductorDto } from './dto/create-productor.dto';
import { UpdateProductorDto } from './dto/update-productor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntityProductor } from './entities/productor.entity';

@Injectable()
export class ProductorService {
  constructor(private prisma: PrismaService) {}
  async create(createProductorDto: CreateProductorDto) {
    const newP = new EntityProductor();
    newP._nombre = createProductorDto.nombre;
    newP._apellido = createProductorDto.apellido;
    newP._cedula = createProductorDto.cedula;
    newP._telefono = createProductorDto.telefono;
    newP._ingreso = createProductorDto.fechaIngreso;
    newP._estado = createProductorDto.estado;

    const newProductor = await this.prisma.productor.create({
      data: {
        nombre: newP._nombre,
        apellido: newP._apellido,
        numeroCedula: newP._cedula,
        numeroTelefono: newP._telefono,
        fechaIngresoPrograma: newP._ingreso,
        estado: newP._estado,
      },
    });

    return newProductor;
  }

  findAll() {
    return this.prisma.productor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} productor`;
  }

  async update(id: number, updateProductorDto: UpdateProductorDto) {
    return await this.prisma.productor.update({
      where: {
        id: typeof id === 'number' ? id : Number.parseInt(id),
      },
      data: {
        ...updateProductorDto,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} productor`;
  }
}
