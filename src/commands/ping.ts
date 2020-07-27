import { Command } from "../core/commands";
import { replies } from "../constants";

/**
 * Ping command. Bot replies "Pong!", useful for checking is bot alive.
 */
export default new Command('ping', (client, message) => {
    void message.channel.send(replies.PONG);
});
