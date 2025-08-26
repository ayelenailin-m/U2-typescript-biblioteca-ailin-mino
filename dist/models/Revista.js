import { Material } from "./Material.js";
export class Revista extends Material {
    constructor(id, titulo, autor, edicion) {
        super(id, titulo, autor);
        this.edicion = edicion;
    }
    mostrarInfo() {
        console.log(`Revista: ${this.titulo} - ${this.autor} (Edición Nº ${this.edicion})`);
    }
}
//# sourceMappingURL=Revista.js.map