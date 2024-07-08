import { BsArrowRight } from "react-icons/bs";

const ContactForm = () => {
  return (
    <form className="flex-1 flex flex-col gap-6 w-full mx-auto z-10">
      {/* input group */}
      <div className="flex gap-x-6 w-full">
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Email" className="input" />
      </div>
      <input type="text" placeholder="Subject" className="input" />
      <textarea placeholder="Message" className="textarea"></textarea>
      <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let's talk
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </form>
  );
};
export default ContactForm;
