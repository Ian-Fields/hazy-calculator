//* Stringified numbers (eg. `'2'`) should be treated as numbers
//* `NULL` should be treated as zero
//* `undefined` values should be ignored
//* Empty string (eg. `''`) values should be ignored


//for ( i = 0; i < calculationSteps.length; i ++ ){


// function calculate, takes the test array (assumed to be) calculateSteps
// creates an array, (values) that stores the numerical values to calculate
// defines operands, and numerical values
// conditional statesments are used to ignore undefined and empty string
// If NULL is found, push a 0 into values array to be treated as a zero
// switch case is used to determine the operation based on the operands

// Unsure about incoming array, wethere or not it is calculateSteps or would
// require defining a seperate array.



function calculationSteps(arrayList) {
  var operands = ['+', '-', '*', '/']
  var calcArray = []

  for (let i = 0; arrayList.length > i; i++) {
    if (operands.includes(arrayList[i]) || (!isNaN(arrayList[i]) && arrayList[i] !== '')) { calcArray.push(arrayList[i]) }
  }
  if (calcArray.length < 3) { return NaN }
  if (calcArray[1] === '+') { return Number(calcArray[0]) + Number(calcArray[2]) }
  if (calcArray[1] === '-') { return Number(calcArray[0]) - Number(calcArray[2]) }
  if (calcArray[1] === '*') { return Number(calcArray[0]) * Number(calcArray[2]) }
  if (calcArray[1] === '/') { return Number(calcArray[0]) / Number(calcArray[2]) }
}



module.exports = calculationSteps