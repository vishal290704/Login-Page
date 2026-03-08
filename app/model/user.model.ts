 import mongoose, { mongo } from "mongoose";

 interface Iuser{
    _id?: mongoose.Types.ObjectId
    name: string
    image: string
    email: string
    password: string
    createdAt?: Date
    updatedAt? : Date
 }
 const userSchema = new mongoose.Schema<Iuser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type: String
    }

 },{timestamps:true});
 
 const User = mongoose.models.User || mongoose.model('User', userSchema)        //mongoose.model.User model create krne ke liye hota h aur isme OR operator isilie use hua h taaki next time run krne pe check kr le ki kahin phle se to kuch nhi h mongoose.model.User m aur agar h to vhi bhej de aur agar nhi h to new user model create kr de.
 export default User;