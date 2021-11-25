const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const locationsList = this.journeys.map((journey) => journey.startLocation);
  return locationsList;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const locationsList = this.journeys.map((journey) => journey.endLocation);
  return locationsList;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter((journey) => journey.transport === transport);
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter((journey) => journey.distance >= minDistance);
  return journeys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, journey) => total + journey.distance, 0)
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransport = this.journeys.map((journey) => journey.transport);
  const unique = Array.from(new Set(allTransport));
  return unique;
};

module.exports = Traveller;
