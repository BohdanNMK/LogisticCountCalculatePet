
const arguments = process.argv

function showTwoTables(name, count, volumeOfOne) {
  const str = fullParameterReturn(name, count, volumeOfOne);
  const arr = str.split(' ');
  const nullArr = str.split('');
  const spaceArr = [];
  const singArr = [];
  nullArr.forEach((element, index) => {
    console.log(element, index)
  });
  spaceArr.push(nullArr[2], nullArr[11], nullArr[21], nullArr[25], nullArr[27], nullArr[37], nullArr[41], nullArr[44], nullArr[49], nullArr[55], nullArr[60], nullArr[70], nullArr[74], nullArr[79], nullArr[82], nullArr[92], nullArr[98], nullArr[103], nullArr[113], nullArr[117], nullArr[120], nullArr[129], nullArr[133], nullArr[136], nullArr[151])
  singArr.push(nullArr[40], nullArr[81], nullArr[95], nullArr[116])





  const Text = `"Таблиця чисел з калькуляцій додатку:"`;

  let newArr = [];


  const checkIndexes = [6, 14, 19];

  for (let step = 0; step < arr.length; step++) {
    if (checkIndexes.includes(step)) newArr.push(parseInt(arr[step].substring(0, parseInt(arr[step].length - 1))));
  }


  console.log(nullArr)
  console.log(singArr)
  console.log(spaceArr)
  return newArr;
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

console.table(showTwoTables(arguments[2], arguments[3], arguments[4]))


