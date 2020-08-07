import Logger from "./logger";

export default function errorHandler(error: Error): void {
    Logger.error(`${error.stack}`);
    process.exit(0);
}
