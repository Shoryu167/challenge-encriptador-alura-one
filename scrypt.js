const texto_analizado = document.querySelector(".texto_de_entrada");
const texto_de_salida = document.querySelector(".texto_de_salida");


function restringir_caracteres(textarea) {
  const regex = /[^a-z ]/g;
  textarea.value = textarea.value.replace(regex, '');
}

texto_de_salida.addEventListener('input', () => {
    const texto_de_salida = texto_de_salida.value.toLowerCase();
    const regex = /^[a-z\s]+$/;
  if (regex.test(valor)) {
    texto_de_salida.textContent = valor;
  } else {
    alert('Solo se permiten letras y espacios.');
  }
});

function boton_encriptar(){
    var texto_encriptado = encriptar(texto_analizado.value);
    texto_de_salida.value = texto_encriptado;
    texto_analizado.value = "";
}

function encriptar(texto_analizado) {

    const claves = {a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"}
    let encriptado = "";

    for (let i = 0; i < texto_analizado.length; i++) {
      const letra = texto_analizado[i];
      encriptado += claves[letra] || letra;
    }
  
    return encriptado;
  }

function boton_desencriptar(){
    var texto_desencriptado = desencriptar(texto_analizado.value);
    texto_de_salida.value = texto_desencriptado;
    texto_analizado.value = "";
}


function desencriptar(texto_analizado) {

    const claves = [[ "a", "ai"], ["e", "enter"], ["i", "imes"],[ "o", "ober"], ["u", "ufat"]]
    texto_analizado = texto_analizado.toLowerCase();

    for(let i = 0; i < claves.length; i++){
        if (texto_analizado.includes(claves[i][1])){
            texto_analizado = texto_analizado.replaceAll(claves[i][1], claves[i][0]);
        }
    }
    
    return texto_analizado
}

