module.exports = async (message, client, args) => {
    await message.channel.send(Math.round(Math.random()));
}