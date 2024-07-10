import { TestimonialsTitle } from "./testimonialsComponents/TestimonialsText";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const testimonials = [
  {
    quote:
      "Working with Hesham on phieg.com was an absolute pleasure. Their expertise in creating a sleek and animated landing page truly brought our vision to life. The design not only captivated our audience but also enhanced user engagement. Highly recommend!",
    name: "Ahmed",
    title: "Founder and CEO",
  },
  {
    quote:
      "We are thrilled with the e-commerce platform developed by Hesham for cairo3dprint.com. Their solution seamlessly integrates file uploads and printing services, making it incredibly user-friendly. The website has boosted our operational efficiency and customer satisfaction. Exceptional work!",
    name: "Iman",
    title: "Founder and CEO",
  },
  {
    quote:
      "Implementing phiegcrm.com with Hesham was transformative for our lead management. Their integration of Facebook and TikTok functionalities streamlined lead distribution and updates, significantly enhancing our client interactions. A game-changer for our business!",
    name: "Mostafa",
    title: "General Manager",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="h-screen bg-primary/30 py-32 text-center"
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <TestimonialsTitle />
        {/* moving cards */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
    </section>
  );
};
export default Testimonials;
