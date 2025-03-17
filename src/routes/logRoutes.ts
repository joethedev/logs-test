import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { getLogsHandler } from '../controllers/logController';

const router = express.Router();

router.get('/logs', authenticate, getLogsHandler);

export default router;