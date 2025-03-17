import { readLogs } from '../models/logModel';

export const getLogs = (
  level?: string,
  search?: string,
  from?: string,
  to?: string
) => {
  const logs = readLogs();
  const fromDate = from ? new Date(from) : undefined;
  const toDate = to ? new Date(to) : undefined;
  if (level) {
    return logs.filter((log) => log.level === level);
  }
  if (search) {
    return logs.filter((log) => log.message.includes(search));
  } 
  if (fromDate && toDate) {
    return logs.filter((log) => log.timestamp >= fromDate && log.timestamp <= toDate); 
  }
  return logs;
};