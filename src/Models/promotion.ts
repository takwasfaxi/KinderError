import { Schema, model, Document } from 'mongoose';


export interface IPromotion extends Document {
    nomPromo: string;
    dateDebut: Date;
    dateFin: Date;
    anneeScolaire: string;
    description: string;
}

const PromotionSchema: Schema = new Schema({
    nomPromo: {
        type: String,
        required: true,
        trim: true,
    },
    dateDebut: {
        type: Date,
        required: true,
    },
    dateFin: {
        type: Date,
        required: true,
    },
    anneeScolaire: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true, 
});


const Promotion = model<IPromotion>('Promotion', PromotionSchema);

export default Promotion;
