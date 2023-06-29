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

  // Override
  find(id) {
    return this.database.query(
      `lastname, firstname, hashedPassword, from  ${this.table} where id = ?`,
      [id]
    );
  }

  // Override
  findAll() {
    return this.database.query(
      `lastname, firstname, hashedPassword from  ${this.table}`
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (lastname, firstname, hashedPassword) values (?, ?, ?)`,
      [user.lastname, user.firstname, user.hashedPassword]
    );
  }
}

module.exports = userManager;
