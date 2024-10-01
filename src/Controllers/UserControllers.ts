import { Request, Response } from 'express';
import bcryptjs from "bcryptjs"
import UserModel from "../Models/userModel"
import nodemailer from "nodemailer"

import crypto from 'crypto';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: 'younesmanita975@gmail.com',
      pass: 'juxv pbpm osgp nqfd',
  },
  tls: {
      rejectUnauthorized: false
  },
});
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






const generateRandomPassword = () => {
  return crypto.randomBytes(8).toString('hex'); 
};


export const createUser = async (req:Request, res:Response) => {
  try {
    const { email, role } = req.body;
    

    if (!email || !role) {
      return res.status(400).json({ message: 'L\'email et le rôle sont requis' });
    }

  
    const password = generateRandomPassword();

   
    const hashedPassword = await bcryptjs.hash(password, 10);


    const newUser = new UserModel({
      email,
      password: hashedPassword,
      role,
      confirmed: false,  
      codeconfirmation: Math.floor(100000 + Math.random() * 900000),  
      active: false,  
    });


    const savedUser = await newUser.save();

 
    await sendConfirmationEmail(savedUser.email, password, savedUser.codeconfirmation);

    res.status(201).json({ message: 'Utilisateur créé avec succès, un email a été envoyé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const sendConfirmationEmail = async (email:string, password:string, codeconfirmation:number) => {
 
  const mailOptions = {
    from: 'votre-email@gmail.com',
    to: email,
    subject: 'Confirmation de votre compte',
    html: `
   
<html>
<head>

  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .email-container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    .email-header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eaeaea;
    }

    .email-header img {
      max-width: 120px;
    }

    .email-body {
      font-size: 16px;
      color: #333333;
      padding: 20px 0;
    }

    .email-body p {
      margin: 0 0 15px;
    }

    .btn {
      background-color: #ff5722;
      color: #ffffff;
      padding: 12px 24px;
      text-align: center;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      display: inline-block;
      margin-top: 20px;
    }

    .email-footer {
      font-size: 14px;
      color: #999999;
      text-align: center;
      padding-top: 30px;
      border-top: 1px solid #eaeaea;
    }

    .social-icons {
      margin-top: 20px;
      text-align: center;
    }

    .social-icons img {
      width: 30px;
      margin: 0 10px;
    }

    .contact-info {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: #666666;
    }

    .contact-info a {
      color: #ff5722;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-container">
   
    <div class="email-header">
      <img src="https://img.freepik.com/free-vector/hand-drawn-kindergarten-logo-template_23-2150665935.jpg" alt="Logo de l'entreprise">
    </div>

    
    <div class="email-body">
      <p>Bonjour azyz lgay,</p>
      <p>Votre compte a été créé avec succès.</p>
      <p>Utilisez ce mot de passe pour vous connecter : <strong>${password}</strong></p>
      <p>Voici votre code de confirmation : <strong>${codeconfirmation}</strong></p>
      <p>Veuillez compléter votre inscription en cliquant sur le bouton ci-dessous :</p>
      <p>
        <a href="<lien>" class="btn">Confirmer mon compte</a>
      </p>
      <p>Merci de votre confiance et bienvenue dans notre communauté.</p>
      <p>Cordialement,<br>L'équipe de <strong>Espace Kinder tunsie</strong></p>
    </div>


    <div class="email-footer">
      <p>Suivez-nous sur les réseaux sociaux :</p>
      <div class="social-icons">
        <a href="https://facebook.com/votrepage"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></a>
        <a href="https://instagram.com/votrepage"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"></a>
        <a href="https://twitter.com/votrepage"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"></a>
        <a href="https://linkedin.com/votrepage"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"></a>
      </div>
      <div class="contact-info">
        <p>Besoin d'aide ? Appelez-nous : <a href="tel:+21698765432">+216 98 76 54 43</a></p>
        <p>Ou contactez-nous par e-mail à : <a href="mailto:kindergarten@service.de">kindergarten@service.de</a></p>
      </div>
      <p>Si vous n'avez pas créé de compte, veuillez ignorer cet e-mail.</p>
    </div>
  </div>
</body>
</html>

    `
  };

  
  await transporter.sendMail(mailOptions);
};


export const completeRegistration = async (req:Request, res:Response) => {
  try {
    const { nom, prenom, newPassword } = req.body;
        const {email}=req.params
  
    const user = await UserModel.findOne({email: email });

    if (!user) {
      return res.status(400).json({ message: 'Code de confirmation invalide' });
    }

 
    user.nom = nom;
    user.prenom = prenom;

    if (newPassword) {
      user.password = await bcryptjs.hash(newPassword, 10);
    }

    user.confirmed = true;
    user.active = true;

   
    user.codeconfirmation = null;

   
    const updatedUser = await user.save();

    res.status(200).json({ message: 'Inscription complétée avec succès', user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
