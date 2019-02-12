  
  window.onload = () => {
  //Mostrar pantalla de cifrado y ocultar home
  const button_enter = document.getElementById('btningresar');

  const welcome = document.getElementById('welcome');
  const cipher = document.getElementById('cipher');

  button_enter.addEventListener('click', () => {
    welcome.style.display ="none";
    cipher.style.display="block";
  });
  
  const buttonencode = document.getElementById('btnencode');

   buttonencode.addEventListener('click', () => {
    
   let codetext = document.getElementById ('code').value;
   let offset = document.getElementById ('offset').value; 
   let encoderesult = window.cipher.encode (offset, codetext);
  document.getElementById('contenedor_datos').innerHTML = (encoderesult);

  })

  const buttondecode = document.getElementById('btndecode');
   buttondecode.addEventListener('click', () => {

  let text = document.getElementById ('code').value;
  let offset = document.getElementById ('offset').value; 
  let decoderesult = window.cipher.decode (offset, text);
  document.getElementById('contenedor_datos').innerHTML = (decoderesult);


  })
}