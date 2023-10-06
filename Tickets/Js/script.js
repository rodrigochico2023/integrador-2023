
// Función para habilitar campos
function habilitarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cant").value = "";
  document.getElementById("tipoUsuario").value = "particular";

  document.getElementById("nombre").readOnly = false;
  document.getElementById("apellido").readOnly = false;
  document.getElementById("email").readOnly = false;
  document.getElementById("cant").readOnly = false;
  document.getElementById("tipoUsuario").disabled = false;

  document.getElementById("confirmacion-datos").style.display = "none";
  document.getElementById("botones-confirmar-limpiar").style.display = "none";
  document.getElementById("boton-verificar").textContent = "Verificar datos";
  document.getElementById("total-a-pagar").textContent = "0.00";
}

function verificarDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var cantidad = document.getElementById("cant").value;
  var tipoUsuario = document.getElementById("tipoUsuario").value;

  document.getElementById("nombre-ingresado").textContent = nombre;
  document.getElementById("apellido-ingresado").textContent = apellido;
  document.getElementById("email-ingresado").textContent = email;
  document.getElementById("cant-ingresada").textContent = cantidad;
  document.getElementById("tipoUsuario-ingresado").textContent = tipoUsuario;

  calcTotal();

  document.getElementById("confirmacion-datos").style.display = "block";
  document.getElementById("boton-verificar").textContent = "Datos Verificados";
  document.getElementById("botones-confirmar-limpiar").style.display = "block";

  var total = document.getElementById("total-a-pagar").textContent;
  document.getElementById("total-ingresado").textContent = total;
}

function confirmarCompra() {
  // Agregar aquí la lógica para procesar la compra (por ejemplo, enviar datos al servidor)
  alert("Compra confirmada. Redirigiendo a la página de confirmación...");
  // Redirigir al usuario a la página de confirmación
  window.location.href = "pagina_de_confirmacion.html"; // Reemplaza con la URL de la página de confirmación que desees
}

function calcTotal() {
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
  document.getElementById("total-a-pagar").textContent = total.toFixed(2);
}