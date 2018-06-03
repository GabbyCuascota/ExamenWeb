import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {JUGADOR_SCHEMA} from "./Jugador/jugador.schema";
import {JugadorServices} from "./jugador.services";
import {JugadorPipe} from './PipeJugador/Jugador.pipe';

@Controller()
export class JugadorController {
    jugador ={
        numeroCamiseta:Number,
        nombreCamiseta:String,
        nombreCompletoJugador:String,
        poderEspecialDos:String,
        fechaIngresoEquipo:Date(),
        goles:Number,
        equipoFutbolId:Number,
    };

    jugadores=[];

    constructor (private _jugadorervices: JugadorServices){
    }
    @Get("Jugador")mostrarJugador(@Res() response){
        const jugador = this._jugadorervices.mostrarJugador();
        return response.send(jugador);
    }

    @Post('crearJugador') crearJugador(@Body(new JugadorPipe(JUGADOR_SCHEMA))
                                   nuevoJugador){
        const jugadorNuevo =this._jugadorervices.crearJugador(nuevoJugador);
        return nuevoJugador;
    }

    @Get(':nombre')
    obtenerUno(@Param(JUGADOR_SCHEMA.nombre) nombre, @Req() request,
               @Res() response) {
        return response.send(nombre);
    }

    @Put(':nombre')
    editarUno(@Param(JUGADOR_SCHEMA.nombre) nombre, @Body(new JugadorPipe(JUGADOR_SCHEMA)) updateJugador, @Req() request,
              @Res() response) {
        return response.send(updateJugador);
    }
}