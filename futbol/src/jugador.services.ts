import {Injectable} from "@nestjs/common";
import {JugadorController} from "./jugador.controller";

@Injectable()
export class JugadorServices{
    jugador : Jugadores [] = [];

    crearJugador(Jug:Jugadores): Jugadores{
        this.jugador.push(Jug);
        return Jug
    }

    mostrarJugador():Jugadores []{
        return this.jugador;
    }
    updateJugador(Jug:Jugadores): Jugadores{
        this.jugador.pop();
        this.jugador.push(Jug);
        return Jug;
    }
}
export interface Jugadores {
    numeroCamiseta:Number,
    nombreCamiseta:String,
    nombreCompletoJugador:String,
    poderEspecialDos:String,
    fechaIngresoEquipo: Date,
    goles:Number,
    equipoFutbolId:Number,
}