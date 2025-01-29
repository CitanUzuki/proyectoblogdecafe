//queryselector
/*const heading = document.querySelector('.header_texto h2'); //retorna 0 o un elemento
heading.textContent = 'Nuevo Heading';
console.log(heading);*/

/*

//queryselectorall
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);


enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove(navegacion_enlace);
//queryselectorbyID


//nuevo enlace
const nuevoEnlace = document.createElement('A');

nuevoEnlace.href = 'nuevo-Enlace.html';

nuevoEnlace.textContent = 'NUEVO ENLACE';

nuevoEnlace.classList.add = ('Nueva-clase');


console.log(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', function() { //LOAD espera a que los archivos esten listos
    console.log(2);
});

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () { // SOLO EL HTML
console.log(4);
});


console.log(5);


function imprimir () {
    console.log(2);
}

window.onscroll = function ()
{
    console.log('on scrolling');
}

//Seleccionar elementos

const btnEnviar = document.querySelector('.boton-primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault(); //Evita recargar
    console.log('Enviando formulario');
});

*Eventos de los inputs y text area*/

const datos ={
    nombre: '',
    email: '',
    mensaje: '',


}


const nombre= document.querySelector('#nombre');
const email= document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
nombre.addEventListener('input',leertexto);
email.addEventListener('input',leertexto);
mensaje.addEventListener('input',leertexto);

function leertexto(e)
{
    datos[e.target.id] =e.target.value;
    console.log(datos);
}





formulario.addEventListener('submit', function(evento) 
{
    evento.preventDefault();


const{nombre, email, mensaje} = datos; 


if (nombre == '' || email == '' || mensaje == '')
{
    mostrarAlerta('Todos los campos son requeridos', error);

    return;
}

else {
    mostrarAlerta('Formulario enviado');
    return;
}



console.log(nombre);
console.log(email);
console.log(mensaje);

    console.log('enviando formulario');
}

);






function mostrarError(mensaje) {
    error.textContent = mensaje;
    error.classList.add('error');
   

    setTimeout(() =>{
error.remove();
        },5000);
    }

    function mostrarCheck(mensaje) {
        check.textContent = mensaje;
        check.classList.add('check');
    
        setTimeout(() =>{
    check.remove();
            },5000);
        }


        function mostrarAlerta(mensaje,error = null) {
            const alerta = document.createElement('P');
            alerta.textContent = mensaje;
            console.log(error)
        
            if(error)
            {
                alerta.classList.add('error');
            }
            else{
                alerta.classList.add('correcto');
            }
            
        
            formulario.appendChild(alerta);
            setTimeout(() =>{
                error.remove();
                        },5000);
            
            
        }