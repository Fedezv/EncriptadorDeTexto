/*
var botonEncriptar = document.getElementById('botonEncriptar') //capturo el boton
botonEncriptar.addEventListener('click', encriptacion)              //Le pongo el evento

function encriptacion () {                                      //Que hace el evento

    var inputTexto = document.getElementById('input-texto');     //capturo la entrada del texto
    
    var outputTexto = document.getElementById('output-texto')   //capturo la salida del texto
    outputTexto.textContent = inputTexto.value;                 //muestro el resultado en el output
} 
*/
/*
const inputTexto = document.getElementById("input-texto");
const outputTexto = document.getElementById("output-texto");
var botonEncriptar = document.getElementById('botonEncriptar') 
botonEncriptar.addEventListener('click', textoEncriptado) 
*/

const inputTexto = document.querySelector(".ingresar");
const outputTexto = document.querySelector(".salir");

var botonEncriptar = document.getElementById('botonEncriptar') 
botonEncriptar.addEventListener('click', encriptacion) 

function encriptacion(){                                        //puede ir sino btnEncriptar()
    const textoEncriptado = encriptar(inputTexto.value)
    outputTexto.value = textoEncriptado;
    outputTexto.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar (stringEncriptada) {                                       

       
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        } 
    } 
    return stringEncriptada;
}

var botonDesencriptar = document.getElementById('botonDesencriptar') 
botonDesencriptar.addEventListener('click', desencriptacion) 

function desencriptacion(){                                        
    const textoDesencriptado = desencriptar(inputTexto.value)
    outputTexto.value = textoDesencriptado;
    outputTexto.style.backgroundImage = "none";
    inputTexto.value = "";
}

function desencriptar (stringDesencriptada) {                                       

       
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        } 
    } 
    return stringDesencriptada;
}

var botonCopiar = document.getElementById('botonCopiar') 
botonCopiar.addEventListener('click', copiar) 

function copiar(){
    outputTexto.select();
    navigator.clipboard.writeText(outputTexto.value)
    alert("Mensaje Copiado");

}

var botonBorrar = document.getElementById('borrar');
botonBorrar.addEventListener('click', borrar)

function borrar () {
    outputTexto.value = " ";
}



