import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {Equipo_Futbol_schema} from "./Equipo_Futbol.schema";
import {Equipo_FutbolService} from "./Equipo_Futbol.service";
import {error} from "util";
import {PeticionErroneaException} from "../excepciones/peticionErronea.exception";
import {PeticionErroneaException1} from "../excepciones/peticionErronea.exception1";
import {Equipo_futbolPipe} from "./Equipo_Futbol.pipe";

@Controller('Equipo')
export class Equipo_FutbolController {
    constructor(private _equipo_futbolservice: Equipo_FutbolService) {
    }

    @Get('listarTodos')
    mostrarEquipos(
        @Res() response
    ) {
        const equipos_futbol = this._equipo_futbolservice.mostrarEquipos();
        return response.send(equipos_futbol);
    }

    @UsePipes(new Equipo_futbolPipe(Equipo_Futbol_schema))
    @Post(':id')
    id(
        @Body(new Equipo_futbolPipe(Equipo_Futbol_schema))
            nuevoEquipo
    ) {
        const EquipoCreado = this._equipo_futbolservice.crearEquipos(nuevoEquipo);
        if (EquipoCreado) {
            return nuevoEquipo;
        } else {
            throw new PeticionErroneaException(
                'Petición Inválida, los datos ingresados no son suficientes',
                error, 10)
        }
    }

    @Get(':id')
    obtenerUno(
        @Param() id,
        @Req() request,
        @Res() response) {
        const jugador = this._equipo_futbolservice.obtenerUno(id.id);
        if (jugador) {
            return response.send(jugador);
        } else {
            throw  new PeticionErroneaException(
                'Id No encontrado',
                error,
                10
            )
        }

    }

    @Put(':id')
    editarUno(
        @Param() id,
        @Body() UpdateEquipo,
        @Req() request,
        @Res() response) {
        const updateJug = this._equipo_futbolservice.editarUno(id.id, UpdateEquipo.nombre, UpdateEquipo.liga, UpdateEquipo.fechaCreacion, UpdateEquipo.numeroCopasInternacionales, UpdateEquipo.campeonActual);
        if (updateJug) {
            return response.send(updateJug);
        } else {
            throw new PeticionErroneaException1('Id no encontrado', error, 10)
        }

    }
}
