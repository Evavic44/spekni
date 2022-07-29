import TestimonialCard from "./TestimonialCard";
import testimonialData from "../../feedback";

export default function Testimonials() {
  return (
    <section className="flex flex-col max-w-6xl my-24 px-4 py-6 mx-auto">
      <h2 className="text-center text-3xl font-bold mb-6">
        What People are saying
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {testimonialData.map((feedback) => (
          <TestimonialCard
            name={feedback.name}
            image={feedback.image}
            review={feedback.review}
            key={feedback.name}
            src={feedback.src}
          />
        ))}
      </div>
    </section>
  );
}
