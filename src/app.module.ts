import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductorModule } from './productor/productor.module';
import { ProductorService } from './productor/productor.service';
import { ProductorController } from './productor/productor.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    ProductorModule,
  ],
  controllers: [ProductorController, AuthController],
  providers: [ProductorService, AuthService],
})
export class AppModule {}
