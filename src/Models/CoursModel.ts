import mongoose, { Schema, Document } from 'mongoose';

// Interface représentant les attributs d'un cours
export interface ICours extends Document {
    nom: string;
    salle: mongoose.Types.ObjectId; // Référence à une salle
}

// Schéma de Mongoose pour le cours
const CoursSchema: Schema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    salle: {
        type: Schema.Types.ObjectId,
        ref: 'Salle', // Référence au modèle Salle //Grâce à cette référence, vous pouvez utiliser la méthode populate() pour récupérer les informations de la salle associée
        required: true,
    },
});

// Export du modèle "Cours"
export default mongoose.model<ICours>('Cours', CoursSchema);
