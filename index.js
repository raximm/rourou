const textbox = document.getElementById('textbox');
const tokilometers = document.getElementById('tokilometers');   
const tomiles = document.getElementById('tomiles');   
const result = document.getElementById('result');   
let temp;


function convert(){
if(tokilometers.checked){
temp = Number(textbox.value) 
result.textContent =temp+" Miles of meat is abt "+(temp * 1.60934).toFixed(1) +" kilometers of meat!!"
}
else if(tomiles.checked){
    temp = Number(textbox.value)
    result.textContent =temp+" kilometers of MEAT is abt "+(temp * 0.621371).toFixed(1) +" Miles of AMERICAN MEAT!!"
}
else{
result.textContent = "please select a 3lwa :("
}
}