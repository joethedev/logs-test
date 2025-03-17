import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await registerUser(username, email, password);
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    if (!token) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
};