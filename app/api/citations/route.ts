import { NextRequest, NextResponse } from "next/server";

export async function GET (){
    return NextResponse.json({
        ok:true,
        env:process.env.NODE_ENV
    })
}

export async function POST(request: NextRequest){
    const body = await request.formData();
    return NextResponse.json({
        ok:true,
        body
    })
}