const { PLANE, SHIP, CAR, PLANE_TOTAL_VOLUME, SHIP_TOTAL_VOLUME, CAR_TOTAL_VOLUME } = require('./Veribals');

const calculationTotalVolume = function ({volumeOfOne, count} ) {
     return volumeOfOne * count;
     
};

const displayTextWithNameAndCalculations = function ({ name, count, volumeOfOne }) {

    return 'Ми отримали продукцію ' + name + ' у кількості ' + count + ', та одна штука цієї продукції має обєм ' + volumeOfOne;

};
const getGeneralTextAndCalculation = function (name, count, volumeOfOne) {

    const totalVolume = calculationTotalVolume({count,volumeOfOne});
   
    const textResult = displayTextWithNameAndCalculations({ name, count, volumeOfOne });

    let deliveryVehicles;
    if (totalVolume > PLANE_TOTAL_VOLUME) {
        deliveryVehicles = PLANE;
    } else if (totalVolume > SHIP_TOTAL_VOLUME) {
        deliveryVehicles = SHIP;

    } else if (totalVolume <= CAR_TOTAL_VOLUME) {
        deliveryVehicles = CAR;

    }

    return `${textResult}. Загальний об'єм цієї продукції ${totalVolume}, що дозволяє нам її транспортувати ${deliveryVehicles}`;
}
 

module.exports = {
    calculationTotalVolume,
    displayTextWithNameAndCalculations,
    getGeneralTextAndCalculation
};

