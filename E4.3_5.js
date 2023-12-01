// объявляем родительский класс
class Device{
    constructor(){
      this.power_status = "unplugged";
    }
    
    switch(){
      if (this.power_status == "unplugged") {
        console.log(`Current power device status is: ${this.power_status}`);
        return this.power_status = "plugged";
      } else {
        console.log(`Current power device status is: ${this.power_status}`);
        return this.power_status = "unplugged";
      }
    }
  };
  
  // объявляем класс наследника для осветительных приборов
  class LigthDevice extends Device {
    constructor(name, color_temperature) {
      super();
      this.name = name;
      this.color_temperature = color_temperature;
    }
  
    change_temp(kelvin) {
      if ((this.color_temperature + kelvin >= 1000) && (this.color_temperature + kelvin <= 10000)) {
        let result = this.color_temperature + kelvin;
        console.log(`Temperature changed from ${this.color_temperature}k to ${result}k`)
        return this.color_temperature = result;
      } else {
        console.log('You try to set light temperature in invalid range: acceptable range is between 1000k and 10000k!')
      }
      
    }
  }
  
  
  // объявляем класс наследника для чистящих приборов
  class CleanDevice extends Device{
    constructor(name, mode){
      super();
        this.name = name;
        this.mode = mode; // automatic/manual
        this.work_speed = 1;
    }
    
    change_speed(speed) {
      console.log(`Speed is changed to ${speed}`);
      return this.work_speed = speed;
    }
  }
  
  
  // создаём по экземпляру для каждого класса (осветительные приборы и чистящие приборы)
  const lamp = new LigthDevice("Main lighting lamp", 2000);
  const vacuum_cleaner = new CleanDevice("Vaccum","manual");
  
  // выводим инфу в консоль
  console.log(vacuum_cleaner, lamp)
  
  // пробуем менять теплоту света
  console.log('-----Работа с лампой-----')
  console.log(`Current temperature = ${lamp.color_temperature}k`)
  lamp.change_temp(-1000)
  console.log(`Current temperature = ${lamp.color_temperature}k`)
  lamp.change_temp(-1000)
  
  
  // пробуем менять скорость работы
  console.log('-----Работа с пылесосом-----')
  console.log(vacuum_cleaner.work_speed)
  vacuum_cleaner.change_speed(2)
  console.log(vacuum_cleaner.work_speed)
  