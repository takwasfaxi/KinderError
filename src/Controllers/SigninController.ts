import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/userModel';
import { validationResult } from 'express-validator';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

//fonction sign in
export const signIn = async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
  
    try {
      // Vérification si l'utilisateur existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Identifiants invalides' });
      }
  
      // Vérification du mot de passe
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Identifiants invalides' });
      }
  
      // Génération du JWT
      const payload = {
        user: {
          id: user.id,
          role: user.role
        }
      };
  
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  
      return res.status(200).json({ token });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
  };

