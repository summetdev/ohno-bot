const Guild = require("./models/Guild");

module.exports = async message => {
    try {
        const guild = await Guild.findOne({ id: message.guild.id });
        return guild.prefix;
    } catch (e) {
        console.error(e);
    }
}