/* eslint-disable no-param-reassign */
const globalFilter = (smartphone) => {
  const filterSmartphones = () => {
    if (
      smartphone.os === "android" &&
      parseInt(smartphone.version, 10) >= 8 &&
      parseInt(smartphone.ram, 10) >= 2 &&
      parseInt(smartphone.stockage, 10) >= 16 &&
      smartphone.reseau >= "4G" &&
      parseInt(smartphone.accessories, 10) === 1 &&
      parseInt(smartphone.olderness, 10) <= 3
    ) {
      console.info("telephone android valide");
      return true;
    }
    if (
      smartphone.os === "IOS" &&
      parseInt(smartphone.version, 10) >= 10 &&
      parseInt(smartphone.ram, 10) >= 2 &&
      parseInt(smartphone.stockage, 10) >= 64 &&
      smartphone.reseau >= "4G" &&
      parseInt(smartphone.accessories, 10) === 1 &&
      parseInt(smartphone.olderness, 10) <= 3
    ) {
      console.info("telephone IOS valide");
      return true;
    }
    console.error("le telephone ne remplit pas les conditions");
    return false;
  };

  if (filterSmartphones(smartphone)) {
    const sumOfPointsDate = {
      5: 24,
      4: 32,
      3: 40,
      2: 48,
      1: 56,
      0: 64,
    };
    const sumOfPointsMem = {
      1: 30,
      2: 44,
      3: 54,
      4: 65,
      6: 80,
      8: 92,
      12: 108,
      16: 126,
    };

    const sumOfPointsStockage = {
      16: 31,
      32: 45,
      64: 66,
      128: 75,
      256: 89,
      512: 97,
      1000: 106,
    };

    const sumOfPointsState = {
      0: 1,
      1: 0.5,
      2: 0.1,
      3: 0.05,
      4: 0,
    };

    const pointsDate = sumOfPointsDate[smartphone.olderness];
    const pointsMem = sumOfPointsMem[smartphone.ram];
    const pointsStock = sumOfPointsStockage[smartphone.stockage];
    const totalPoints = pointsDate + pointsMem + pointsStock;
    const coefficientState = sumOfPointsState[smartphone.state];
    const reduction = totalPoints * coefficientState;
    const priceWithReduction = totalPoints - reduction;

    smartphone.price = priceWithReduction;

    const filterByCategory = () => {
      if (totalPoints < 90) {
        smartphone.categorie = "1HC";
        return;
      }
      if (totalPoints > 90 && totalPoints < 165) {
        smartphone.categorie = "2C";
        return;
      }
      if (totalPoints > 165 && totalPoints < 255) {
        smartphone.categorie = "3B";
        return;
      }
      if (totalPoints > 255 && totalPoints < 375) {
        smartphone.categorie = "4A";
        return;
      }
      if (totalPoints > 375) {
        smartphone.categorie = "5P";
      }
    };

    console.info(totalPoints);
    console.info(priceWithReduction);
    console.info(filterByCategory(80));
    console.info(smartphone);
  }
};
export default globalFilter;
