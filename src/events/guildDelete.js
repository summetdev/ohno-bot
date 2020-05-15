const Guild = require("../db/models/Guild");

module.exports = client => {
    client.on('guildDelete', async guild => {
        const removeGuild = await Guild.findOne({ id: guild.id });
        await removeGuild.remove();
        console.log(`${guild.name} removed from database`);
    })
}