import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITarifMaternelle extends Document {
  typeService: string;       
  tarifJournalier: number;   
  tarifDemiJournee: number;   
  tarifHebdomadaire: number;  
  coutRepas: number;        
  coutGardeProlongee: number; 
  description?: string;       
}


const TarifMaternelleSchema: Schema = new Schema({
  typeService: {
    type: String,
    required: true,  
  },
  tarifJournalier: {
    type: Number,
    required: true,
  },
  tarifDemiJournee: {
    type: Number,
    required: true,
  },
  tarifHebdomadaire: {
    type: Number,
    required: true,
  },
  coutRepas: {
    type: Number,
    required: true,
  },
  coutGardeProlongee: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
}, {
  timestamps: true, 
});

const TarifMaternelle: Model<ITarifMaternelle> = mongoose.model<ITarifMaternelle>('TarifMaternelle', TarifMaternelleSchema);

export default TarifMaternelle;
