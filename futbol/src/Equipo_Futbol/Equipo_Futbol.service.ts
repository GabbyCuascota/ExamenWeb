import {Injectable} from "@nestjs/common";

@Injectable()
export class Equipo_FutbolService {
    equipos_futbol: Equipos_Futbol[] = [];

    crearEquipos(equipos_futbol: Equipos_Futbol): Equipos_Futbol[] {
        this.equipos_futbol.push(equipos_futbol);
        return this.equipos_futbol;
    }

    mostrarEquipos(): Equipos_Futbol[] {
        return this.equipos_futbol;
    }

    obtenerUno(id) {
        return this.equipos_futbol[id - 1];
    }

    editarUno(id, nombre, liga, fechaCreacion, numeroCopasInternacionales, campeonActual) {
        let arreglo = this.obtenerUno(id);
        arreglo.nombre = nombre;
        arreglo.liga = liga;
        arreglo.fechaCreacion = fechaCreacion;
        arreglo.numeroCopasInternacionales = numeroCopasInternacionales;
        arreglo.campeonActual = campeonActual;
        return arreglo;
    };
}

export class Equipos_Futbol {
    constructor(
        public equipoFutbolId: number,
        public nombre: string,
        public liga: string,
        public fechaCreacion: Date,
        public numeroCopasInternacionales: number,
        public campeonActual: boolean,
    ) {

    }

}

