var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    // Un decorador se uso para, modificar algo, agregar algo o inspeccionar algo
    return function (target) {
        target.prototype.saludar = function () {
            console.log("Buen d\u00EDa voy hacer compras con mi mascarilla " + texto);
        };
    };
}
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function (texto) {
        console.log("Hola que tal, como van yo soy " + this.nombre + " " + texto);
    };
    Persona = __decorate([
        decorador(" y me llevo un alcohol en spray")
    ], Persona);
    return Persona;
}());
var Jhonny = new Persona("Jhonnny");
Jhonny.saludar("y quiero salir");
