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
        dias: {
            laborales: ['Lunes','Martes', 'Miércoles', 'Jueves', 'Viernes'],
            noLaborales: ['Sábado', 'Domingo']
        },
        trabajadores: [
            {
                nombre: "Juan josé",
                edad: 24,
                especialidad: "Front-End"
            },
            {
                nombre: "José Antonio",
                edad: 35,
                especialidad: "Back-End"
            }
        ]
            
    }
});
// Tras varias pruebas veras que la diferencia entre estás 2 directivas es que v-show utiliza la propiedad display none
// mientas que la directiva v-if elimina el elemento del nodo