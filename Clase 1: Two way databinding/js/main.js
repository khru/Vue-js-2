// Vanilla JS
// realizaremos el ejemplo utilizando una función "autoejecutable o auto invocada"
/* (function() {
    // obtenemos las variables sobre las cuales queremos trabajar
    const h1 = document.querySelector('h1'); // ojo esto te devolverá solo el primer h1 que encuentre
    const input = document.querySelector('input[type="text"]') // OJO solo te devolverá el primer input de tipo texto
    //comporbamos que existen nuestros elementos
    //console.log(h1, input);
    // añadimos un eventListener
    input.addEventListener('keyup', () => h1.innerHTML = input.value || '...');

})();*/

// crearemos una intancia del prototipo de vue (objeto)
new Vue({
  // utilizaremos el elemnto el que es en el cual se especifica el elemento HTML que vamos a utilizar
  el: 'main',
  // el siguiente elemento es el objeto data que es donde almacenaremos la estructura del modelo
  data: {
    mensaje: ''
  }
});
