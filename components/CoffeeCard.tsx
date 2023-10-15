"use client"
import { useState } from "react"
import { useStore } from "@/app/(store)/store"
import { useRef } from "react"

interface iProps {
    id: string
    name: string
    description: string
    image: string
    amount: number
}

export default function CoffeeCard({id, name, description, image, amount}: iProps) {
    const {addTransaction} = useStore()
    const [currentQuantity, setCurrentQuantity] = useState<number>(0)
    const dialogElement = useRef<HTMLDialogElement | null>(null)

    const addToCart = () => {
        if (currentQuantity > 0) {
            addTransaction(id, currentQuantity, name, amount)
        } else {
            dialogElement.current!.showModal()
        }
    }
    
    return (
        <div className="card glass shadow-lg w-72">
            <div className="card-body">
                <h2 className="card-title text-accent">{name}</h2>
                <figure><img src={image} className="rounded-xl " /></figure>
                <p>{description}</p>
                <div className="flex gap-4 items-center">
                    <div>Price:</div>
                    <div className="badge badge-accent badge-outline">{amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
                </div>
                <div className="divider divider-vertical"></div>
                <div className="flex justify-center -mt-4">
                    <button className="text-2xl btn" onClick={() => setCurrentQuantity(prev => prev < 99 ? prev + 1: prev)}>+</button>
                    <input type="text" readOnly value={currentQuantity} className="input input-ghost w-14 text-center" />
                    <button className="text-2xl btn" onClick={() => setCurrentQuantity(prev => prev > 0 ? prev - 1: prev)}>-</button>
                </div>
                <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
            <dialog ref={dialogElement} id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Quantity</h3>
                  <p className="py-4">Please enter a quantity </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
            </dialog>
        </div>
    )
}