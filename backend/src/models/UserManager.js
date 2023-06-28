const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByNameWithPassword(lastname) {
    return this.database.query(
      `SELECT * FROM ${this.table} where lastname = ?`,
      [lastname]
    );
  }
}

module.exports = userManager;
