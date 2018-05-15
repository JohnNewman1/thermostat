function Thermostat() {
  this.temperature = 20
  this.maxTemp = 32

}

Thermostat.prototype.up = function(increment) {
  this.temperature += increment;
  if (this.temperature >= this.maxTemp) {
    this.temperature = this.maxTemp;
    throw "max temperature reached"
  }
}

Thermostat.prototype.down = function(decrement) {
  for (var i = 0; i < decrement; i++) {
    if (this.temperature == 10 ) { throw "Min temperature of 10 reached"};
    this.temperature--;
  }
}
