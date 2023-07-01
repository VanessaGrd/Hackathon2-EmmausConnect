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
      5: 6,
      4: 10,
      3: 14,
      2: 18,
      1: 22,
      0: 30,
    };
    const sumOfPointsMem = {
      1: 8,
      2: 12,
      3: 16,
      4: 20,
      6: 24,
      8: 30,
      12: 36,
      16: 42,
    };

    const sumOfPointsStockage = {
      16: 10,
      32: 12,
      64: 16,
      128: 20,
      256: 24,
      512: 30,
      1000: 36,
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
