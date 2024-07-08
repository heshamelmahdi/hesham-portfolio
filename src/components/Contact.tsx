import { BsArrowRight } from "react-icons/bs";
import { ContactTitle } from "./contactComponents/ContactText";
import ContactForm from "./contactComponents/ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-primary/60">
      <div className="container mx-auto pt-32 text-center xl:text-left flex flex-col items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] pb-12">
          {/* Title */}
          <ContactTitle />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </section>
  );
};
export default Contact;
