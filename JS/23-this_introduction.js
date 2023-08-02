
//the correct way to use this 

    // this is an object
    const reservacion={
        nombre: 'juan',
        edad: 24,
        apellido:'de las casasa',
        total:300,
        pagado: false,
        informacion: function(){

          console.log(`El cliente: ${this.nombre} tiene que pagar por la habitacion ${this.total}`);

        }
    }


 reservacion.informacion();

