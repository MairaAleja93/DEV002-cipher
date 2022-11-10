import cipher from './cipher.js';
let texto = document.getElementById("text1");
let numDesplazo = document.getElementById("numPosition");
let texto2 = document.getElementById("text2");
   
let btnSave = document.getElementById("btnSave");
let btnSubmit = document.getElementById("btnSubmit");
let btnDescifrar = document.getElementById("btnDescifrar");
let respuestaCifrada = document.getElementById("respuestaCifrada")
let respuestaDescifrada = document.getElementById("respuestaDescifrada")
let offset;



btnSave.addEventListener("click", function(e){
    e.preventDefault();
    offset = parseInt(numDesplazo.value);
    if(isNaN(offset)){
        alert("Debe ingresar un número")
    }else{
        offset = numDesplazo.value;
        console.log(offset)
    }    
})

btnSubmit.addEventListener("click", function(e){
    e.preventDefault();
    let text = texto.value;
    offset = parseInt(numDesplazo.value);
    // console.log(text, offset)
    //lñas funciones que tienen un return devuelve algo y eso lo puedo guardar en una variable
    const encodeText = cipher.encode(offset, text );
    respuestaCifrada.innerHTML = encodeText;
}) 

btnDescifrar.addEventListener("click", function(e){
    e.preventDefault();
    let textDes = texto2.value;
    offset = parseInt(numDesplazo.value);
    console.log(textDes, offset)
    const decodeText = cipher.decode(offset, textDes );
    respuestaDescifrada.innerHTML = decodeText
})