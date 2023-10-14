"use client"
import { useState } from "react"
interface iProps {
    id: string
    name: string
    description: string
    image: string
    amount: number
}

export default function CoffeeCard({id, name, description, image, amount}: iProps) {
    const [currentAmount, setCurrentAmount] = useState<number>(0)
    return (
        <div className="card glass shadow-lg w-72">
            <div className="card-body">
                <h2 className="card-title text-accent">{name}</h2>
                <figure><img src={image} className="rounded-xl " /></figure>
                <p>{description}</p>
                <div className="flex gap-4 items-center">
                    <div>Price:</div>
                    <div className="badge badge-accent badge-outline">{amount}</div>
                </div>
                <div className="divider divider-vertical"></div>
                <div className="flex justify-center -mt-4">
                    <button className="text-2xl btn" onClick={() => setCurrentAmount(prev => prev < 99 ? prev + 1: prev)}>+</button>
                    <input type="text" value={currentAmount} className="input input-ghost w-14 text-center" />
                    <button className="text-2xl btn" onClick={() => setCurrentAmount(prev => prev > 0 ? prev - 1: prev)}>-</button>
                </div>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}