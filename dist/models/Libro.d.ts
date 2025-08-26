import { Material } from "./Material.js";
export declare class Libro extends Material {
    paginas: number;
    genero?: string | undefined;
    constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string);
    mostrarInfo(): void;
}
//# sourceMappingURL=Libro.d.ts.map