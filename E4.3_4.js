// объявляем родительскую функцию-конструктор
function Device(){
  
    this.power_status = "unplugged",
    this.switch = function (){
      if (this.power_status == "unplugged") {
        console.log('Current power device status is:');
        return this.power_status = "plugged";
      } else {
        console.log('Current power device status is:');
        return this.power_status = "unplugged";
      }
    }
  };
  
  // объявляем функцию-конструктор наследника для осветительных приборов
  function LigthDevice(name, color_temperature) {
    this.name = name,
    this.color_temperature = color_temperature,
    this.change_temp = function(kelvin) {
      
      if ((this.color_temperature + kelvin >= 1000) && (this.color_temperature + kelvin <= 10000)) {
        let result = this.color_temperature + kelvin;
        console.log(`Temperature changed from ${this.color_temperature}k to ${result}k`)
        return this.color_temperature = result;
      } else {
        console.log('You try to set light temperature in invalid range: acceptable range is between 1000k and 10000k!')
      }
      
    }
  }
  
  // указываем наследование от родительской функции
  LigthDevice.prototype = new Device();
  
  
  // объявляем функцию-конструктор наследника для чистящих приборов
  function CleanDevice(name, mode) {
    this.name = name,
    this.mode = mode, // automatic/manual
    this.work_speed = 1,
    this.change_speed = function(speed) {
      console.log(`Speed is changed to ${speed}`);
      return this.work_speed = speed;
      
    }
  }
  
  // указываем наслеование от родительской функции
  CleanDevice.prototype = new Device();
  
  
  // создаём по экземпляру для каждой функции (осветительные приборы и чистящие приборы)
  const lamp = new LigthDevice("Main lighting lamp", 2000);
  const vacuum_cleaner = new CleanDevice("Vaccum","manual");
  
  // выводим инфу в консоль
  console.log(vacuum_cleaner, lamp)
  
  // пробуем менять теплоту света
  console.log(`Current temperature = ${lamp.color_temperature}k`)
  lamp.change_temp(-1000)
  console.log(`Current temperature = ${lamp.color_temperature}k`)
  lamp.change_temp(-1000)
  
  // пробуем менять скорость работы
  console.log(vacuum_cleaner.work_speed)
  vacuum_cleaner.change_speed(2)
  console.log(vacuum_cleaner.work_speed)
  