import { Material } from "./Material.js";
export class Usuario {
    constructor(id, nombre) {
        this.materialesPrestados = [];
        this.id = id;
        this.nombre = nombre;
    }
    prestar(material) {
        if (material.disponibilidad) {
            material.disponibilidad = false;
            this.materialesPrestados.push(material);
            this.ultimaPrestacion = material;
            console.log(`${this.nombre} ha prestado "${material.titulo}"`);
        }
        else {
            console.log(`El material "${material.titulo}" no está disponible`);
        }
    }
    mostrarPrestados() {
        console.log(`Materiales prestados por ${this.nombre}:`);
        this.materialesPrestados.forEach(m => m.mostrarInfo());
    }
    mostrarUltimaPrestacion() {
        console.log(`Última prestación:`);
        this.ultimaPrestacion.mostrarInfo();
    }
}
//# sourceMappingURL=Usuario.js.map