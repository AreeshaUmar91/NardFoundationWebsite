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
          <button className="mt-4 py-2 px-4 bg-[#263750] text-white font-semibold rounded-lg w-max hover:bg-gray-800 transition">
            Donate Now
          </button>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-6 rounded-lg border border-white flex flex-col gap-4 bg-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Become a Volunteer</h3>

          <form className="flex flex-col gap-4 text-black">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="number"
              placeholder="Age"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="password"
              placeholder="Login Password"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />

            {/* Region Dropdown */}
            <select
              className="p-2 rounded border border-white bg-white text-black"
              defaultValue=""
            >
              <option value="" disabled>Select Region</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="central">Central</option>
            </select>

            <input
              type="text"
              placeholder="H/P Number"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="text"
              placeholder="Emergency Contact"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />
            <input
              type="text"
              placeholder="Profession / Interest"
              className="p-2 rounded border border-white bg-white/20 placeholder-white text-white"
            />

            {/* Submit button small and left-aligned */}
            <button
              type="submit"
              className="py-1 px-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
