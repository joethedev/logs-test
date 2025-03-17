import fs from 'fs';
import path from 'path';

interface LogEntry {
  timestamp: Date;
  level: string;
  message: string;
}



const logsFilePath = path.join(__dirname, '../../var/logs.txt');
const logData = fs.readFileSync(logsFilePath, 'utf-8');
const logRegex = /^\[(.*?)\] \[(.*?)\] (.*)$/gm;

const logsArray: LogEntry[] = [];

export const readLogs = (): LogEntry[] => {
  let match;
  while ((match = logRegex.exec(logData)) !== null) {
      const [_, date, level, description] = match;
      logsArray.push({
          timestamp: new Date(date),
          level: level,
          message: description
      });
  }
  return logsArray;
};

// export const filterLogs = (
//   logs: LogEntry[],
//   level?: string,
//   search?: string,
//   from?: Date,
//   to?: Date
// ): LogEntry[] => {
//   return logs.filter((log) => {
//     if (level && log.level !== level) return false;
//     if (search && !log.message.includes(search)) return false;
//     if (from && log.timestamp < from) return false;
//     if (to && log.timestamp > to) return false;
//     return true;
//   });
// };