export const encryptWithCaesarCipher = (text, shift) => {
    if (shift < 0) {
      return encryptWithCaesarCipher(text, shift + 26);
    }
  
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
  
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
  
      result += char;
    }
  
    return result;
  };
  