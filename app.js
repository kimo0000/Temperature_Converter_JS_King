const result = document.querySelector('.result');
const celsus = document.getElementById('celsus');
const fehreinheit = document.getElementById("fehrenheit");
const kelvin = document.getElementById("kelvin");

console.log( +celsus.value);
console.log(+fehreinheit.value);
console.log(+kelvin.value);

function getValue(value) {
   console.log(value);
   switch (value) {
     case "celsus":
       if (celsus.value === "") {
         fehreinheit.value = "";
         kelvin.value = "";
       } else {
         fehreinheit.value = (+celsus.value * 1.8 + 32).toFixed(2);
         kelvin.value = (+celsus.value + 273.15).toFixed(2);
       }
       break;
     case "fehrenheit":
       if (fehreinheit.value === "") {
         celsus.value = "";
         kelvin.value = "";
       } else {
         celsus.value = (+fehreinheit.value -32 * 1.8).toFixed(2);
         kelvin.value = (+fehreinheit.value - 32 / 1.8).toFixed(2);
       }
       break;
     case "kelvin":
       if (kelvin.value === "") {
         celsus.value = "";
         fehreinheit.value = "";
       } else {
         celsus.value = (+kelvin.value - 273.15).toFixed(2);
         fehreinheit.value = (1.8 * (+kelvin.value - 273.15) + 32).toFixed(2);
       }
       break;
     default:
       result.textContent = "Please Enter A ";
   }
}