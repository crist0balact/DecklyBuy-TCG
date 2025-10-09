// ===============================
// NAVEGACIÓN DINÁMICA ENTRE CATEGORÍAS (categories.html)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const botones = {
    "btn-pokemon": "seccion-pokemon",
    "btn-magic": "seccion-magic",
    "btn-yugioh": "seccion-yugioh",
    "btn-mitos": "seccion-mitos"
  };

  const vistaInicial = document.querySelector(".bloque-promos");
  const tituloPrincipal = document.querySelector(".programada");
  const secciones = document.querySelectorAll(".categoria-seccion");

  Object.entries(botones).forEach(([btnId, seccionId]) => {
    const boton = document.getElementById(btnId);
    const seccion = document.getElementById(seccionId);

    if (boton && seccion) {
      boton.addEventListener("click", () => {
        if (vistaInicial) vistaInicial.style.display = "none";
        if (tituloPrincipal) tituloPrincipal.style.display = "none";
        secciones.forEach(sec => sec.style.display = "none");
        seccion.style.display = "block";

        // Mostrar todas las cartas
        const cartas = seccion.querySelectorAll('.bloque-carta');
        cartas.forEach(carta => carta.style.display = 'flex');
      });
    }
  });

  const volverBtns = document.querySelectorAll(".btn-volver");

  volverBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      secciones.forEach(sec => sec.style.display = "none");
      if (vistaInicial) vistaInicial.style.display = "flex";
      if (tituloPrincipal) tituloPrincipal.style.display = "flex";
    });
  });
});

// ===============================
// TEMPORIZADOR DE OFERTAS (offers.html)
// ===============================
const tiempos = document.querySelectorAll('.tiempo-oferta');

tiempos.forEach(tiempo => {
  const texto = tiempo.textContent;
  const match = texto.match(/(\d+)h\s+(\d+)m\s+(\d+)s/i);

  if (match) {
    let [horas, minutos, segundos] = match.slice(1).map(Number);

    const actualizar = () => {
      if (horas === 0 && minutos === 0 && segundos === 0) {
        tiempo.textContent = '⌛ Finalizada';
        return;
      }

      if (segundos === 0) {
        if (minutos === 0) {
          if (horas > 0) {
            horas--;
            minutos = 59;
            segundos = 59;
          }
        } else {
          minutos--;
          segundos = 59;
        }
      } else {
        segundos--;
      }

      const h = String(horas).padStart(2, '0');
      const m = String(minutos).padStart(2, '0');
      const s = String(segundos).padStart(2, '0');

      tiempo.textContent = `⌛ ${h}h ${m}m ${s}s`;
    };

    actualizar();
    setInterval(actualizar, 1000);
  }
});

// ===============================
// VALIDACIÓN DE FORMULARIO (contact.html)
// ===============================
const enviarBtn = document.querySelector('.btn-enviar');
const mensaje = document.getElementById('mensaje-formulario');

if (enviarBtn && mensaje) {
  enviarBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.formulario-contacto input');
    let incompleto = false;
    let emailValido = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        incompleto = true;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#000';
      }
    });

    const emailInput = inputs[1];
    const email = emailInput.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.(com|cl|net|org|edu|gov|info|biz|co)$/i;

    if (!regexEmail.test(email)) {
      emailValido = false;
      emailInput.style.borderColor = 'red';
    }

    mensaje.style.display = 'block';

    if (incompleto) {
      mensaje.textContent = 'Por favor completa todos los campos antes de enviar.';
      mensaje.className = 'mensaje-formulario mensaje-error';
    } else if (!emailValido) {
      mensaje.textContent = 'Ingresa un correo válido con dominio reconocido (.com, .cl, etc).';
      mensaje.className = 'mensaje-formulario mensaje-error';
    } else {
      mensaje.textContent = '¡Formulario enviado correctamente!';
      mensaje.className = 'mensaje-formulario mensaje-exito';
    }
  });
}

// ===============================
// VALIDACIÓN DE LOGIN (login.html)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".btn-enviar");
  const mensajeLogin = document.getElementById("mensaje-login");

  if (loginBtn && mensajeLogin) {
    loginBtn.addEventListener("click", function () {
      const emailInput = document.querySelector('input[type="email"]');
      const passwordInput = document.querySelector('input[type="password"]');
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const regexEmail = /^[^\s@]+@[^\s@]+\.(com|cl|net|org|edu|gov|info|biz|co)$/i;

      emailInput.style.borderColor = '#000';
      passwordInput.style.borderColor = '#000';
      mensajeLogin.style.display = 'block';

      if (email === '' || password === '') {
        mensajeLogin.textContent = 'Por favor completa todos los campos.';
        mensajeLogin.className = 'mensaje-formulario mensaje-error';
        if (email === '') emailInput.style.borderColor = 'red';
        if (password === '') passwordInput.style.borderColor = 'red';
      } else if (!regexEmail.test(email)) {
        mensajeLogin.textContent = 'Ingresa un correo válido con dominio reconocido (.com, .cl, etc).';
        mensajeLogin.className = 'mensaje-formulario mensaje-error';
        emailInput.style.borderColor = 'red';
      } else {
        mensajeLogin.textContent = 'La cuenta no ha sido creada aún.';
        mensajeLogin.className = 'mensaje-formulario mensaje-error';
      }
    });
  }

  // ===============================
  // BOTÓN REGRESAR (login.html)
  // ===============================
  const regresarBtn = document.querySelector(".btn-regresar");

  if (regresarBtn) {
    regresarBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  // ===============================
  // BOTÓN INGRESAR GLOBAL (todas las páginas)
  // ===============================
  const loginButton = document.getElementById("login-button");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }
});