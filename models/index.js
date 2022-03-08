const Locations = require("./Locations");
const Travellers = require("./Travellers");
const Trips = require("./Trips");

Locations.belongsToMany(Travellers, {
  through: {
    model: Trips,
    unique: false,
  },
  as: "location_travellers",
});
Travellers.belongsToMany(Locations, {
  through: {
    model: Trips,
    unique: false,
  },
  as: "planned_trips",
});

module.exports = { Locations, Travellers, Trips };
