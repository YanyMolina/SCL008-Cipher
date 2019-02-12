window.cipher = {
   
   encode: (offset, codetext) => {

    let word_text = '';
 
    for (let i=0; i < codetext.length; i++){
        let asciiCode = codetext.charCodeAt(i);
        let newAsciiCode = "";
 
        if (asciiCode >= 65 && asciiCode <= 90){
         newAsciiCode = (asciiCode - 65 + parseInt (offset)) % 26 + 65;
        }
     word_text +=  String.fromCharCode(newAsciiCode);
    }
 
    return word_text;
 },
  decode:(offset,text) => {
 
    let deco_text = '';
 
    for (let i = 0; i < text.length; i++) {
 
        let asciiCode = text.charCodeAt(i);
 if (asciiCode >= 65 && asciiCode <= 90) {
            asciiCode = ((asciiCode - 90 - offset) % 26) + 90;
    }
    deco_text = deco_text + String.fromCharCode(asciiCode);
 }
    return deco_text;
 }
}
