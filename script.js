const textoEntrada = document.querySelector("#texto-ingresado");
const textoSalida = document.querySelector("#texto-generado");
const btnCopiar = document.querySelector("#copiar");

const matrizRemplazo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];

function capturarValorEncriptar(){
    const texto = encriptarMensaje(textoEntrada.value);
    textoSalida.value = texto;
    textoSalida.style.backgroundImage = "none";
    textoEntrada.value = "";
    btnCopiar.style.display = "inline-block";
}


/*Función para encriptar mensaje*/
function encriptarMensaje(mensajeEncriptado){

    if (mensajeEncriptado == ""){
        return "No se encontro ningun mensaje para encriptar, intentelo nuevamente!!";
    } else {
        mensajeEncriptado =  mensajeEncriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
        for(let i=0; i<matrizRemplazo.length; i++){
            if(mensajeEncriptado.includes(matrizRemplazo[i][0])){
                mensajeEncriptado = mensajeEncriptado.replaceAll(matrizRemplazo[i][0], matrizRemplazo[i][1]);
            }
        }
        return mensajeEncriptado;
    }

}

function capturaValorDesencriptar(){
    const texto = desencriptarMensaje(textoEntrada.value);
    textoSalida.value = texto;
    textoEntrada.value = "";
}

/*Función para desencriptar el mensaje*/
function desencriptarMensaje(textoEncriptado){

    for(let i=0; i<matrizRemplazo.length; i++){
        if(textoEncriptado.includes(matrizRemplazo[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(matrizRemplazo[i][1], matrizRemplazo[i][0]);
        }
    }
    return textoEncriptado;
}


/*Función para copiar texto en el portapapeles*/
function copiar(){
    var textoCopiado = document.getElementById('texto-generado');
    var textoGuardado = document.createElement('textarea');
    var lugarDestino = document.getElementById('texto-ingresado');

    textoGuardado.textContent = textoCopiado.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(textoGuardado);
    textoGuardado.select();
    document.execCommand('copy');
    body.removeChild(textoGuardado);
    lugarDestino.focus();
    document.execCommand('paste');

    textoSalida.value = "";
}


