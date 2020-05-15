const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports = async (message, client, args) => {
    await message.channel.send("В разработке...");
}