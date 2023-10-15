"use client"
import { useStore } from "@/app/(store)/store"
//import { useState } from "react"
interface iProp {
    open?: boolean
    setOpen?: () => void
}

export default function CheckOutDrawer({open, setOpen}:iProp) {
    const {transaction} = useStore();
    
    const handleClick = () => {
        console.log(transaction)
        //@ts-ignore
        setOpen(prev => !prev)
    }
    return (
        <div className={`card ${open ? 'flex' : 'hidden'} h-96 w-96 absolute z-30 shadow-xl right-0 top-2 glass`}>
            <h2 className="card-title text-primary">Checkout</h2>
            <ul>
                {transaction && transaction.map((price, i) => {
                    console.log(price.name)
                    return <li key={i}>{price.name}</li>
                })}
            </ul>
            <div className="card-actions">
                {/* @ts-ignore */}
                <button className="btn btn-primary" onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}