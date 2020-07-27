/**
 * Bot token.
 */
export const token = process.env.BOT_TOKEN;

/**
 * Default bot prefix.
 */
export const defaultPrefix = '.';

/**
 * Regular expression for detecting "oh no" in a string.
 */
export const ohnoRegExp = new RegExp(/oh( +)?no/gi);

/**
 * Bot's emojis.
 */
export const emojis = {
    error: {
        name: '<:emojis_error:731872209181605950>',
        id: '731872209181605950',
    },
}

/**
 * Bot's replies to commands.
 */
export const replies = {
    PERMISSIONS: `You haven't enough permissions to use this command! ${emojis.error.name}`,
    DELETED: 'Messages successfully deleted. ',
    PONG: 'Pong!',
    INVALID_ARGS: `Invalid arguments! ${emojis.error.name}`,
};

/**
 * Terminal colors.
 */
export const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    font: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m"
    },
    back: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};
