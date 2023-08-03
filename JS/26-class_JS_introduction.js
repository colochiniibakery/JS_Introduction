
class Producto {
    constructor(nombre,precio,retorno){
        this.nombre=nombre;
        this.precio=precio;
        this.retorno=retorno;
    }
    formatearproducto(){
        return`El nombre del producto es: ${this.nombre} y el precio es: $${this.precio}`;
    }
    retornodeprecio(){
        return`El nombre del producto es: ${this.nombre} y el precio es: $${this.retorno}`;
    }
}
const producto= new Producto('Monitor curvo 24',700);
const producto1=new Producto('xbox_one',500);
const retorno=new Producto('','',600);
// end of the first class

// ---------------second class--------------------------
class Libro{
    constructor(){
        
    }
}




console.log(producto1.formatearproducto());
console.log(producto.formatearproducto());
console.log(retorno.retornodeprecio());