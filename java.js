function cripografar() {
    const inputText = document.getElementById("input").value;
    const outputElement = document.getElementById("output");

    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    outputElement.textContent = encryptedText;
}

function descriptografar() {
    const inputText = document.getElementById("input").value;
    const outputElement = document.getElementById("output");

    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    outputElement.textContent = decryptedText;
}