import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res} from "@nestjs/common";
import {Equipo_Futbol_schema} from "./Equipo_Futbol/Equipo_Futbol.schema";
import {Equipo_FutbolService} from "./Equipo_Futbol.service";
import {Equipo_FutbolPipe} from "./PipeEquipoFutbol/Equipo_Futbol.pipe"
import {JugadorPipe} from "./PipeJugador/Jugador.pipe"

@Controller()
export class Equipo_FutbolController {
    equipo_futbol = {
        nombre: String,
        liga: String,
        fechaCreacion: Date(),
        numeroCopasInternacionales: Number,
        campeonActual: Boolean,
    };
    equipos_futbol = [];

    constructor(private _equipo_futbolservice: Equipo_FutbolService) {
    }

    @HttpCode(202)
    @Get('Equipo_Futbol')
    mostrarEquipos(
        @Res() response
    ) {
        const equipos_futbol = this._equipo_futbolservice.mostrarEquipos();
        return response.send(equipos_futbol);
    }

    @Post('crearEquipos')
    crearEquipos(
        @Body(new Equipo_FutbolPipe(Equipo_Futbol_schema))
            nuevoEquipo
    ) {

        const EquipoCreado = this._equipo_futbolservice.crearEquipos(nuevoEquipo);
        return nuevoEquipo;
    }

    @Get(':nombre')
    obtenerUno(
        @Param(Equipo_Futbol_schema.nombre) nombreJugador,
        @Req() request,
        @Res() response) {
        const jugador = this._equipo_futbolservice.mostrarEquipos();
        return response.send(jugador);

    }

    @Put(':nombre')
    editarUno(
        @Param(Equipo_Futbol_schema.nombre) nombre,
        @Body(new JugadorPipe(Equipo_Futbol_schema)) updateJugador,
        @Req() request,
        @Res() response) {
        const updateJug = this._equipo_futbolservice.actualizar_Equipo_Futbol(updateJugador);
        return updateJugador;
    }
}
