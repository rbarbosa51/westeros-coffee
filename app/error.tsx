"use client"
export default function Error() {
    return (
        <>
            <h1 className="text-error text-3xl lg:text-4xl text-center">There was an error in this page</h1>
            <div className="relative">
                <img src="/404.jpeg" className="block w-96 mx-auto mt-4" />
            </div>
        </>
    )
}