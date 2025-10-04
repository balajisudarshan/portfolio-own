import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaReddit } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
        <p className="text-lg mb-8 text-gray-600">
          Let’s connect! You can find me on these platforms 👇
        </p>

        <div className="flex justify-center space-x-8 text-4xl">
          <a href="https://github.com/balajisudarshan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/k-balaji-sudarshan-reddy-9449a3320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/balaji_sudarshanreddy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaInstagram />
          </a>
          <a href="https://www.reddit.com/user/RemoteMeal3626/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaReddit />
          </a>
        </div>

        <p className="mt-8 text-gray-500">
          Or drop me an email at{" "}
          <a href="mailto:kondreddy2007@gmail.com" className="text-primary hover:underline">
            kondreddy2007@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
