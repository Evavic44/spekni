import TestimonialCard from "./TestimonialCard";
import testimonialData from "../../feedback";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="flex flex-col max-w-6xl my-24 px-4 py-6 mx-auto">
      <h2 className="text-center text-3xl font-bold mb-6">
        What People are saying
      </h2>
      <div className={styles.testimonialContainer}>
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
