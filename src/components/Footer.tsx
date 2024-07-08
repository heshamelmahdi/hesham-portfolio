"use client";

import Link from "next/link";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full pb-10 px-10">
      {/* <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-phieg-secondary">your</span> sales
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>

        <a href="#contact">
          <InvertButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-between w-full mt-16">
        {/* <div className="">
          <h3>Dubai</h3>
          <p className="font-thin">Emaar Square Building 6, 7th Floor</p>
          <p className="font-thin">Dubai, United Arab Emirates</p>
        </div>
        <div>
          <h3 className="">Cairo</h3>
          <p className="font-thin">Building 71, Street 56</p>
          <p className="font-thin">District 1, New Cairo</p>
          <p className="font-thin">Cairo, Egypt</p>
        </div> */}
        {/* <div>
          <h2>Contact</h2>
          <p className="font-thin">Email: heshamelmahdi@gmail.com</p>
          <p className="font-thin">WhatsApp: +17652404848</p>
          <p className="font-thin">Phone Number: +201156659292</p>
        </div> */}
        {/* <div className="flex flex-col">
          <h2>Quick Navigation</h2>
          <a href="#about" className="font-thin">
            About Us
          </a>
          <a href="#testimonials" className="font-thin">
            Client Testimonials
          </a>
          <a href="#services" className="font-thin">
            Our Services
          </a>
          <a href="#contact" className="font-thin">
            Contact Us
          </a>
        </div> */}
      </div>
      <div className="flex mt-4 md:flex-row flex-col justify-between items-center">
        <div className="md:text-base text-sm md:font-normal font-light flex flex-col lg:flex-row justify-between w-full items-center gap-2 lg:gap-0">
          {/* <div className="flex justify-between font-thin">
            <a
              href="https://www.freeprivacypolicy.com/live/61107322-5c84-482f-90a6-81dfd6eb1ddf"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.freeprivacypolicy.com/live/a39eedbb-f6e7-4a9b-90e3-9953421c02ed"
              target="_blank"
            >
              Terms of Service
            </a>
          </div> */}
          <p>Copyright © 2024 Hesham El-Mahdi</p>
          <div className="flex ml-14 gap-6">
            <p className="font-thin">heshamelmahdi@gmail.com</p>
            <p className="font-thin">+17652404848</p>
            <p className="font-thin">+201156659292</p>
          </div>
          <div className="flex gap-6">
            <Link
              href={"https://github.com/heshamelmahdi"}
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <RiGithubLine />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/heshammohamed1/"}
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <RiLinkedinLine />
            </Link>
          </div>
        </div>

        {/* <div className="flex items-center md:gap-3 gap-6 mt-3 md:mt-0">
          <Link
            href={"https://github.com/heshamelmahdi"}
            target="_blank"
            className="hover:text-accent transition-all duration-300"
          >
            <RiGithubLine />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/heshammohamed1/"}
            target="_blank"
            className="hover:text-accent transition-all duration-300"
          >
            <RiLinkedinLine />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;
