import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

interface ListItem {
  price: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2025-06-30.basil",
  });
  let data = (await request.json()) as ListItem[];
  //console.log(data)

  const session = await stripe.checkout.sessions.create({
    line_items: data,
    mode: "payment",
    success_url: "https://westeros-coffee.vercel.app/success",
    cancel_url: "https://westeros-coffee.vercel.app/cancel",
  });

  return NextResponse.json(session.url);
}
