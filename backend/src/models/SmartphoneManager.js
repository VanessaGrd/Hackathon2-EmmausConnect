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
        smartphone.operating_system,
        smartphone.brand,
        smartphone.model,
        smartphone.version_os,
        smartphone.ram,
        smartphone.storage_memory,
        smartphone.status_device,
        smartphone.start_up,
        smartphone.network,
        smartphone.accessorie,
        smartphone.category,
        smartphone.price,
      ]
    );
  }

  findAllSmartphones() {
    return this.database.query(`select * from  ${this.table}`);
  }
}
module.exports = SmartphoneManager;
