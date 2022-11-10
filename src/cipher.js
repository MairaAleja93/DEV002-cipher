const cipher = {
  
  encode(offset,text){
    if(typeof offset !== "number") throw new TypeError('offset debe ser numero')
    if(typeof text !== "string") throw new TypeError('text debe ser numero')
    
    let mensajeCifrado = [];
    for(let i=0; i<text.length; i++){
      let numCifrado
      let numCifrado2
      let codeAscii = text.charCodeAt(i); //obtener el codigo ASCII de las letras
      if(codeAscii == 32){
        mensajeCifrado.push(String.fromCharCode(codeAscii));
      }else{
        if(codeAscii >= 65 && codeAscii <= 90){
          numCifrado = (codeAscii - 65 + offset) % 26 + 65;//formula para generar la posición del desplazamiento
        }else{
          numCifrado2 = (codeAscii - 97 + offset) % 26 + 97;
        }
        let letraCifrada = String.fromCharCode(numCifrado, numCifrado2);//pasar el número del desplazamiento a la letra que voy a mostrar
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
        let numCifrado = (codeAscii + 65 - offset) % 26 + 65;//(65 - 65 - 1) % 26 + 65 = 86 = Y
        let letraCifrada = String.fromCharCode(numCifrado);//pasar el numero del desplazamiento a la letra que voy a mostrar
        
        mensajeDescifrado.push(letraCifrada);
      } 
    }
    
    // console.log(mensajeDescifrado.join(''));
    // respuestaDescifrada.innerHTML = mensajeDescifrado.join('');  
    return mensajeDescifrado.join('')
  }
};


export default cipher;
