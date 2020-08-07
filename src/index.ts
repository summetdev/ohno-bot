import { Client } from 'discord.js';
import { CommandsHandler } from './core/commands';
import { EventsHandler } from './core/events';
import { token } from './constants';
import errorHandler from './utils/errorHandler';
import path from "path";

/** Handle all non handled errors. */
process.on('unhandledRejection', errorHandler);
process.on('uncaughtException', errorHandler);

const client: Client = new Client();

const commands: CommandsHandler = new CommandsHandler(client);
const events: EventsHandler = new EventsHandler(client);

/** Load commands from ./commands/ folder. */
commands.loadDir(path.join(__dirname, 'commands'));

/** Load events from ./events/ folder. */
events.loadDir(path.join(__dirname, 'events'));

void client.login(token);
