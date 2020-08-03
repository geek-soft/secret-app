import { Test, TestingModule } from '@nestjs/testing';
import { NestExpressApplication } from "@nestjs/platform-express";
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { join } from "path";

describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(response => {
        expect(response.text).toContain('Welcome to Docker hands-on session!')
        expect(response.text).toContain('Introduction to Dockerfile, building container image, running application in container and sharing container image')
      });
  });
});
