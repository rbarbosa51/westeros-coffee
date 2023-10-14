"use client"
import Stripe from "stripe"
import { CoffeeCard } from "@/components"
import { useState, useEffect } from "react";


export default function CoffeePage() {
  const [prices, setPrices] = useState<Stripe.Price[]>([])

  const getStripeProducts = async () => {
    const response = await fetch('/api/getproducts')
    const data = await response.json() as Stripe.Price[]
    setPrices(data)
  }
  
  useEffect( () => {
    (async () => {
      await getStripeProducts()
    })()
  }, [])
  
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-4 lg:mt-8 ">
      {prices ? prices.map((item: any) => (
        <CoffeeCard key={item.id} id={item.id} name={item.product.name} 
        description={item.product.description} image={item.product.images[0]} 
        amount={item.unit_amount / 100}/>
      )) :
        <h1 className="text-accent-focus text-3xl lg:text-4xl text-center">Loading Content</h1>
      }
      
    </div>
    
  )
}

