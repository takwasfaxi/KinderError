import express from 'express';
import { check } from 'express-validator';
import { signUp } from '../Controllers/SingupController';
import { signIn } from '../Controllers/SigninController';

const router = express.Router();
// Route pour l'inscription
router.post(
    '/signup',
    [
      check('nom', 'Le nom est requis').not().isEmpty(),
      check('prenom', 'Le prénom est requis').not().isEmpty(),
      check('email', "L'email est requis et doit être valide").isEmail(),
      check('password', 'Le mot de passe doit contenir au moins 6 caractères').isLength({ min: 6 })
    ],
    signUp
  );

  // Route pour la connexion 
  router.post(
    '/signin',
    [
        check('email', 'Un email valide est requis').isEmail(),
        check('password', 'Le mot de passe est requis').not().isEmpty()
    ],
    signIn
  );

  
  export default router;