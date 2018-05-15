function Thermostat() {
  this.temperature = 20

}

Thermostat.prototype.up = function(increment) {
  this.temperature += increment;
}

Thermostat.prototype.down = function(decrement) {
  for (var i = 0; i < decrement; i++) {
    if (this.temperature == 10 ) { throw "Min temperature of 10 reached"};
    this.temperature--;
  }
}
