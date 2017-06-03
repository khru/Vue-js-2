// crearemos una intancia del prototipo de vue (objeto) y lo almacenamos en una variable
// Vue es capaz de saber que ahora el objeto vue está almacenado y nos hará de proxy para poder
// acceder a las variables del model, dentro de la variable
// para coprobar esto es recomendable acceder a la consola de JS y probar a acceder a la variable vm
// y modificar el valor del modelo
const vm = new Vue ({
    // utilizaremos el elemnto el que es en el cual se especifica el elemento HTML que vamos a utilizar
    el: "main",
    // el siguiente elemento es el objeto data que es donde almacenaremos la estructura del modelo
    data: {
        conectado: true,    // prueba con el true y false e inspecciona el HTML para ver que ocurre
        mensajeShow: "Esto es un ejemplo de directiva reactiva, empleando  la directiva v-show, si inspeccionas el elemeno y cambias el valor de la variable conectado verás que es lo que sucede",
        mensajeIf: "Esto es un ejemplo de directiva reactiva, empleando  la directiva v-if, si inspeccionas el elemeno y cambias el valor de la variable conectado verás que es lo que sucede",
        edad: 24,
        nombre: "Pepe juan"
    }
});
// Tras varias pruebas veras que la diferencia entre estás 2 directivas es que v-show utiliza la propiedad display none
// mientas que la directiva v-if elimina el elemento del nodo