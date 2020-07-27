import { Command } from "../core/commands";
import { replies } from "../constants";
import vm from "vm";

/**
 * Eval command. Evaluates JavaScript code.
 * Requires Administrator permission.
 */
export default new Command('eval', (client, message, ...code) => {
    const { member, channel } = message;

    if (!member.hasPermission('ADMINISTRATOR')) {
        void channel.send(replies.PERMISSIONS);
    } else {
        try {
            const result = vm.runInNewContext(code.join(' '), {
                require: undefined,
                process: undefined,
                __dirname, __filename
            });

            void channel.send(`Result: ${(result as string)}`);
        } catch (err) {
            void channel.send(`Result: ${(err as Error).message}`);
        }
    }
});
