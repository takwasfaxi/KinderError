import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../Models/userModel';


const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret'; //Si la variable d'environnement n'est pas définie, une clé par défaut est utilisée pour éviter des erreurs.

//la fonction signup
export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req); // Vérifie si les données envoyées par l'utilisateur (comme l'email et le mot de passe) sont conformes aux règles de validation définies dans la route d'inscription
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { nom, prenom, email, password, role } = req.body;

  try {
    // Vérification si l'utilisateur existe déjà
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "L'utilisateur existe déjà" });
    }

    // Création d'un nouvel utilisateur
    user = new User({
      nom,
      prenom,
      email,
      password, // Le mot de passe sera haché avant d'être sauvegardé
      role
    });

    // Hachage du mot de passe
    const salt = await bcrypt.genSalt(10); //énère un "sel" (salt), c'est-à-dire une donnée aléatoire qui est ajoutée au mot de passe pour rendre le hachage plus sûr
    user.password = await bcrypt.hash(password, salt);

    // Sauvegarde de l'utilisateur
    await user.save();

    // Génération du JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Erreur serveur');
  }
};