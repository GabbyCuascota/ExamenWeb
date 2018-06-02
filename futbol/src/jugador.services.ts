import {Injectable} from "@nestjs/common";

@Injectable()
export class JugadorServices{
    jugador : Jugadores [] = [];

    crear_app(App:Jugadores): Jugadores{
        this.jugador.push(App);
        return App
    }

    mostrar_app():Jugadores []{
        return this.jugador;
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