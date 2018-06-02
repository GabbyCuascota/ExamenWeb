import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Examen WEB IB Cuascota Gabriela';
  }
}
