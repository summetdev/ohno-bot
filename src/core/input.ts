import { Interface, createInterface } from 'readline';
import { Client, TextChannel } from "discord.js";

/**
 * Class for sending messages as bot.
 */
export class MessageInput {

    /** Client to send messages. */
    private client: Client;

    /** Input tool. */
    private readline: Interface;

    /** Is messages input enabled. Defaults to false. */
    public enabled: boolean;

    /**
     * Message input constructor.
     * @param client - Client to send messages.
     */
    constructor(client: Client) {
        this.client = client;
        this.readline = createInterface({ input: process.stdin, output: process.stdout });
    }

    /**
     * Enable messages input.
     * @param channelId - Channel id to send messages.
     */
    public start(channelId: string): void {
        this.enabled = true;
        this.readline.question('Your message:\n', (answer) => {
            const channel = this.client.channels.cache.get(channelId);
            void (channel as TextChannel).send(answer);

            if (!this.enabled) return; else this.start(channelId);
        });
    }

    /**
     * Disable messages input.
     */
    public disable(): void {
        this.enabled = false;
    }
}
