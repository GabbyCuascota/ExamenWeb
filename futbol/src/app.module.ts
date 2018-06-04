import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {JugadorController} from "./Jugador/jugador.controller";
import {JugadorServices} from "./Jugador/jugador.services";
import {Equipo_FutbolController} from "./Equipo_Futbol/Equipo_Futbol.controller";
import {Equipo_FutbolService} from "./Equipo_Futbol/Equipo_Futbol.service";
import {AutorizacionController} from "./autorizacion/autorizacion.controller";

@Module({
    imports: [],
    controllers: [
        AppController,
        JugadorController,
        Equipo_FutbolController,
        AutorizacionController],
    providers: [
        AppService,
        JugadorServices,
        Equipo_FutbolService],
})
export class AppModule {
}
