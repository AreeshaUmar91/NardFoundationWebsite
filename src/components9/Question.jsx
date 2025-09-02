import React, { useState } from "react";
import BackgroundImg from "../assets/smallBackground.svg";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: "Health in other Countries?", a: "Our project helps the needy worldwide." },
    { q: "We Build and Create?", a: "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis." },
    { q: "Water Delivery in Africa?", a: "We operate in multiple cities and countries." },
    { q: "How to become a volunteer?", a: "Yes, we accept international contributions." },
    { q: "How Do I Make Donation?", a: "Funds are used for education and urban farming support." },
    { q: "Health in other Countries?", a: "Yes, donations are tax-deductible as per law." },
    { q: "Water Delivery in Africa?", a: "Sign up on our website to join our volunteer team." },
    { q: "How to become a volunteer?", a: "Yes, send your ideas via email." },
    { q: "How Do I Make Donation?", a: "Receipts are sent to your registered email." },
    { q: "Health in other Countries?", a: "Yes, your dashboard shows all contributions." },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12">

        {/* Left Side */}
        <div className="relative w-full lg:w-[380px] h-[320px] flex flex-col justify-center px-6 py-8 rounded-lg overflow-hidden">
          {/* Background image */}
          <img
            src={BackgroundImg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          {/* Colored overlay with blur */}
          <div className="absolute inset-0 bg-[#66DBD6] opacity-40 backdrop-blur-sm"></div>

          <div className="relative z-10 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2E4049" }}>
              Any Question ?
            </h2>
            <p className="text-lg md:text-xl text-gray-900 mb-6 leading-snug">
              We are always here to help the<br /> needy peoples
              anywhere in the <br /> world.
              Contact us for your queries.
            </p>
            <a
              href="mailto:your-email@gmail.com"
              className="inline-block px-6 py-3 bg-[#263750] text-white  rounded-full hover:bg-green-600 transition text-lg"
            >
              MAIL YOUR QUESTION
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          
          <div className="flex flex-col gap-2"> {/* Reduced gap between questions */}
            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-2"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer py-2" // Reduced padding
                    onClick={() => toggleAnswer(index)}
                  >
                    <p className="font-semibold text-gray-800">{item.q}</p>
                    <span
                      className={`font-bold text-xl px-2 py-1 rounded transition-colors duration-200 ${
                        isOpen ? "bg-green-500 text-white" : "bg-transparent text-gray-600"
                      }`}
                    >
                      {">"}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-gray-700 mt-1 pl-2">{item.a}</p> // Slightly reduced margin-top
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Question;
