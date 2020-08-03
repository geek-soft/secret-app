import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAgenda(): string {
    return 'Introduction to Dockerfile, building container image, running application in container and sharing container image';
  }
}
