const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    return this.database.query(
      `INSERT INTO ${this.table}(operating_system, brand, model, version_os, ram, storage_memory, status_device, start_up, network, accessorie, category, price)
             VALUES
             (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        smartphone.os,
        smartphone.marque,
        smartphone.model,
        smartphone.version,
        smartphone.ram,
        smartphone.stockage,
        smartphone.state,
        smartphone.date,
        smartphone.reseau,
        smartphone.accessories,
        smartphone.categorie,
        smartphone.price,
      ]
    );
  }

  findAllSmartphones() {
    return this.database.query(`select * from  ${this.table}`);
  }
}
module.exports = SmartphoneManager;
