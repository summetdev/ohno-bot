const Guild = require("../db/models/Guild");

module.exports = async (message, client, args) => {
    try {
        const guild = await Guild.findOne({ id: message.guild.id });
        const prefix = args[0];

        if (!prefix) {
            return await message.channel.send(`Prefix: "${guild.prefix}"`);
        }
        guild.prefix = prefix;
        await guild.save();
        return await message.channel.send(`Set guild prefix to "${prefix}"`);
    } catch (e) {
        console.log(e);
    }
};