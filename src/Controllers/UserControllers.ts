import { Request, Response } from 'express';
import bcryptjs from "bcryptjs"
import UserModel from "../Models/userModel"
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const {nom,
        prenom,
      
        password}=req.body
        const email=req.body.email.toLowerCase().trim()
        console.log(nom,prenom,password,email);
        
        const existeuser=await UserModel.findOne({email:email})
        if (existeuser){
             res.status(401).json({message:"user already exist with this mail"})
        }else{
            const salt= await bcryptjs.genSalt(16)
            const passwords= await bcryptjs.hash(password,salt)
            const new_user=new UserModel({
                nom:nom,
                prenom:prenom,
              
                email:email,
                password:passwords,
                role:"user"
            })
            await new_user.save()
            res.status(201).json({ message: 'Utilisateur créé avec succès' });
        }
 
    
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
};
