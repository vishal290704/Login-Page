import authOptions from "@/app/lib/auth";
import connectDB from "@/app/lib/db";
import User from "@/app/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  
}