// este es un comentario de linea
/* comentario de bloque
   
Tipos de Datos:
   String: 'Palabras' o "Palabras";
   Number: 12;
   Boolean: True or False
   loweCase: object { nombre: "Dilan", apellido: "solar"}
   Tipos de variables: var, let y const;
   alert: alert("cuadro de dialogo")
   Prompt: prompt("Alerta con prompt")
*/

// var variable = 'lunes';
// switch (variable) {
//     case 'lunes':
//         console.log('No hay clases, es festivo)');
//     case 'martes':
//         console.log('Hay clases a las 6)');
//     case 'miercoles':
//         console.log('Hay clases a las 12 :/)');
//     case 'jueves':
//         console.log('Hay clases a las 6)');        
//     case 'viernes':
//         console.log('Hay clases a las 12 :/)');
//     case 'sabado':
//         console.log('Hay clases a las 9:30 de la mañana)');
//     case 'domingo':
//         console.log('Descanso :D)'); 
//     default:
//         console.log('Error en la matrix');
// }
function sumar() {
    var valor1 = document.getElementById('num1').value;
    var valor2 = document.getElementById('num2').value;
    var total = document.getElementById('resultado');
    total.value = parseInt(valor1) + parseInt(valor2);
}