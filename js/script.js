
// CARRUSEL DE IMAGENES (página index)
let imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
let indexImg = 0;

const imgCarrusel = document.getElementById("imagenCarrusel");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

if (imgCarrusel && btnNext && btnPrev) {
    btnNext.addEventListener("click",() => {
    indexImg = (indexImg + 1) % imagenes.length;
    imgCarrusel.src = imagenes[indexImg];
    });

    btnPrev.addEvenListener("click", () => {
    indexImg = (imdexImg - 1 + imagenes.length) % imagenes.length;
    imgCarrusel.src = imagenes[indexImg];
    });


// VALIDACION DEL FORMULARIO DE CONTACTO


const form = document.getElementById("formContacto");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // evita recargar la página

        limpiarErrores();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const tel = document.getElementById("telefono").value.trim();

        let valido = true;

        // validacion del nombre
        if (nombre.length === 0) {
            mostrarError("errNombre", "El nombre es obligatorio.");
            valido = false;
        } else if (nombre.length > 30) {
            mostrarError("errNombre", "Máximo 30 caracteres.");
            valido = false;
        }

        // validacion del email 
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mostrarError("errEmail", "Correo inválido.");
            valido = false;
        }

        // expresion regular solo para telefono 
        const regexTel = /^\d{7,15}$/;
        if (!regexTel.test(tel)) {
            mostrarError("errTel", "Ingrese un teléfono válido (solo números).");
            valido = false;
        }

        // si todo esta correcto, muestro los datos enviados
        if (valido) {
            mostrarResultado(nombre, email, tel);
            form.reset();
        }
    });
}

// funcion para mostrar errores
function mostrarError(id, mensaje) {
     const el = document.getElementById(id);
    if(el) el.textContent = mensaje;
}

// limpia todos los mensajes de error
function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

// muestra los datos enviados debajo del formulario
function mostrarResultado(nombre, email, tel) {
    const div = document.getElementById("resultado");
    (if !div) return;
    div.innerHTML = "";

    const p = document.createElement("p");
    p.textContent = `Datos enviados correctamente: ${nombre} - ${email} - ${tel}`;
    div.appendChild(p);
}
