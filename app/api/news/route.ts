import { NextResponse } from "next/server";
import { title } from "process";


export async function GET() {

    const news= [
        {id: 1, title:"Rzesztuff", body:"Poznaj wiele ciekawych miejsc"},
        {id: 2, title:"Podlasie", body:"Nie"},
        {id: 3, title:"Zakopane", body:"Tak"}
    ]
    return NextResponse.json(news);
    
}

export async function POST(request:Request) {

    const body = request.json();

    return NextResponse.json({recieved: body})
}