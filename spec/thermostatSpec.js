describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('is in power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('increases the temperature', function(){
    thermostat.up(3);
    expect(thermostat.temperature).toEqual(23);
  });

  it('decreases the temperature', function(){
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('throws an error when trying to go below 10', function(){
    expect(function() {thermostat.down(11) }).toThrow("Min temperature of 10 reached");
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a max temp', function(){
    expect(thermostat.maxTemp()).toEqual(25);
  });

  it('throws an error when trying to go above max temp', function(){
    expect(function() {thermostat.up(13) }).toThrow("max temperature reached");
    expect(thermostat.temperature).toEqual(25);
  });

  it('changes max temp when run', function(){
    expect(function() {thermostat.up(13) }).toThrow("max temperature reached");
    expect(thermostat.temperature).toEqual(25);
  });

  it('changes the power saving mode', function(){
    thermostat.togglePowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it('sets the maximum temperature to 32 when not in PSM', function() {
    thermostat.togglePowerSavingMode();
    expect(thermostat.maxTemp()).toEqual(32);
  });

});
