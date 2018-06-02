import {Injectable} from "@nestjs/common";

@Injectable()
export class Equipo_FutbolService {
    equipos_futbol: Equipos_Futbol[] = [];

    crearSO(equipos_futbol: Equipos_Futbol): Equipos_Futbol {
        this.equipos_futbol.push(equipos_futbol);
        return equipos_futbol;
    }

    mostrarSO(): Equipos_Futbol[] {
        return this.equipos_futbol;
    }
}
export interface Equipos_Futbol {
    nombre: string,
    versionApi: number,
    fechaLanzamiento: Date,
    pesoEnGigas: number,
    instalado: boolean,
}