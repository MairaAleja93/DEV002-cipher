const cipher = {
  
  //numero, string
  //null, [] -> ver como retornamos un error en js
  encode(offset,text){//cifrar mensaje
    //console.log(text, offset)
    // if(offset) -> como saber si mi variable es un numero
    if(typeof offset !== "number") throw new TypeError('offset debe ser numero')
    if(typeof text !== "string") throw new TypeError('text debe ser numero')

    let mensajeCifrado = [];
    for(let i=0; i<text.length; i++){
      // console.log(text)
      let codeAscii = text.charCodeAt(i); //obtener el codigo ASCII de las letras
      if(codeAscii == 32){
        mensajeCifrado.push(String.fromCharCode(codeAscii));
      }else{
        // console.log(codeAscii);
        // console.log(offset);
        let numCifrado = (codeAscii - 65 + offset) % 26 + 65;//formula para generar la posición del desplazamiento
        // console.log(numCifrado);
        let letraCifrada = String.fromCharCode(numCifrado);//pasar el número del desplazamiento a la letra que voy a mostrar
        // console.log(letraCifrada)
      
        mensajeCifrado.push(letraCifrada);
      }
    }
    // console.log(mensajeCifrado.join(''));
    return mensajeCifrado.join('')
    // console.log(respuestaCifrada)

  },


  decode(offset,textDes){
    if(typeof offset !== "number") throw new TypeError('offset debe ser numero')
    if(typeof textDes !== "string") throw new TypeError('textDes debe ser numero')
    let mensajeDescifrado = [];
    for(let i=0; i<textDes.length; i++){
      console.log(textDes)
      let codeAscii = textDes.charCodeAt(i); //obtener el codigo ASCII de las letras
      if(codeAscii == 32){
        mensajeDescifrado.push(String.fromCharCode(codeAscii));
      }else{
        console.log(codeAscii);
        console.log(offset);
        let numCifrado = (codeAscii + 65 - offset) % 26 + 65;//(65 - 65 - 1) % 26 + 65 = 86 = Y
        console.log(numCifrado);
        let letraCifrada = String.fromCharCode(numCifrado);//pasar el numero del desplazamiento a la letra que voy a mostrar
        console.log(letraCifrada)
      
        mensajeDescifrado.push(letraCifrada);
      } 
    }
    
    // console.log(mensajeDescifrado.join(''));
    // respuestaDescifrada.innerHTML = mensajeDescifrado.join('');  
    return mensajeDescifrado.join('')
  }
};


export default cipher;
