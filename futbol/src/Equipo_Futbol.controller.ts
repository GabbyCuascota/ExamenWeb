import {Body, Controller, Get, HttpCode, Post, Res} from "@nestjs/common";
import {Equipo_Futbol_schema} from "./Equipo_Futbol/Equipo_Futbol.schema";
import {Equipo_FutbolService} from "./Equipo_Futbol.service";
import {Equipo_FutbolPipe} from "./PipeEquipoFutbol/Equipo_Futbol.pipe"

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
    mostrarSO(
        @Res() response
    ) {
        const equipos_futbol = this._equipo_futbolservice.mostrarSO();
        return response.send(equipos_futbol);
    }

    @Post('crearSO')
    // @ReflectMetadata('permisos', ['privado'])
    crearSO(
        @Body(new Equipo_FutbolPipe(Equipo_Futbol_schema))
            nuevoSO
    ) {

        const SOCreado = this._equipo_futbolservice.crearSO(nuevoSO);
        return nuevoSO;
    }
}