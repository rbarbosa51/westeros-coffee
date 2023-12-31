import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2023-08-16",
  });
  const price = await stripe.prices.list({
    expand: ["data.product"],
  });
  return NextResponse.json(price.data);
}
