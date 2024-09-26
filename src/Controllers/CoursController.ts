import { Request, Response } from 'express';
import Cours from '../Models/CoursModel'; // Modèle de Cours
import Salle from '../Models/SalleModel'; // Modèle de Salle


// Création d'un nouveau cours et assignation à une salle
export const ajouterCours = async (req: Request, res: Response) => {
    const { nom, salleId } = req.body;

    try {
        const nouvelleCours = new Cours({ nom, salle: salleId });
        const coursCree = await nouvelleCours.save();

        res.status(201).json({ message: 'Cours ajouté et salle assignée', cours: coursCree });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'ajout du cours' });
    }
};
// Suppression d'un cours et mise à jour de la salle associée
export const supprimerCours = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Supprimer le cours
        const coursSupprime = await Cours.findByIdAndDelete(id);

        if (coursSupprime && coursSupprime.salle) {
            // Mettre à jour la salle pour supprimer l'association avec ce cours
            await Salle.findByIdAndUpdate(coursSupprime.salle, { $unset: { cours: "" } });
        }

        res.status(200).json({ message: 'Cours supprimé et salle associée mise à jour' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du cours' });
    }
};

// Liste de tous les cours
export const obtenirCours = async (req: Request, res: Response) => {
    try {
        const cours = await Cours.find().populate('salle'); // Populate pour inclure les détails de la salle
        res.status(200).json(cours);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des cours' });
    }
};
