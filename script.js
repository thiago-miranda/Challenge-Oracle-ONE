let textoEncriptar = "";
let textoEncriptografado = "";
let textoDesencriptar = "";
let textoDescriptografado = "";

const limparTexto = () => {
  document.getElementById("result").value = "";
  document.getElementById("criptografia").value = "";
};

const copiarDados = () => {
  let dadosExistentes = document.getElementById("result").value;
  if (!!dadosExistentes) {
    navigator.clipboard.writeText(dadosExistentes);
  } else {
    navigator.clipboard.writeText("");
  }
};

const salvarDados = (res) => {
  if (res) {
    document.getElementById("result").value = res;
  } else {
    document.getElementById("result").value = "";
  }
};

const obterTexto = () => {
  return document.getElementById("criptografia").value;
};

const encriptar = () => {
  textoEncriptografado = criptografar(obterTexto());

  salvarDados(textoEncriptografado);
};

const removerCriptografia = () => {
  textoDescriptografado = descriptografar(obterTexto());
  salvarDados(textoDescriptografado);
};

const validarCriptografia = (texto) => {
  return /^[a-z\s]*$/.test(texto);
};

const criptografar = (str) => {
  if (validarCriptografia(str)) {
    return str
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
  }
  return false;
};

const descriptografar = (str) => {
  if (validarCriptografia(str)) {
    return str
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
  }
  return false;
};
