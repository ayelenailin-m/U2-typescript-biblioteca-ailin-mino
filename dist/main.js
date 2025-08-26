import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";
// crear materiales
const libro1 = new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 471, "Realismo mágico");
const libro2 = new Libro(2, "El Principito", "Antoine de Saint-Exupéry", 96);
const revista1 = new Revista(3, "Lo que la vieja se llevó", "Varios Autores", 202);
const revista2 = new Revista(4, "Mil maneras de procastinar", "Ayelen Miño", 150);
// crear usuario
const usuario1 = new Usuario(1, "Ailín Miño");
// prestar materiales
usuario1.prestar(libro1);
usuario1.prestar(revista1);
// mostrar información
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();
// demostración de polimorfismo
console.log("\n--- Polimorfismo ---");
const materiales = [libro1, libro2, revista1, revista2];
materiales.forEach(m => m.mostrarInfo());
//# sourceMappingURL=main.js.map