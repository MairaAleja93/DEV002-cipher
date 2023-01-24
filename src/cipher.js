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
          numCifrado = (codeAscii - 65 + offset) % 26 + 65;/**formula para generar la posición del desplazamiento
                                                                  a MAYUSCULAS**/
        }else{                                                  
          numCifrado2 = (codeAscii - 97 + offset) % 26 + 97;
        }
        let letraCifrada = String.fromCharCode(numCifrado, numCifrado2);//pasar el número del desplazamiento a la letra que voy a mostrar
        
        mensajeCifrado.push(letraCifrada);
      }
    }
    return mensajeCifrado.join('')
  },
  
  decode(offset, textDes){
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
     "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let newArray = [];
    let l;
    textDes = textDes.toLowerCase()
    for (let i = 0; i < textDes.length; i++) {
      if(textDes.charCodeAt(i) == 32){
        newArray.push(String.fromCharCode(32));
      }else{
        l = textDes.charAt(i);
        let posicion = arr.indexOf(l);//me dice la posicion del caracter
        let n = posicion - offset//n guarda el número de la posicion que voy a reemplazar
        if(n < 0){
          let entero = (n)*(-1);
          let le = arr.length;
          let p = le - entero;
          let position = arr[p]
          newArray.push(position)
        }else{
          let nuevaLetra= arr[n]
          newArray.push(nuevaLetra)
        }
      }    
    }
    return newArray.join('')
  }
}
export default cipher;
