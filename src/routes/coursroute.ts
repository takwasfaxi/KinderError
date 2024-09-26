import express from 'express';
import { ajouterCours, supprimerCours, obtenirCours } from '../Controllers/CoursController';

const router = express.Router();

// Route pour ajouter un cours
router.post('/addcours', ajouterCours);

// Route pour supprimer un cours
router.delete('/deletecours/:id', supprimerCours);

// Route pour récupérer tous les cours (facultatif)
router.get('/getcours', obtenirCours);

export default router;
