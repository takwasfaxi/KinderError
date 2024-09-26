import express from 'express';
import { ajouterSalle, supprimerSalle, obtenirSalles } from '../Controllers/SalleController';

const router = express.Router();

// Route pour ajouter une salle
router.post('/addsalle', ajouterSalle);

// Route pour supprimer une salle
router.delete('/deletesalle/:id', supprimerSalle);

// Route pour récupérer toutes les salles (facultatif)
router.get('/getsalles', obtenirSalles);

export default router;
