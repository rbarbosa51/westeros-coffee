import Stripe from "stripe"
import { CoffeeCard } from "@/components"

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2023-08-16'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function CoffeePage() {
  const products = await getStripeProducts();
  //console.log(products)
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-4 lg:mt-8 ">
      {products && products.map((item: any, i) => (
        <CoffeeCard key={i} name={item.product.name} 
        description={item.product.description} image={item.product.images[0]} 
        amount={item.unit_amount / 100}/>
      ))}
    </div>
    
  )
}

{/* <li key={i}>
          <span className="border-red-300 mr-4 border">{item.product.name}</span>
          <span>{item.product.description}</span><br />
          <img src={item.product.images[0]} /><br />
          <span>{item.unit_amount / 100}</span>
        </li> */}
