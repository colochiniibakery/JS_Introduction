//POO

// object literal

// const precio={
//     Nombre: 'tablet',
//     precio: 500,
// }

// object constructor 
function Producto(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
}

Producto.prototype.Formateraproducto=function(){
    return`El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2= new  Producto('MONITOR ASUS',1000);
const producto3= new Producto('PLAYSTATION5',699);

console.log(producto2.Formateraproducto());


// object constructor 2
function Cliente(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}

Cliente.prototype.Formatearcliente=function(){
    return`el cliente es: ${this.nombre} y su apellido es: ${this.apellido}`;
}
const cliente1=new Cliente('Pedro','Arnold');

console.log(cliente1.Formatearcliente());















