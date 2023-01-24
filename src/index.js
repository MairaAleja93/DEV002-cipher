import cipher from './cipher.js';
let texto = document.getElementById("text1");
let numDesplazo = document.getElementById("numPosition");
   
let btnSave = document.getElementById("btnSave");
let btnSubmit = document.getElementById("btnSubmit");
let offset;
let select = document.getElementById("seleccionar")
let msj = document.getElementById("mensaje")
let respuesta = document.getElementById("respuesta")

select.addEventListener('change', (e)=>{
    const target = e.target.value;
    if(target === 'cifrar'){
        msj.innerHTML = "Introduzca el mensaje a cifrar"
        btnSubmit.innerHTML='Cifrar'
        btnSubmit.addEventListener("click", function(e){
            e.preventDefault();
            let text = texto.value;
            offset = parseInt(numDesplazo.value);
            const encodeText = cipher.encode(offset, text );
            respuesta.innerHTML = encodeText;
        })
    }
    if(target == 'descifrar'){
        btnSubmit.innerHTML='Descifrar'
        msj.innerHTML = "Introduzca el mensaje a descifrar"
        btnSubmit.addEventListener("click", function(e){
            e.preventDefault();
            let text = texto.value;
            offset = parseInt(numDesplazo.value);
            const decodeText = cipher.decode(offset, text );
            respuesta.innerHTML = decodeText
        })
    }
})

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



