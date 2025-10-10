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
    // Selección precisa de campos
    const nombreInput = document.querySelector('input[placeholder="Ej: Sebastián González"]');
    const emailInput = document.querySelector('input[placeholder="Ej: ejemplo@correo.com"]');
    const cartaInput = document.querySelector('input[placeholder="Nombre de la carta que buscas"]');

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const carta = cartaInput.value.trim();

    let errores = [];

    // Validación campo nombre
    if (nombre === '') {
      errores.push('El campo "Nombre completo" es obligatorio.');
      nombreInput.style.borderColor = 'red';
    } else {
      nombreInput.style.borderColor = '#000';
    }

    // Validación campo correo
    emailInput.style.borderColor = '#000';
    if (email === '') {
      errores.push('El campo "Correo electrónico" es obligatorio.');
      emailInput.style.borderColor = 'red';
    } else if (!email.includes('@')) {
      errores.push('El correo debe contener el símbolo "@".');
      emailInput.style.borderColor = 'red';
    } else {
      const [local, domain] = email.split('@');
      if (!local || local.trim() === '') {
        errores.push('Falta el nombre de la dirección antes del "@".');
        emailInput.style.borderColor = 'red';
      }

      if (!domain || domain.trim() === '') {
        errores.push('Falta el dominio después del "@".');
        emailInput.style.borderColor = 'red';
      } else {
        const domainParts = domain.split('.');
        const nombreDominio = domainParts[0];
        const extension = domainParts[1];

        if (!nombreDominio || nombreDominio.trim() === '') {
          errores.push('Falta el nombre del dominio antes del punto (ej: "gmail" en "@gmail.com").');
          emailInput.style.borderColor = 'red';
        }

        if (!extension || !/^(com|cl|net|org|edu|gov|info|biz|co)$/i.test(extension)) {
          errores.push('El dominio debe terminar en una extensión válida como .com, .cl, .net, etc.');
          emailInput.style.borderColor = 'red';
        }
      }
    }

    // Validación campo carta
    if (carta === '') {
      errores.push('El campo "Carta" es obligatorio.');
      cartaInput.style.borderColor = 'red';
    } else {
      cartaInput.style.borderColor = '#000';
    }

    // Mostrar mensajes
    mensaje.style.display = 'block';
    if (errores.length > 0) {
      mensaje.innerHTML = errores.join('<br>');
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