const Guild = require("../db/models/Guild");
const { defaultPrefix } = require("../config.json");

module.exports = client => {
    client.on("guildCreate", async guild => {
        const newGuild = await new Guild({ prefix: defaultPrefix, id: guild.id });
        await newGuild.save();
        console.log(`${guild.name} added to database`);
    });
};