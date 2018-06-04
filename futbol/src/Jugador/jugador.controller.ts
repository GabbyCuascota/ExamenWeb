import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {JUGADOR_SCHEMA} from "./jugador.schema";
import {JugadorServices} from "./jugador.services";
import {JugadorPipe} from './Jugador.pipe';
import {PeticionErroneaException} from "../excepciones/peticionErronea.exception";
import {error} from "util";
import {PeticionErroneaException1} from "../excepciones/peticionErronea.exception1";

@Controller('Jugador')
export class JugadorController {

    constructor(private _jugadorervices: JugadorServices) {
    }

    @Get("listarTodos") mostrarJugador(
        @Res() response) {
        const jugador = this._jugadorervices.mostrarJugador();
        return response.send(jugador);
    }

    @UsePipes(new JugadorPipe(JUGADOR_SCHEMA))
    @Post(':id')
    id(
        @Body(new JugadorPipe(JUGADOR_SCHEMA))
            nuevoJugador) {
        const jugadorNuevo = this._jugadorervices.crearJugador(nuevoJugador);
        if (jugadorNuevo) {
            return nuevoJugador;
        } else {
            throw new PeticionErroneaException(
                'Petición Inválida, los datos ingresados no son suficientes',
                error,
                10
            )
        }
    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const jug = this._jugadorervices.obtenerUno(id.id);
        if (jug) {
            return response.send(jug);
        }
        else {
            throw  new PeticionErroneaException1(
                'Id No encontrado',
                error,
                10
            )
        }
    }


    @Put(':id')
    editarUno(
        @Param() id,
        @Body() updateJugador,
        @Req() request,
        @Res() response) {
        const update = this._jugadorervices.editarUno(id.id, updateJugador.numeroCamiseta, updateJugador.nombreCamiseta, updateJugador.nombreCompletoJugador,
            updateJugador.poderEspecialDos, updateJugador.fechaIngresoEquipo, updateJugador.goles, updateJugador.equipoFutbolId);
        if (update) {
            return response.send(update);
        } else {
            throw  new PeticionErroneaException1(
                'Id No encontrado',
                error,
                10
            )
        }


    }

}