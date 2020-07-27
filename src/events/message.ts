import { Event } from "../core/events";
import { emojis, ohnoRegExp } from "../constants";

/**
 * Detect "oh no" messages and put an emoji to it.
 */
export default new Event('message', (client, message) => {
    if (ohnoRegExp.exec(message.content)) {
        void message.react(emojis.error.id);
    }
});
