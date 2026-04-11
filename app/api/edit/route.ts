import uploadOnCloudinary from "@/app/lib/cloudinary";
import connectDB from "@/app/lib/db";
import User from "@/app/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        await connectDB()
        const session = await getServerSession()
        if(!session || !session.user.email || !session.user.id){
            return NextResponse.json(
                {message:"user doesn't have session"},
                {status:400}
            )
        }
        const formData = await req.formData()
        const name = formData.get("name") as string
        const file = formData.get("file") as Blob | null
        let imageUrl = session.user.image ?? null

        if(file){
            imageUrl =await uploadOnCloudinary(file)
        }

        const user = await User.findByIdAndUpdate(session.user.id,{
            name, image:imageUrl
        })

        if(!user){
            return NextResponse.json(
                {message:"user doesn't have session"},
                {status:400}
            )
        }
    } catch (error) {
        
    }
}