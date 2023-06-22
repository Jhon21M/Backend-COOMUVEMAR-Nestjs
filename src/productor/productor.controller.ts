import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductorService } from './productor.service';
import { CreateProductorDto } from './dto/create-productor.dto';
import { UpdateProductorDto } from './dto/update-productor.dto';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('productores')
export class ProductorController {
  constructor(private readonly productorService: ProductorService) {}

  @Post()
  create(@Body() createProductorDto: CreateProductorDto) {
    return this.productorService.create(createProductorDto);
  }

  @Get()
  findAll() {
    return this.productorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductorDto: UpdateProductorDto,
  ) {
    return this.productorService.update(id, updateProductorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productorService.remove(id);
  }
}
