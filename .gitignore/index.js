const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame('Command: /help');
    console.log("Connected");
});

bot.login("NjIyNzA1ODg4MTAwMDg5ODY3.XYeuNw.-XVg8JCcWrgca_lzBVxCcegQVNg");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage('Liste des commandes: \n -/help');
    }

    if (message.content === "Heyy"){
        message.reply("Coucou hi hi ^^");
        console.log("Commande Salut effectué");
    }
});
