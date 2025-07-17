interface iProps {
  title: string;
  image: string;
  text: string;
  rating: string;
}

export default function TestimonialCard({
  title,
  image,
  text,
  rating,
}: iProps) {
  return (
    <div className="card glass shadow-lg w-72">
      <div className="card-body">
        <h2 className="card-title text-accent">{title}</h2>
        <figure>
          <img alt="Testimonial Image" src={image} className="rounded-xl " />
        </figure>
        <p>{text}</p>
        <div className="flex gap-4 items-center">
          <div>Rating:</div>
          <div className="badge badge-accent badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
}
