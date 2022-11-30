
const arguments = process.argv

function overAllVolume(numberOfUnits, quantity) {

  return numberOfUnits * quantity;

}

function returnText(name, numberOfUnits, quantity) {

  return `Ми отримали продукцію ${name} у кількості  ${numberOfUnits}, та одна штука цієї продукції має обєм ${quantity}`;

}


function fullParameterReturn(name, numberOfUnits, quantity) {

  const countTotal = overAllVolume(numberOfUnits, quantity);
  const textResult = returnText(name, numberOfUnits, quantity);

  let typeVechicle;
  if (countTotal > 40) {
    typeVechicle = 'літаком';
  } else if (countTotal > 10) {
    typeVechicle = `кораблем`;

  } else if (countTotal <= 10) {
    typeVechicle = `машиною`;

  }

  return `${textResult}. Загальний об'єм цієї продукції ${countTotal}, що дозволяє нам її транспортувати ${typeVechicle}`;
}

console.log(fullParameterReturn(arguments[2], arguments[3], arguments[4]))
