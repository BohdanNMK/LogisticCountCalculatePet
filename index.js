
const arguments = process.argv


function showTwoTables(name, count, volumeOfOne) {
  const str = fullParameterReturn(name, count, volumeOfOne);
  const arr = str.split(' ');
  const Text = `"Таблиця чисел з калькуляцій додатку:"`;
  const newArr = [];
  newArr.push(arr[6], arr[14], arr[19]);

  console.table(arr);
  console.table(Text);
  console.table(newArr);

}


function overAllVolume(volumeOfOne, count) {

  return volumeOfOne * count;

}

function returnText(name, count, volumeOfOne) {

  return `Ми отримали продукцію ${name} у кількості ${count}, та одна штука цієї продукції має обєм ${volumeOfOne}`;

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
console.table(showTwoTables(arguments[2], arguments[3], arguments[4]))

