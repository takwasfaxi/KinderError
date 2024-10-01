import mongoose, { Schema, Document, Model } from 'mongoose';


export interface IRepasMaternelle extends Document {
  nomRepas: string;         
  description?: string;     
  prix: number;            
  allergies?: string[];     
  vegetarien: boolean;     
  personnalisation?: string; 
}

const RepasMaternelleSchema: Schema = new Schema({
  nomRepas: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: false,
  },
  prix: {
    type: Number,
    required: true,
  },
  allergies: {
    type: [String],  
    required: false,
  },
  vegetarien: {
    type: Boolean,
    required: true,
  },
  personnalisation: {
    type: String,
    required: false, 
  },
}, {
  timestamps: true,  
});

const RepasMaternelle: Model<IRepasMaternelle> = mongoose.model<IRepasMaternelle>('RepasMaternelle', RepasMaternelleSchema);

export default RepasMaternelle;
