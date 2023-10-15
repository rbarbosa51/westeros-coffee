"use client"
import { useStore } from "@/app/(store)/store"

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
        <div className={`card ${open ? 'flex' : 'hidden'} min-h-96 w-96 absolute z-30 shadow-xl right-0 top-2 bg-base-200`}>
            <div className="flex justify-between w-full mx-10">
                <h2 className="card-title text-primary text-3xl lg:text-4xl">Checkout</h2>
                <button className="btn btn-square w-4 aspect-square" onClick={handleClick}>X</button>
            </div>
            <ul>
                {(transaction.length > 0) ? transaction.map((price, i) => (
                    <div key={i} className="flex flex-col font-bold mx-auto w-[90%]">
                        <div className="flex w-full gap-24 justify-between items-center">
                            <div className="w-[40%]">{price.name}</div>
                            <div className="">Quantity: {price.quantity}</div>
                        </div>
                        <div className="flex w-full gap-52 justify-between items-center">
                            <div>Total:</div>
                            <div>{price.price * price.quantity}</div>
                        </div>
                        <div className="divider -mt-2"></div>
                    </div>
                )) :
                (
                    <h1 className="text-2xl lg:text-3xl text-accent my-[50%]">Cart is Empty</h1>
                )
                
                }
            </ul>
            <div className="card-actions">
                {/* @ts-ignore */}
                <button className="btn btn-primary" onClick={handleClick}>Proceed to Checkout</button>
            </div>
        </div>
    )
}