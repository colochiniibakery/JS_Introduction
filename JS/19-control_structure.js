//this section defines  the control structures

const puntaje=1000;


if(puntaje !== 1000){

    console.log('el puntaje no es igual');
}
else {
    console.log('el puntaje es igual');
}

//more comparators
const _efectivo=1000,_carrito=100;

//function

    if(_efectivo>_carrito){
        console.log('el ususario puede pagar');
    }
        else{
            console.log('No se puede pagar');
        }


//function with else if 

const rol ='Editor';

        if(rol ==='administrador'){

            console.log('Acceso a todo el sistema');
        }
        else if(rol==='Editor'){
            console.log('puedes editar algunas condiciones');
        }
        else{

            console.log('No tiene acceso  al sistema');
        }
    

