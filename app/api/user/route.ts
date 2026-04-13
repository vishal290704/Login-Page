import authOptions from "@/app/lib/auth";
import connectDB from "@/app/lib/db";
import User from "@/app/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        await connectDB()
        const session = await getServerSession(authOptions)
            if(!session || !session.user.email || !session.user.id){
                   return NextResponse.json(
                       {message:"user doesn't have session"},
                       {status:400}
                   )
               }
               const user = await User.findById(session.user.id).select("-password")
    } catch (error) {
        
    }
}