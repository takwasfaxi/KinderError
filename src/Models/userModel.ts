import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string;
  
  password: string;
  role:string
}


const UserSchema: Schema = new Schema({
  nom: { type: String, required: [true, 'Le nom est requis'] },
  prenom: { type: String, required: [true, 'Le prénom est requis'] },
  email: { type: String, required: [true, 'Ls\'email est requis'], unique: true },

  role: { type: String, required: [true, 'La date de naissance est requise'],enum:["user","admin"] },
  password: { type: String, required: [true, 'Le mot de passe est requis'],  }
});


const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;
