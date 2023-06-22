import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  const prisma = PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(4000);

    const prisma = app.get(PrismaService);
    await prisma.cleanDB();
  });
  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'osman@gmail.com',
      password: '1234',
    };
    describe('Signin', () => {
      it('should signin', () => {
        return pactum
          .spec()
          .post('http://localhost:4000/auth/signin')
          .withBody(dto)
          .expectStatus(201);
      });
    });
    describe('Signup', () => {
      it('should signup', () => {
        return pactum
          .spec()
          .post('http://localhost:4000/auth/signup')
          .withBody(dto)
          .expectStatus(200);
        }); 
      });
    });
  });

  describe('User', () => {
    describe('Get current user', () => {});
    describe('Edit user', () => {});
  });
  describe('Bookmarks', () => {
    describe('Get bookmarks', () => {});
    describe('Create bookmarks', () => {});
    describe('Get bookmark by id', () => {});
    describe('Edit bookmarks', () => {});
    describe('Delete bookmarks', () => {});
  });
  it.todo('should pass');
});
