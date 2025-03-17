import { EventEmitter } from "events";
import fs from "fs/promises";
import path from "path";

const eventEmitter = new EventEmitter();

const LOG_FILE_PATH = path.join(__dirname, "../../logs.txt");

const writeLog = async (level: string, message: string) => {
  try {
    const timestamp = new Date().toISOString().replace("T", " ").split(".")[0];
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log("hello", LOG_FILE_PATH);
    await fs.appendFile(LOG_FILE_PATH, logMessage);
    console.log("Log written succesfully.");
  } catch (err) {
    console.error("Problem with writing logs", err);
  }
};

eventEmitter.once("log", (level: string, message: string) => {
  writeLog(level, message);
});

export default eventEmitter;
