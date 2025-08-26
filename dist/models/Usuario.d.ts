import type { IUsuario } from "../interfaces/IUsuario.js";
import { Material } from "./Material.js";
export declare class Usuario implements IUsuario {
    id: number;
    nombre: string;
    private materialesPrestados;
    private ultimaPrestacion;
    constructor(id: number, nombre: string);
    prestar(material: Material): void;
    mostrarPrestados(): void;
    mostrarUltimaPrestacion(): void;
}
//# sourceMappingURL=Usuario.d.ts.map