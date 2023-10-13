"use client"
export default function Error() {
    return (
        <>
            <h1 className="text-accent-focus text-3xl lg:text-4xl text-center">Loading Content</h1>
            <p className="mx-auto text-center justify-center">Please wait while the page loads</p>
            <div className="relative">
                <img src="/dragon2.jpeg" className="block w-96 mx-auto mt-4" />
            </div>
        </>
    )
}