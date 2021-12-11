//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", moverLogin);
document.getElementById("btn__registrarse").addEventListener("click", moverRegister);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

var usuarios_password = new Map();
usuarios_password.set("usuario", "12345678");
//FUNCIONES

function validarUsuarioPassword(usuario, password) {
    let password_obtenida = usuarios_password.get(usuario);
    if (password === password_obtenida) {
        return true;
    } else {
        return false;
    }
}

function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function moverLogin() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function moverRegister() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function login() {
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    if (validarUsuarioPassword(user, password)) {
        var url = "IngresoClientes.html";
        window.open(url, '_blank').focus();
    } else {
        alert("Usuario o password incorrecta");
    }
}

function register() {
    var nombre;
    var correo;
    var telefono;
    var pass;
    var repite_pass;
    var form;
    var parrafo;

    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    pass = document.getElementById("pass").value;
    repite_pass = document.getElementById("repite_pass").value;
    form = document.getElementById("form_register");
    //parrafo = document.getElementById("warnings");

    form.addEventListener("submit", e => {
        e.preventDefault();
        let warnings = "";
        let entrar = true;
        //parrafo.innerHTML="";
        let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (nombre.length < 6) {
            warnings += 'El nombre es muy corto\n';
            entrar = false;
        }
        if (!regexEmail.test(correo)) {
            warnings += 'El correo no es valido\n';
            entrar = false;
        }
        if (pass.length < 8) {
            warnings += 'La constrasenia es muy corta\n';
            entrar = false;
        }
        if (telefono < 8) {
            warnings += 'El numero de telefono no es valido\n';
            entrar = false;
        }
        if (pass !== repite_pass) {
            warnings += 'La contrasenia no coincide\n';
            entrar = false;
        }

        if (entrar) {
            alert("Usuario registrado con exito, se iniciara sesion");
            if (usuarios_password.has(nombre)) {
                alert("Registro invalido, el nombre de usuario ya existe");
            } else {
                usuarios_password.set(nombre, pass);
                moverLogin();
            }
        } else {
            alert("Registro invalido:\n\n"+warnings);
        }
        console.log(warnings);
    });
}

