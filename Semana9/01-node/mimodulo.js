const PI = 3.14159

const areaCirculo = (radio) => {
    let area = PI * radio * radio
    return area
}

// MODULO, exportando cosas para importarloas en otro archivo de javascript
exports.areaCirculo = areaCirculo
exports.pi = PI





