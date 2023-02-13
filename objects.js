var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

// Acceder
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

//Asignar
persona.nombre = "Martin";
persona.edad = 32;

//Crear
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];

//Borrar
delete autos.marcas;

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Hamburguesas", "Papas Fritas"];
};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);