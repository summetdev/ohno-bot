import { Client, ClientEvents } from "discord.js";
import fs from "fs";
import path from "path";

/**
 * Helper type.
 */
type EventModule = {
    default: Event<never>
}

/**
 * Client event.
 */
export class Event<K extends keyof ClientEvents> {

    /** Event name. */
    public readonly name: K;

    /** Event listener. */
    public readonly listener: (client: Client, ...args: ClientEvents[K]) => void;

    /**
     * Event constructor.
     * @param name - Event name.
     * @param listener - Event listener.
     */
    constructor(name: K, listener: (client: Client, ...args: ClientEvents[K]) => void) {
        this.name = name;
        this.listener = listener;
    }
}

/**
 * Class for adding client events.
 */
export class EventsHandler {

    /** Client for events. */
    private readonly client: Client;

    /**
     * Events handler constructor.
     * @param client - Client for events.
     */
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Add new event.
     * @param event - Event to be added.
     */
    public add<K extends keyof ClientEvents>(event: Event<K>): void {
        this.client.on(event.name, (...args) => event.listener(this.client, ...args));
    }

    /**
     * Load events from directory.
     * @param dirPath - An absolute path to directory with events files.
     */
    public loadDir(dirPath: string): void {
        fs.readdirSync(dirPath).forEach((file) => {
            void import(path.resolve(dirPath, file)).then((module: EventModule) => {
                this.add(module.default);
            });
        });
    }
}
