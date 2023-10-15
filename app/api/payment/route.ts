import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

interface ListItem {
    price: string
    quantity: number
}

export async function POST(request:NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
        apiVersion: "2023-08-16"
    })
    let data = await request.json() as ListItem[]
    //console.log(data)
    
    const session = await stripe.checkout.sessions.create({
        line_items: data,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    })
    
    return NextResponse.json(session.url)
}
