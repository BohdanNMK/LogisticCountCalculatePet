
const arguments = process.argv

let str = (fullParameterReturn(arguments[2],arguments[3],arguments[4]));
let arr = str.split(' ')


function overAllVolume(volumeOfOne, count) {

  return volumeOfOne * count;

}

function returnText(name, count, volumeOfOne) {

  return `Ми отримали продукцію ${name} у кількості  ${count}, та одна штука цієї продукції має обєм ${volumeOfOne}`;

}


function fullParameterReturn(name, count, volumeOfOne) {
  
  const countTotal = overAllVolume(volumeOfOne, count);
  const textResult = returnText(name, count, volumeOfOne);

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
console.table(arr)
