const { readdirSync } = require("fs");
const getPrefix = require("../db/getPrefix");

module.exports = async client => {
    client.on('message', async message => {
        const prefix = await getPrefix(message);

        if (message.author.bot) return;
        if (!message.channel.guild) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.trim().slice(prefix.length).split(" ");
        const command = args.shift().trim().toLowerCase();

        try {
            const commandFile = require(`../commands/${command}.js`);
            if (commandFile) commandFile(message, client, args);
        } catch (e) {
            await message.channel.send(`Command ${prefix}${command} not found, use ${prefix}help to see all commands`)
        }
    });
};
