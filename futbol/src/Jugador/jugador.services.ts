import {Injectable} from "@nestjs/common";

@Injectable()
export class JugadorServices {
    jugador: Jugadores [] = [];

    crearJugador(Jugador: Jugadores): Jugadores {
        this.jugador.push(Jugador);
        return Jugador
    }

    mostrarJugador(): Jugadores [] {
        return this.jugador;
    }

    obtenerUno(id) {
        return this.jugador[id - 1];
    }

    editarUno(id, numcamiseta, nomcamiseta, nombreCompleto, poderEspecial, fechaIngreso, goles, equipoFutbolId) {
        let arreglo = this.obtenerUno(id);
        arreglo.numeroCamiseta = numcamiseta;
        arreglo.nombreCamiseta = nomcamiseta;
        arreglo.nombreCompletoJugador = nombreCompleto;
        arreglo.poderEspecialDos = poderEspecial;
        arreglo.fechaIngresoEquipo = fechaIngreso;
        arreglo.goles = goles;
        arreglo.equipoFutbolId = equipoFutbolId;
        return arreglo;
    };
}

export class Jugadores {
    constructor(
        public idJugador: number,
        public numeroCamiseta: number,
        public nombreCamiseta: string,
        public nombreCompletoJugador: string,
        public poderEspecialDos: string,
        public fechaIngresoEquipo: Date,
        public goles: number,
        public equipoFutbolId: number) {

    }
}