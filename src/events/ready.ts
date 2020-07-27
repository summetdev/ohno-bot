import { Event } from '../core/events';
import Logger from "../utils/logger";

/**
 * Event to detect when bot is ready.
 */
export default new Event('ready', (client) => {
    const { username, discriminator } = client.user;
    Logger.info(`> Bot is logged in as "${username}#${discriminator}"`);
});
