import { Request, Response } from 'express';
import Salle from '../Models/SalleModel'; // Modèle de Salle
import Cours from '../Models/CoursModel'; // Modèle de Cours
import mongoose from 'mongoose';
import Kindergarten from "../Models/kinderModel"

// Création d'une nouvelle salle et assignation à un cours
export const ajouterSalle = async (req: Request, res: Response) => {
    const { numero_salle, capacite, coursId } = req.body;
    const {idkinder}=req.params

    try {
        const nouvelleSalle = new Salle({ numero_salle, capacite });
        const salleCreee = await nouvelleSalle.save();

      await   Kindergarten.findByIdAndUpdate({_id:idkinder},{$push:{salle:salleCreee._id}})
        // Mettre à jour le cours pour assigner cette nouvelle salle
        await Cours.findByIdAndUpdate(coursId, { salle: salleCreee._id }); //associé l'id de cours avec l'id de salle

        res.status(201).json({ message: 'Salle ajoutée et assignée au cours', salle: salleCreee });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'ajout de la salle' });
    }
};

export const supprimerSalle = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Vérifiez que l'ID est un ObjectId valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID de salle invalide' });
    }

    try {
        // Vérifier si des cours sont associés à cette salle
        const coursAssocies = await Cours.find({ salle: id });

        // Mettre à jour les cours pour supprimer l'association avec la salle
        await Cours.updateMany({ salle: id }, { $unset: { salle: "" } });

        // Supprimer la salle
        const salleSupprimee = await Salle.findByIdAndDelete(id);

        if (!salleSupprimee) {
            return res.status(404).json({ error: 'Salle non trouvée' });
        }

        res.status(200).json({ message: 'Salle supprimée et les cours associés ont été mis à jour' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la suppression de la salle' });
    }
};

// Liste de toutes les salles
export const obtenirSalles = async (req: Request, res: Response) => {
    try {
        const salles = await Salle.find();
        res.status(200).json(salles);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des salles' });
    }
};


