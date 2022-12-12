
const arguments = process.argv

function showTwoTables(name, count, volumeOfOne) {
  const str = fullParameterReturn(name, count, volumeOfOne);
  const arr = str.split(' ');
  arr.splice();

  const Text = `"Таблиця чисел з калькуляцій додатку:"`;

  const newArr = [parseInt(arr[6].substring(0, arr[6].length - 1)), parseInt(arr[14].substring(0, arr[14].length - 1)), parseInt(arr[19].substring(0, arr[19].length - 1))];


  console.table(arr);
  console.log(Text);
  console.table(newArr);
  return str;
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


console.log(showTwoTables(arguments[2], arguments[3], arguments[4]))

