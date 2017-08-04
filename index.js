const commando = require('discord.js-commando');
const bot = new commando.Client();

console.log("running ...");

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', (message) => {
    if(message.content == "ping") {
        message.reply("pong");
    }
});

bot.login('MzQyNzQ1MTU1ODk3MzkzMTUy.DGUGHA.EwhUeqA6_YOq2mzYI9q-12TVteE');
