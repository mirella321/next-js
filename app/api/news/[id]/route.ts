import { request } from "http";
import { NextResponse } from "next/server";


export async function GET(

    request: Request,
    {params}:any
){

    const {id} = await params;

    if (!id) {

        return NextResponse.json({message:"News not found"})
    }
    return NextResponse.json({message: "News found"})
}