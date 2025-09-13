//Función botón Categorias Pokémon
document.addEventListener("DOMContentLoaded", function () {
  const btnPokemon = document.getElementById("btn-pokemon");

  if (btnPokemon) {
    btnPokemon.addEventListener("click", function () {
      window.location.href = "categories-pokemon.html";
    });
  }
});

//Función botón Categorias Magic The Gathering
document.addEventListener("DOMContentLoaded", function () {
  const btnMagic = document.getElementById("btn-magic");

  if (btnMagic) {
    btnMagic.addEventListener("click", function () {
      window.location.href = "categories-magic.html";
    });
  }
});

//Función botón Categorias YuGiOh
document.addEventListener("DOMContentLoaded", function () {
  const btnYugioh = document.getElementById("btn-yugioh");

  if (btnYugioh) {
    btnYugioh.addEventListener("click", function () {
      window.location.href = "categories-yugioh.html";
    });
  }
});

//Función botón Categorias Mitos y Leyendas
document.addEventListener("DOMContentLoaded", function () {
  const btnMitos = document.getElementById("btn-mitos");

  if (btnMitos) {
    btnMitos.addEventListener("click", function () {
      window.location.href = "categories-mitos.html";
    });
  }
});


//Filtrado de cartas (index.html)
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

if (searchButton && searchInput) {
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const cartas = document.querySelectorAll('.bloque-carta');

    cartas.forEach(carta => {
      const nombre = carta.querySelector('.nombre-carta')?.textContent.toLowerCase();
      const descripcion = carta.querySelector('.descripcion-carta')?.textContent.toLowerCase();
      const tipo = carta.querySelector('.tipo-tcg')?.textContent.toLowerCase();

      const coincide = nombre?.includes(query) || descripcion?.includes(query) || tipo?.includes(query);
      carta.style.display = coincide ? 'flex' : 'none';
    });
  });
}

//Temporizador de ofertas (offers.html)
const tiempos = document.querySelectorAll('.tiempo-oferta');

tiempos.forEach(tiempo => {
  const texto = tiempo.textContent;
  const match = texto.match(/(\d+)h\s+(\d+)m\s+(\d+)s/i);

  if (match) {
    let horas = parseInt(match[1]);
    let minutos = parseInt(match[2]);
    let segundos = parseInt(match[3]);

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

      // Formato con ceros delante
      const h = String(horas).padStart(2, '0');
      const m = String(minutos).padStart(2, '0');
      const s = String(segundos).padStart(2, '0');

      tiempo.textContent = `⌛ ${h}h ${m}m ${s}s`;
    };

    actualizar(); // actualiza inmediatamente
    setInterval(actualizar, 1000); // actualiza cada segundo
  }
});

//Validación de formulario (contact.html)
const enviarBtn = document.querySelector('.btn-enviar');
const mensaje = document.getElementById('mensaje-formulario');

if (enviarBtn) {
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

    const emailInput = inputs[1]; // segundo input es el email
    const email = emailInput.value.trim();

    // Expresión regular que valida formato y dominio (.com, .cl, etc.)
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

document.addEventListener("DOMContentLoaded", function () {
  // Función para validar login
  const loginBtn = document.querySelector(".btn-enviar");
  const mensajeLogin = document.getElementById("mensaje-login");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const emailInput = document.querySelector('input[type="email"]');
      const passwordInput = document.querySelector('input[type="password"]');
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      const regexEmail = /^[^\s@]+@[^\s@]+\.(com|cl|net|org|edu|gov|info|biz|co)$/i;

      // Reset estilos
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

  // Botón REGRESAR en login.html
  const regresarBtn = document.querySelector(".btn-regresar");

  if (regresarBtn) {
    regresarBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  // Redirección global del botón "Ingresar →" en todas las páginas
  const loginButton = document.getElementById("login-button");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }
});