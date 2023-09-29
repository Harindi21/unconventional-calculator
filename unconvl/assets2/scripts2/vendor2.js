const userInput = document.getElementById('inputno');

const addbutton = document.getElementById('add');
const subsbutton = document.getElementById('subs');
const mulbutton = document.getElementById('mul');
const divibutton = document.getElementById('divi');
const currentResOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputRes(result, text)
{
    currentResOutput.textContent = result;
    currentCalculationOutput.textContent = text; 
}