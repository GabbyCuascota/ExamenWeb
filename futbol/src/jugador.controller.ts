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
    @Get("Aplicacion")mostrarAplicacion(@Res() response){
        const app = this._jugadorervices.mostrar_app();
        return response.send(app);
    }

    @Post('crearApp') crearAPP(@Body(new JugadorPipe(JUGADOR_SCHEMA))
                                   nuevoapp){
        const appNuevo =this._jugadorervices.crear_app(nuevoapp);
        return nuevoapp;
    }

    @Get(':nombre')
    obtenerUno(@Param(JUGADOR_SCHEMA.nombre) nombre, @Req() request,
               @Res() response) {
        return response.send(nombre);
    }

    @Put(':nombre')
    editarUno(@Param(JUGADOR_SCHEMA.nombre) nombre, @Body(new JugadorPipe(JUGADOR_SCHEMA)) updateApp, @Req() request,
              @Res() response) {
        return response.send(updateApp);
    }
}