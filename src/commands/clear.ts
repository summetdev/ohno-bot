import { Command } from '../core/commands';
import { replies } from "../constants";

/**
 * Clear command. Clears chat with specified messages limit.
 * Requires Manage Messages permission.
 */
export default new Command('clear', (client, message, limit) => {
    const { member, channel } = message;

    if (!member.hasPermission('MANAGE_MESSAGES')) {
        void channel.send(replies.PERMISSIONS);
    } else if (!isValidInt(limit)) {
        void channel.send(replies.INVALID_ARGS);
    } else {
        void channel.messages.fetch({ limit: +limit }).then((messages) => {
            void channel.bulkDelete(messages);
        });

        void channel.send(replies.DELETED);
    }
});

/**
 * Check int for "clear" command.
 * @param int - Number to be checked.
 */
function isValidInt(int: number | string): boolean {
    return +int && +int > 0 && +int <= 100;
}
