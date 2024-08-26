/*Criptografia:
a >> ai
e >> enter
i >> imes 
o >> ober
u >> ufat*/

const output = document.getElementById("output_text_output");
const image = document.getElementById("output_text_image");
const copybtn = document.getElementById("output_text_copyBtn");

copybtn.style.display = "none";

function criptografar() {
    let text = document.querySelector("input").value;
    if (text == "") {
        alert("Digite um texto para ser criptografado!");
        return;
    }
    let criptografado = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            criptografado += "ai";
        } else if (text[i] == "e") {
            criptografado += "enter";
        } else if (text[i] == "i") {
            criptografado += "imes";
        } else if (text[i] == "o") {
            criptografado += "ober";
        } else if (text[i] == "u") {
            criptografado += "ufat";
        } else {
            criptografado += text[i];
        }
    }
    output.innerHTML = criptografado; 
    copybtn.style.display = "block";
    image.style.display = "none";
    return;
}

function descriptografar() {
    let text = document.querySelector("input").value;
    if (text == "") {
        alert("Digite um texto para ser descriptografado!");
        return;
    }
    let descriptografado = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a" && text[i+1] == "i") {
            descriptografado += "a";
            i++;
        } else if (text[i] == "e" && text[i+1] == "n" && text[i+2] == "t" && text[i+3] == "e" && text[i+4] == "r") {
            descriptografado += "e";
            i += 4;
        } else if (text[i] == "i" && text[i+1] == "m" && text[i+2] == "e" && text[i+3] == "s") {
            descriptografado += "i";
            i += 3;
        } else if (text[i] == "o" && text[i+1] == "b" && text[i+2] == "e" && text[i+3] == "r") {
            descriptografado += "o";
            i += 3;
        } else if (text[i] == "u" && text[i+1] == "f" && text[i+2] == "a" && text[i+3] == "t") {
            descriptografado += "u";
            i += 3;
        } else {
            descriptografado += text[i];
        }
    }
    output.innerHTML = descriptografado;
    image.style.display = "none";
    copybtn.style.display = "block";

    return;
}

function copy() {
    navigator.clipboard.writeText(output.innerHTML);
}

