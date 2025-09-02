import BackgroundImg from "../assets/helpbg.png"; // Main background image
import SmallImg from "../assets/smallpic.png";    // Small picture on the left side

const Form = () => {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for slight dim */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 text-white">
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h4 className="text-white text-lg font-semibold">HOW We Help</h4>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Join The Community To Give Education For Children
          </h2>
          <p className="text-white/90">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Dummy text ever when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book.
          </p>
          <img
            src={SmallImg}
            alt="Small visual"
            className="mt-4 w-full h-40 object-cover"
          />
          {/* Donate Now Button */}
          <button className="mt-4 py-4 px-6 bg-[#263750] text-white  rounded-3xl w-max hover:bg-gray-800 transition">
            DONATE NOW
          </button>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-6 rounded-xl border border-white flex flex-col gap-4 bg-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Become A Volunteer</h3>

          <form className="flex flex-col gap-4 text-black">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="number"
              placeholder="Age"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="password"
              placeholder="Login Password"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />

            {/* Region Dropdown with white border and normal font */}
            <select
              className="p-3 rounded border border-white bg-white/20 text-white font-normal focus:ring-0 focus:outline-none"
              defaultValue=""
            >
              <option className="font-normal text-white" value="" disabled>Select Region</option>
              <option className="font-normal text-white" value="north">North</option>
              <option className="font-normal text-white" value="south">South</option>
              <option className="font-normal text-white" value="east">East</option>
              <option className="font-normal text-white" value="west">West</option>
              <option className="font-normal text-white" value="central">Central</option>
            </select>

            <input
              type="text"
              placeholder="H/P Number"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="text"
              placeholder="Emergency Contact"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="text"
              placeholder="Profession / Interest"
              className="p-3 rounded border border-white bg-white/20 placeholder-white text-white"
            />

            {/* Submit button with increased padding and black text */}
           <button
  type="submit"
  className="py-4 px-6 bg-white text-black rounded-3xl font-normal hover:bg-gray-200 transition self-start"
>
  SUBMIT NOW
</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
