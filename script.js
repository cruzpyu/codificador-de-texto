const inputTexto = document.querySelector(".input-texto");
const outputTexto = document.querySelector(".output-texto");
let texto = document.querySelector("#entrada");
let copiar = document.querySelector("#copiar");
let esconder = document.querySelector('#hidden');

function copiarTexto() {
    let textoCopiado = document.getElementById("saida");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    outputTexto.style.background = "none";
    texto.value = '';

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    outputTexto.value = textoDesencriptado;
    outputTexto.style.background = "none"
    texto.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo2 = [

        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo2.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo2[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo2[i][0], matrizCodigo2[i][1])
        }
    }
    return stringDesencriptada;
}