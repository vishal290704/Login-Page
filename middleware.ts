import { NextRequest, NextResponse } from "next/server";


//middlware helps in protecting paths like homepage and others
//login//api/auth/ /register -> will not protected and shown every time
export function middleware(req:NextRequest){
    const {pathname} = req.nextUrl;
    const publicRoutes = [
        "/login",
        "/register",
        "/api/auth",
        "/favicon.ico"
    ]

    return NextResponse.next()
}