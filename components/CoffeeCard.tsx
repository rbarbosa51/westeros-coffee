interface iProps {
    name: string
    description: string
    image: string
    amount: number
}

export default function CoffeeCard({name, description, image, amount}: iProps) {
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
            </div>
        </div>
    )
}