import fs from "fs";
import path from "path";

interface LogEntry {
  timestamp: Date;
  level: string;
  message: string;
}

const logsFilePath = path.join(__dirname, "../../var/logs.txt");
const logData = fs.readFileSync(logsFilePath, "utf-8");
const logRegex = /^\[(.*?)\] \[(.*?)\] (.*)$/gm;

const logsArray: LogEntry[] = [];

export const readLogs = (): LogEntry[] => {
  let match;
  while ((match = logRegex.exec(logData)) !== null) {
    const [_, date, level, description] = match;
    logsArray.push({
      timestamp: new Date(date),
      level: level,
      message: description,
    });
  }
  return logsArray;
};
