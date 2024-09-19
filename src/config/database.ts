console.clear();

import User from "../Models/userModel"
import mongoose from "mongoose"
import bcryptjs from "bcryptjs"
import * as dotenv from "dotenv"
dotenv.config()




export const   connectDB = async ():Promise<void> => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            
            
        );

        console.log('database connect')



        const email =("younesmanita975@gmail.com".toLocaleLowerCase()).trim()

        let webmaster = await User.findOne({
            role: 'admin',
        });

        if (!webmaster) {
            let password = 'adminpassword'
            const salt = await bcryptjs.genSalt(10);
            const hashed = await bcryptjs.hash(password, salt);
            let new_user = new User({
                
                
                nom: 'younes',
                prenom: 'manita',

                email: email,
         
           
                password: hashed,
                role: 'admin',
            });
            await new_user.save();
            console.log(`webmaster account has been added : ${new_user.email}`);
        } else {
            console.log(` webmaster account already exist \n webmaster email : ${webmaster.email}`);
        }
    } catch (error) {
        console.log(error)
        console.log("database is not connect");
    }
};

