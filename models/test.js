const Sequelize = require("sequelize");

class Test extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        tableName: "test",
        timestamps: false,
        sequelize,
      }
    );
  }

  static associate(models) { }

  static async getTest() {
    await this.findAll({
      attributes: ["name"],
      raw:
        true,
    }).then((data) => {
      console.log(data);
    }
    );
  }
}

module.exports = Test;
