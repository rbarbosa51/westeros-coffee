"use client"
import { createElement, useState } from "react"

interface iProps {
    title: string
    image: string
    text: string
    rating: string
}

export default function TestimonialCard({title, image, text, rating}: iProps) {
    const [ratingBase] = useState<number[]>([1,2,3,4,5])
    return (
        <div className="card glass shadow-lg w-72">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <figure><img src={image} className="rounded-xl " /></figure>
                <p>{text}</p>
                <div className="flex gap-4 items-center">
                    <div>Rating:</div>
                    <div className="badge badge-accent badge-outline">{rating}</div>

                </div>
            </div>
        </div>
    )
}

{/* <input type="radio" name="rating-1" className="mask mask-star" />
<input type="radio" name="rating-1" className="mask mask-star" checked />
<input type="radio" name="rating-1" className="mask mask-star" />
<input type="radio" name="rating-1" className="mask mask-star" />
<input type="radio" name="rating-1" className="mask mask-star" /> */}

{/* <div className="rating">
                    {ratingBase.map((rate, i) => (
                        rating === rate ? 
                        (<input key={i} type="radio" name="rating-1" className="mask mask-star" checked/>) :
                        (<input key={i} type="radio" name="rating-1" className="mask mask-star" />)
                    ))}
                </div> */}