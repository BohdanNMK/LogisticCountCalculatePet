
const { PLANE, SHIP, CAR, PLANE_TOTAL_VOLUME, SHIP_TOTAL_VOLUME, CAR_TOTAL_VOLUME, TEXT_CALCULATION_TABLE, DATA } = require('./veribals');
const fs = require('fs');



class Utils {
    constructor(name, count, volumeOfOne) {
        this.name = name;
        this.count = count;
        this.volumeOfOne = volumeOfOne;
    }

    calculationTotalVolume() {
        return this.volumeOfOne * this.count;
    }

    displayTextWithNameAndCalculations() {
        return `Ми отримали продукцію ${this.name} у кількості ${this.count}, та одна штука цієї продукції має об'єм ${this.volumeOfOne}`;
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

    getGeneralTextAndCalculation() {
        const totalVolume = this.calculationTotalVolume(this.count, this.volumeOfOne);
        const textResult = this.displayTextWithNameAndCalculations(this.name, this.count, this.volumeOfOne);
        const deliveryVehicles = this.getDeliveryVehicles(this.totalVolume);
        return `${textResult}. Загальний об'єм цієї продукції ${totalVolume}, що дозволяє нам її транспортувати ${deliveryVehicles}`;

    }

    writeFile(arrOutNumbersInTable) {
        fs.writeFile(DATA, JSON.stringify(arrOutNumbersInTable), (error) => {
            if (error) {
                throw error;
            } else {
                console.log("Запись файла завершена. Содержимое файла:");
            }
        });
    }
};


module.exports = Utils;
