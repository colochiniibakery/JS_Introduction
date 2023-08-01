// function sumar(n1,n2){

//     return n1+n2;
// }

// const resultado= sumar(2,3);

// console.log(resultado);

let total =0;

function carrito(precio){
    return total +=precio;
}
function calcularimpuesto(total){
    return 1.15*total;

}
total= carrito(200);
total= carrito(600);

console.log(total);

const totlaapagar =calcularimpuesto(total);
console.log(`el total a pagar es de :${totlaapagar}`);