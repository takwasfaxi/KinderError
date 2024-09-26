import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface représentant les attributs d'une salle
export interface ISalle extends Document {
    numero_salle: number;
    capacite: number;
}

// Schéma de Mongoose pour la salle
const SalleSchema: Schema = new Schema({
    numero_salle: {
        type: Number,
        required: true,
        unique: true, 
    },
    capacite: {
        type: Number,
        required: true,
    },
});

// Export du modèle "Salle"
export default mongoose.model<ISalle>('Salle', SalleSchema);