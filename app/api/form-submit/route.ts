import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import FormData from "@/app/models/formData";

export async function GET(request: NextRequest) {
  await dbConnect();
  const allFormData = await FormData.find();
  return NextResponse.json(allFormData);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    await dbConnect();

    const newProfile = new FormData(body);
    await newProfile.save();

    return NextResponse.json(newProfile);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
