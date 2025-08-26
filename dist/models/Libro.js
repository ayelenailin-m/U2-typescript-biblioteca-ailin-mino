import { Material } from "./Material.js";
export class Libro extends Material {
    constructor(id, titulo, autor, paginas, genero) {
        super(id, titulo, autor);
        this.paginas = paginas;
        this.genero = genero;
    }
    mostrarInfo() {
        var _a;
        console.log(`Libro: ${this.titulo} - ${this.autor} (${this.paginas} páginas, género: ${(_a = this.genero) !== null && _a !== void 0 ? _a : "N/A"})`);
    }
}
//# sourceMappingURL=Libro.js.map