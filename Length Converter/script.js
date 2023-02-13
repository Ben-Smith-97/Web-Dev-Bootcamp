const input = document.getElementById('input');
const result = document.getElementById('result');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');
const inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

function myResult(){

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
}


if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
    result.value = number(input.value) * 0.001;

}else if;(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
    result.value = number(input.value) * 100;
    
}else if;(inputTypeValue === "meter" && resultTypeValue==="meter"){
    result.value * input.value
}