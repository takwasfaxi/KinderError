import mongoose, { Schema, Document, Model } from 'mongoose';
import Kindergarten from "./kinderModel"
interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  confirmed:boolean;
  codeconfirmation:number;
  active:boolean;
  role:string;
  kinders: mongoose.Types.ObjectId[]; 

}


const UserSchema: Schema = new Schema({
  nom: { type: String,  },
  prenom: { type: String,},
  email: { type: String, required: [true, 'Ls\'email est requis'] },

  role: { type: String,enum:["webmaster","admin","teacher","parent"], required: [true, 'La date de naissance est requise'] },
  password: { type: String, required: [true, 'Le mot de passe est requis'],  },
  kinders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Kindergarten' }], 
});


const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;
