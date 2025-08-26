export class Material {
    constructor(id, titulo, autor, disponible = true) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
    }
    get disponibilidad() {
        return this.disponible;
    }
    set disponibilidad(valor) {
        this.disponible = valor;
    }
}
//# sourceMappingURL=Material.js.map