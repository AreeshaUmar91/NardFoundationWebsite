import ContactImg from "../assets/contact-image.svg"; // Replace with your image path

const Contactus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black text-center mb-4">
        Get In Touch With Us
      </h1>
      <p className="text-center text-gray-700 mb-12 max-w-3xl">
        Veniam quae. Nostrum facere repellendus minus quod aut aliquam. Qui vel magnam repudiandae ipsum.
      </p>

      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl gap-6">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={ContactImg}
            alt="Contact"
            className="w-80 max-[760px]:w-full h-auto max-[760px]:max-w-md"
          />
        </div>

        {/* Right: Form */}
        <div className="flex-1 border border-black p-8 rounded-md w-full max-[760px]:w-full">
          <form className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="border border-black rounded-md px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                className="border border-black rounded-md px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-black font-semibold mb-2">
                Subject Line
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional."
                className="border border-black rounded-md px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-black font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about..."
                className="border border-black rounded-md px-4 py-3 h-32 resize-none focus:outline-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-[#414042] text-white py-3 px-10 rounded-md mt-4 font-semibold hover:opacity-90 transition self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
