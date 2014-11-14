var cylon = require('cylon');

cylon.robot({
    connection: { name: 'edison', adaptor: 'intel-iot' },
    devices: [
        { name: 'pin13', driver: 'led', pin: 13 },
        { name: 'light', driver: 'analogSensor', pin: 0 },
    ]
}).on('ready', function (eddie) {
    every((0.1).second(), function () {
        var level = eddie.light.analogRead();
        console.log(level);
        if (level > 1000) eddie.pin13.turnOn();
        else eddie.pin13.turnOff();
    });
}).start();