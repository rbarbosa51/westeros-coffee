
export default function TeamPage() {
    return (
        <div>
            <h1 className="text-primary -mt-2 text-center text-3xl lg:text-4xl">Meet Our Team</h1>
            <h2 className="text-primary text-center text-xl lg:text-2xl mt-2">Meet our CEO</h2>
            <div className="card glass lg:card-side px-2 lg:px-4 mt-2">
                <figure><img src="/OurCEO.jpeg" className="rounded-xl" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Daenerys Targaryen</h2>
                    <p>Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.</p>
                    <p className="font-bold">and now... CEO of Westeros Coffee!!!</p>
                    {/* <div className="card-actions justify-end">
                      <button className="btn btn-primary">Learn now!</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}