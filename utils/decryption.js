const CryptoJS = require("crypto-js");

module.exports = function decryptImage(encryptedImage, key) {
    const bytes  = CryptoJS.AES.decrypt(encryptedImage, 'sujal123');
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};
