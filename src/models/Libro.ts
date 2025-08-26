import { Material } from "./Material.js";

export class Libro extends Material {
  paginas: number;
  genero?: string | undefined;

  constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): void {
    console.log(`Libro: ${this.titulo} - ${this.autor} (${this.paginas} páginas, género: ${this.genero ?? "N/A"})`);
  }
}
