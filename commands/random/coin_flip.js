const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flips a coin'
        });
    }

    async run(message, args) {
        const possibilities = ["heads", "tails"];
        var flip = Math.floor(Math.random() * 2);

        message.reply("Coin landed on **" + 
        possibilities[flip] + "**");
    }
}

module.exports = CoinFlipCommand;