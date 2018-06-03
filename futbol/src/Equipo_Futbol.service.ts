import {Injectable} from "@nestjs/common";

@Injectable()
export class Equipo_FutbolService {
    equipos_futbol: Equipos_Futbol[] = [];

    crearEquipos(equipos_futbol: Equipos_Futbol): Equipos_Futbol {
        this.equipos_futbol.push(equipos_futbol);
        return equipos_futbol;
    }

    mostrarEquipos(): Equipos_Futbol[] {
        return this.equipos_futbol;
    }
    actualizar_Equipo_Futbol(EF:Equipos_Futbol): Equipos_Futbol{
        this.equipos_futbol.pop();
        this.equipos_futbol.push(EF);
        return EF;
    }
}
export interface Equipos_Futbol {
    nombre: string,
    liga: number,
    fechaCreacion: Date,
    numeroCopasInternacionales: number,
    campeonActual: boolean,
}