function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(increment) {
  this.temperature += increment;
  var maxTemp = this.maxTemp();
  if (this.temperature > maxTemp) {
    this.temperature = maxTemp;
    throw "max temperature reached"
  }
}

Thermostat.prototype.down = function(decrement) {
  for (var i = 0; i < decrement; i++) {
    if (this.temperature == 10 ) { throw "Min temperature of 10 reached"};
    this.temperature--;
  }
}

Thermostat.prototype.togglePowerSavingMode = function() {
  if(this.powerSavingMode == true) {
      this.powerSavingMode = false;
  }
  else {
    this.powerSavingMode = true;
  }
}

Thermostat.prototype.maxTemp = function() {
  if (this.powerSavingMode) { return 25; }
  else { return 32; }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {return "low-usage";}
  else if (this.temperature < 25) {return "medium-usage";}
  else {return "high-usage";}
}
