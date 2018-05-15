describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature', function(){
    thermostat.up(3);
    expect(thermostat.temperature).toEqual(23);
  });

  it('decreases the temperature', function(){
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });

});
