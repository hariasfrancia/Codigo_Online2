// Una clase puede implementar una interface
class Producto {
    constructor(codigo, nombre) {
        this._codigo = codigo;
        this.nombre = nombre;
        this.ingredientes = [];
        this.ingrediente_secreto = "Aceite de Ajonjoli";
    }
    // getters - obtenedores
    get codigo() {
        return this._codigo;
    }
    // setters - Esblecedores
    modificarSecreto(nuevoIngrediente) {
        this.ingrediente_secreto = nuevoIngrediente;
    }
    mostartInfo() {
    }
}
let Chifa = new Producto(123, "Combinado 1");
// Chifa.nombre = "Chifa TipaKay"
// No podemos tocarla directmente
// Chifa.ingredient_secreto = "Salsa de Soya"
console.log(Chifa.codigo);
