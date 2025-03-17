import { Request, Response } from 'express';
import { getLogs } from '../services/logService';

export const getLogsHandler = async (req: Request, res: Response): Promise<void> => {
  const { level, search, from, to } = req.query;
  try {
    const logs = getLogs(
      level as string,
      search as string,
      from as string,
      to as string
    );
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
};