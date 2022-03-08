const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "travellers",
        key: "id",
        unique: false,
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "locations",
        key: "id",
        unqiue: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trips",
  }
);

module.exports = Trips;
