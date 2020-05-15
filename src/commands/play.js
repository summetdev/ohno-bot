const ytdl = require("ytdl-core");

module.exports = async (message, client, args) => {
    const link = args[0];
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
        return await message.channel.send("You're not in voice channel!");
    }
    const voiceConnection = await voiceChannel.join();

    voiceConnection.play(ytdl(link, { filter: 'audioonly' }));
}