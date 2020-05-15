const { readdirSync } = require("fs");
const { connect } = require("mongoose");
const { Client } = require("discord.js");
const { token, mongodbUri } = require("./config.json");

const client = new Client();

function start() {
    return new Promise(async (resolve, reject) => {
        try {
            await connect(mongodbUri, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, () => console.log("> Database connected."));

            await readdirSync(`${__dirname}/events/`).forEach(file => {
                require(`./events/${file}`)(client);
                // console.log(`> ${file} loaded.`);
            });
            await client.login(token);
        } catch (e) {
            reject(e);
        }
    });
}

start();
