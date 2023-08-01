//define methods for propierties

//functions

const reproductor= {
    reproducir: function(id){

        console.log(`Reproduciendo cancion numero de id: ${id}`);
    },
    pausar:function(){
        console.log('cancion pausada...');

    },
    creandocancion: function(nombre){
        console.log(`asignando el nombre de: ${nombre}`);

    },
}

reproductor.eliminandocancion =function(id){

    console.log(`eliminando cancion: ${id}`);
}

reproductor.reproducir(3480);
reproductor.pausar();
reproductor.eliminandocancion(20);
reproductor.creandocancion('METALLICA');