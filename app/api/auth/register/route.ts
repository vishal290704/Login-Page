import connectDB from "@/app/lib/db";
import User from "@/app/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

//status code details
//For success: 200-300
//create - 201
//frontend error: 400-499
//backend error: 500(Internal Server error)

export async function POST(request:NextRequest) {
    try {
        const {name, email, password} = await request.json()
        await connectDB()

        let existUser = await User.findOne({email})
        if(existUser){
            return NextResponse.json(
                {message: "User already exists"},
                {status: 400}
            )
        }

        if(password.length < 6){
            return NextResponse.json(
                {message:"Password must be atleast 6 characters"},
                {status: 400}
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, email, password:hashedPassword
        })
        return NextResponse.json(
                {message:"User created successfully", user },
                {status: 201}
            )

    } catch (error) {
        return NextResponse.json(
            {message:`Server error ${error}`},
            {status:500}
        )
    }
}