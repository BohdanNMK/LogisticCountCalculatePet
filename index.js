
const arguments = process.argv

function overAllVolume(volumeOfOne, quantity) {

  return volumeOfOne * quantity;

}

function returnText(name, volumeOfOne, quantity) {

  return `Ми отримали продукцію ${name} у кількості  ${volumeOfOne}, та одна штука цієї продукції має обєм ${quantity}`;

}


function fullParameterReturn(name, volumeOfOne, quantity) {

  const countTotal = overAllVolume(volumeOfOne, quantity);
  const textResult = returnText(name, volumeOfOne, quantity);

  let typeVechicle;
  if (countTotal > 40) {
    typeVechicle = 'літак';
  } else if (countTotal > 10) {
    typeVechicle = `кораблем`;

  } else if (countTotal <= 10) {
    typeVechicle = `машиною`;

  }

  return `${textResult}. Загальний об'єм цієї продукції ${countTotal}, що дозволяє нам її транспортувати ${typeVechicle}`;
}

console.log(fullParameterReturn(arguments[2], arguments[3], arguments[4]))


