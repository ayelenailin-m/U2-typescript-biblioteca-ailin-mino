import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";
export declare abstract class Material implements IBibliotecaItem {
    readonly id: number;
    titulo: string;
    autor: string;
    private disponible;
    constructor(id: number, titulo: string, autor: string, disponible?: boolean);
    get disponibilidad(): boolean;
    set disponibilidad(valor: boolean);
    abstract mostrarInfo(): void;
}
//# sourceMappingURL=Material.d.ts.map