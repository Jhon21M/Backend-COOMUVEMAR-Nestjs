import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  Length,
} from 'class-validator';

export class CreateProductorDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 40)
  apellido: string;

  @IsString()
  @IsNotEmpty()
  cedula: string;

  @IsOptional()
  @IsNumber()
  telefono: number;

  @IsOptional()
  @IsDate()
  fechaIngreso: Date;

  @IsNotEmpty()
  @IsNumber()
  estado: number;
}
