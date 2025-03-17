import bcrypt from 'bcryptjs';
import User, { IUser } from '../models/userModel';
import { generateToken } from '../utils/jwtUtils';

export const registerUser = async (username: string, email: string, password: string): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  return user.save();
};

export const loginUser = async (email: string, password: string): Promise<string | null> => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  return generateToken(user.id.toString());
};