const CryptoJS = require("crypto-js");

function aesEncrypt(msg, key) {
  return CryptoJS.AES.encrypt(msg, key).toString();
}

function aesDecrypt(ciphered, key) {
  const bytes = CryptoJS.AES.decrypt(ciphered, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

module.exports = {
  aesEncrypt,
  aesDecrypt,
};
