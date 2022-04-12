function divideBy(firstNumber){
  return (seconNumber) => seconNumber / firstNumber;
}
function addby(firstNumber) {
  return (seconNumber) => seconNumber + firstNumber;
}

const addBy100 = addby(100);
const addBy1000 = addby(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
