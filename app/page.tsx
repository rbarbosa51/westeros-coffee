import Stripe from "stripe"

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

export default async function Home() {
  const products = await getStripeProducts();
  //console.log(products)
  return (
    <ul>
      {products && products.map((item: any, i) => (
        <li key={i}>
          <span className="border-red-300 mr-4 border">{item.product.name}</span>
          <span>{item.product.description}</span><br />
          <img src={item.product.images[0]} /><br />
          <span>{item.unit_amount / 100}</span>
        </li>
      ))}
    </ul>
  )
}
