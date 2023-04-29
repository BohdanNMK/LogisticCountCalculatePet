
const { PLANE, SHIP, CAR, PLANE_TOTAL_VOLUME, SHIP_TOTAL_VOLUME, CAR_TOTAL_VOLUME, TEXT_CALCULATION_TABLE, DATA } = require('./Veribals');
const fs = require('fs');



class Utils {
    constructor(name, count, volumeOfOne) {
        this.name = name;
        this.count = count;
        this.volumeOfOne = volumeOfOne;
      }

  calculationTotalVolume({ volumeOfOne, count }) {
    return volumeOfOne * count;
  }

  displayTextWithNameAndCalculations({ name, count, volumeOfOne }) {
    return `Ми отримали продукцію ${name} у кількості ${count}, та одна штука цієї продукції має об'єм ${volumeOfOne}`;
  }

  getDeliveryVehicles(totalVolume) {
    let deliveryVehicles;
    if (totalVolume > PLANE_TOTAL_VOLUME) {
        deliveryVehicles = PLANE;
    } else if (totalVolume > SHIP_TOTAL_VOLUME) {
        deliveryVehicles = SHIP;

    } else if (totalVolume <= CAR_TOTAL_VOLUME) {
        deliveryVehicles = CAR;

    }
  }

  getGeneralTextAndCalculation(name, count, volumeOfOne) {
    const totalVolume = this.calculationTotalVolume({ count, volumeOfOne });
    const textResult = this.displayTextWithNameAndCalculations({ name, count, volumeOfOne });
    const deliveryVehicles = this.getDeliveryVehicles(totalVolume);
    return `${textResult}. Загальний об'єм цієї продукції ${totalVolume}, що дозволяє нам її транспортувати ${deliveryVehicles}`;
  }

  writeFile() {
    const AddData = TEXT_CALCULATION_TABLE ;
    fs.writeFileSync(DATA, JSON.stringify(AddData), (error) => {
      if (error) {
        throw error;
      } else {
        console.log("Запись файла завершена. Содержимое файла:");
      }
      
    });

  }
};


module.exports = Utils;
