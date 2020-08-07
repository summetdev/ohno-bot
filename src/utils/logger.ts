import { colors } from "../constants";

/**
 * Logger class for colored logs.
 */
export default class Logger {

    /**
     * Log a message with reset color.
     * @param text - Text to be logged.
     */
    private static log(text: string): void {
        console.log(`> ${text}${colors.reset}`);
    }

    /**
     * Log a message with blue color.
     * @param text - Text to be logged.
     */
    public static info(text: string): void {
        this.log(`${colors.font.blue}${text}`);
    }

    /**
     * Log a message with red color.
     * @param text - Text to be logged.
     */
    public static error(text: string): void {
        this.log(`${colors.font.red}${text}`);
    }
}
