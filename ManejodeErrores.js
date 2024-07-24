try {
    //log que muestra un mensaje
    console.log("En el try se agrega el codigo a evaluar");
    //variable no definida la cual generara un error
    noExiste;
    //se detiene aqui la ejecucion del codigo dentro del try 
    //si no hubiera ningun error continuaria la ejecucion del codigo y se mostraria este console.log
    console.log("Segundo Mensaje  en el try ");
} catch (error) {
    //muestra este mensaje despues de detectar el error
    console.log("catch captura cualquier error surgido o lanzado en el try");
    //muestra que tipo de error es
    console.log(error);
} finally {
    //el finally siempre se mostrara CASI NO SE UTILIZA
    console.log("el bloque finally se ejecutara siempre al final de un bloque try catch");
}


//Mensaje de error personalizado
try {
    
    //variable
    let numero = "Y";
    //valida si la variable numero es un numero
    if (isNaN(numero)) {
        // COnfigura un mensaje de error personalizado
        throw new Error("El caracter introducido no es un numero");
    }
    //si, si es un numero realiza la operacion 
    console.log(numero * numero);
    //catch es un error
} catch (error) {
    // muestar el mensaje de error personalizado
    console.log(`se produjo el siguente ${error}`);
}
