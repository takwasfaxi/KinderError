import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Kindergarten extends Document {
  name: string;
  description: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  secondaryPhoneNumber?: string;
  email: string;
  website?: string;
  position: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  closingHours: string;
  capacity: number;
  currentEnrollment: number;
  levels: string[];
  servicesOffered: string[];
  facilities: string[];
  directorName: string;
  staffCount: number;
  foundedYear: number;
  accreditation: string;
  
  reviews?: {
    rating: number;
    comments: string[];
  }[];
  payant: boolean;
  active: boolean;
}


const KindergartenSchema: Schema = new Schema({
  name: { type: String, required: [true, 'Le nom est requis'] },
  description: { type: String, required: [true, 'La description est requise'] },
  address: { type: String, required: [true, 'L\'adresse est requise'] },
  city: { type: String, required: [true, 'La ville est requise'] },
  postalCode: { type: String, required: [true, 'Le code postal est requis'] },
  country: { type: String, required: [true, 'Le pays est requis'] },
  phoneNumber: { type: String, required: [true, 'Le numéro de téléphone est requis'] },
  secondaryPhoneNumber: { type: String },
  email: { type: String, required: [true, 'L\'email est requis'] },
  website: { type: String },
  position: {
    latitude: { type: Number, required: [true, 'La latitude est requise'] },
    longitude: { type: Number, required: [true, 'La longitude est requise'] }
  },
  openingHours: { type: String, required: [true, 'Les heures d\'ouverture sont requises'] },
  closingHours: { type: String, required: [true, 'Les heures de fermeture sont requises'] },
  capacity: { type: Number, required: [true, 'La capacité est requise'] },
  currentEnrollment: { type: Number, required: [true, 'L\'effectif actuel est requis'] },
  levels: { type: [String], required: [true, 'Les niveaux sont requis'] },
  servicesOffered: { type: [String], required: [true, 'Les services offerts sont requis'] },
  facilities: { type: [String], required: [true, 'Les installations sont requises'] },
  directorName:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  staffCount: { type: Number, required: [true, 'Le nombre de personnel est requis'] },
  foundedYear: { type: Number, required: [true, 'L\'année de fondation est requise'] },
  accreditation: { type: String, required: [true, 'L\'accréditation est requise'] },
  
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'reviews' }
  ],
  salle: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Salle' }
  ],
  payant: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
});

const Kindergarten: Model<Kindergarten> = mongoose.model<Kindergarten>('Kindergarten', KindergartenSchema);

export default Kindergarten;
