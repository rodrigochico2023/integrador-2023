
function sel(tipoUsuarios) {
  document.getElementById("tipoUsuario").value=tipoUsuarios
  calcTotal();
}





  




// Función para habilitar campos
function habilitarCampos() {

  // establece el valor de los campos de entradas en cadenas vacias. 
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cant").value = "";

  document.getElementById("tipoUsuario").value = "particular"; // establece el valor del campo "tipoUsuario" en "particular"

  // habilita la edicion de los campos de entrada
  document.getElementById("nombre").readOnly = false;
  document.getElementById("apellido").readOnly = false;
  document.getElementById("email").readOnly = false;
  document.getElementById("cant").readOnly = false;

  document.getElementById("tipoUsuario").disabled = false; // habilita el campo "tipoUsuario" para que el usuario pueda seleccionar el tipo de usuario

    // Oculta los elementos con id "confirmacion-datos" y "botones-confirmar-limpiar".
  document.getElementById("confirmacion-datos").style.display = "none";
  document.getElementById("botones-confirmar-limpiar").style.display = "none";

    // Cambia el texto del botón con id "boton-verificar" a "Verificar datos".
  document.getElementById("boton-verificar").textContent = "Verificar datos";

  // Establece el contenido del elemento con id "total-a-pagar" en "0.00".
  document.getElementById("total-a-pagar").textContent = "0.00";
}


// En esta función, se borran los valores de ciertos campos de entrada y se habilitan para que el usuario pueda ingresar datos.
function verificarDatos() {

// Obtiene los valores de los campos de entrada.
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var cantidad = document.getElementById("cant").value;
  var tipoUsuario = document.getElementById("tipoUsuario").value;

// Muestra los valores ingresados en elementos de texto en la página.
  document.getElementById("nombre-ingresado").textContent = nombre;
  document.getElementById("apellido-ingresado").textContent = apellido;
  document.getElementById("email-ingresado").textContent = email;
  document.getElementById("cant-ingresada").textContent = cantidad;
  document.getElementById("tipoUsuario-ingresado").textContent = tipoUsuario;


// Calcula el total basado en la cantidad, el tipo de usuario y muestra el resultado.
  calcTotal();

// Muestra el elemento con id "confirmacion-datos" y cambia el texto del botón "boton-verificar".
  document.getElementById("confirmacion-datos").style.display = "block";
  document.getElementById("boton-verificar").textContent = "Datos Verificados";

// Muestra los botones de confirmación y limpieza.
  document.getElementById("botones-confirmar-limpiar").style.display = "block";


// Obtiene el valor del total y lo muestra en otro elemento de texto.
  var total = document.getElementById("total-a-pagar").textContent;
  document.getElementById("total-ingresado").textContent = total;
}


//Esta función obtiene los valores ingresados por el usuario en los campos de entrada, los muestra en la página, calcula el total basado en ciertas reglas y realiza cambios visuales en la página
function confirmarCompra() {
  // Agregar aquí la lógica para procesar la compra (por ejemplo, enviar datos al servidor)
  alert("Compra confirmada. Redirigiendo a la página de confirmación...");
  // Redirigir al usuario a la página de confirmación
 // window.location.href = "pagina_de_confirmacion.html"; // Reemplaza con la URL de la página de confirmación que desees
}
//La función confirmarCompra muestra una alerta al usuario y, en la línea comentada, redirige al usuario a una página de confirmación. Debes proporcionar la URL de la página de confirmación en lugar del comentario.




function calcTotal() {
// Obtiene la cantidad ingresada como un número decimal o establece 0 si no es válido.
  var cantidad = parseFloat(document.getElementById("cant").value) || 0;
  var valorUnidad = 1000;
  var tipoUsuario = document.getElementById("tipoUsuario").value;

  var descuento = 0;
  if (tipoUsuario === "particular") {
    descuento = 0.2;
  } else if (tipoUsuario === "estudiante") {
    descuento = 0.3;
  } else if (tipoUsuario === "orador") {
    descuento = 0.5;
  }

  var total = cantidad * valorUnidad * (1 - descuento);

// Muestra el total con dos decimales.
  document.getElementById("total-a-pagar").textContent = total.toFixed(2);
}

//En esta función, se calcula el total a pagar basado en la cantidad ingresada, el tipo de usuario y un valor de unidad fijo. El descuento se aplica según el tipo de usuario. El resultado se muestra con dos decimales en la página.