//POO

const producto={

    nombre:'tablet',
    precio: 500,
}
//other way
//object constructor

function Producto(nombre,precio,mando){

    this.nombre=nombre;
    this.precio=precio;
    this.mando=mando;
}

const producto2 =new Producto('monitor curvo de 32"',1000);
const producto3=new Producto('consola PS5',300,true);

console.log(producto2);
console.log(producto3);















































