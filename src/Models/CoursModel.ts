import mongoose, { Schema, Document } from 'mongoose';


export interface ICours extends Document {
    nom: string;
    salle: mongoose.Types.ObjectId; 
    user: mongoose.Types.ObjectId;
    promotion: mongoose.Types.ObjectId; 
}


const CoursSchema: Schema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
    },
    salle: {
        type: Schema.Types.ObjectId,
        ref: 'Salle', 
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
        validate: {
            validator: async function(userId: mongoose.Types.ObjectId) {
                
                const user = await mongoose.model('User').findById(userId);
                return user && user.role === 'teacher';
            },
            message: 'L\'utilisateur sélectionné n\'est pas un enseignant',
        },
    },
    promotion: {
        type: Schema.Types.ObjectId,
        ref: 'Promotion', 
        required: true,
    },
}, {
    timestamps: true, 
});


export default mongoose.model<ICours>('Cours', CoursSchema);
