import { Material } from "./Material.js";

export class Revista extends Material {
  edicion: number;

  constructor(id: number, titulo: string, autor: string, edicion: number) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  mostrarInfo(): void {
    console.log(`Revista: ${this.titulo} - ${this.autor} (Edición Nº ${this.edicion})`);
  }
}
