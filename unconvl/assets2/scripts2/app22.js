const defaultRes = 0;
let currentResult = defaultRes;
let logEntries = [];

//gets input from input field
function getUserNumberInput()
{
    return parseInt(userInput.value);
}

//generates nd writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputRes(currentResult, calcDescription); // from vendor file
  }
  
  function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
  ) {
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
  }
  
  function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
  }
  
  function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
  }
  
  function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  }
  
  function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
  }
  
  addbutton.addEventListener('click', add);
  subsbutton.addEventListener('click', subtract);
  mulbutton.addEventListener('click', multiply);
  divibutton.addEventListener('click', divide);
   