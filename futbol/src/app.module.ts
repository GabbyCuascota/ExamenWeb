import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JugadorController} from "./jugador.controller";
import {JugadorServices} from "./jugador.services";
import {Equipo_FutbolController} from "./Equipo_Futbol.controller";
import {Equipo_FutbolService} from "./Equipo_Futbol.service";

@Module({
  imports: [],
  controllers: [AppController,JugadorController,Equipo_FutbolController],
  providers: [AppService,JugadorServices, Equipo_FutbolService],
})
export class AppModule {}
