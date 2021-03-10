interface iProducto {
    codigo: number
    nombre: string
    ingredientes: Array<string>

    mostartInfo():void
}
// Una clase puede implementar una interface
class Producto implements iProducto {
    public _codigo: number
    public nombre: string
    public ingredientes: Array<string>
    // Cuando definimos una ropiedad con "Private", solo es accesible desde la misma clase
    private ingrediente_secreto:string

    constructor(codigo:number, nombre: string){
        this._codigo = codigo
        this.nombre = nombre
        this.ingredientes = []
        this.ingrediente_secreto = "Aceite de Ajonjoli"
    }
// ********************************************************************
// getters - obtenedores
    get codigo(){
        return this._codigo
    }
// setters - Esblecedores
    set codigo(nuevoCodigo:number){
        this._codigo = nuevoCodigo
    }

    modificarSecreto(nuevoIngrediente:string){
        this.ingrediente_secreto = nuevoIngrediente
    }
// ********************************************************************
    mostartInfo(){
        
    }
}

let Chifa:Producto = new Producto(123, "Combinado 1")

// Chifa.nombre = "Chifa TipaKay"
// No podemos tocarla directmente
// Chifa.ingredient_secreto = "Salsa de Soya"
console.log(Chifa.codigo)

