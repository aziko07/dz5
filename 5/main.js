let Value1 = ''; 
let Value2 = ''; 
 
function change() { 
    let input1 = document.getElementById('input1'); 
    let input2 = document.getElementById('input2'); 
 
    let tempValue1 = input1.value; 
    let tempValue2 = input2.value; 
 
    input1.value = Value2 === '' ? input2.value : Value2; 
    input2.value = Value1 === '' ? tempValue1 : Value1; 
 
    Value1 = tempValue1; 
    Value2 = tempValue2; 
} 
 
 
const colorInput = document.getElementById('colorInput'); 
const colorBlock = document.getElementById('colorBlock'); 
 
colorInput.addEventListener('input', function() { 
    const colorValue = colorInput.value; 
    colorBlock.style.backgroundColor = colorValue; 
});