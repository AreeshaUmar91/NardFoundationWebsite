import Gallery1 from "../assets/volunteer1.jpg";
import Gallery2 from "../assets/volunteer2.jpg";
import Gallery3 from "../assets/volunteer3.jpg";
import Gallery4 from "../assets/volunteer4.jpg";

const Picture = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-left mb-12">
          Our Partner
        </h2>

        {/* First Row - 3 images side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <img
            src={Gallery1}
            alt="Volunteer 1"
            className="w-full h-48 sm:h-60 max-[760px]:h-80 object-cover"
          />
          <img
            src={Gallery2}
            alt="Volunteer 2"
            className="w-full h-48 sm:h-60 max-[760px]:h-80 object-cover"
          />
          <img
            src={Gallery3}
            alt="Volunteer 3"
            className="w-full h-48 sm:h-60 max-[760px]:h-80 object-cover"
          />
        </div>

        {/* Second Row - 4 images side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <img
            src={Gallery1} // Reuse or add more images if available
            alt="Volunteer 1"
            className="w-full h-40 sm:h-48 max-[760px]:h-72 object-cover"
          />
          <img
            src={Gallery2}
            alt="Volunteer 2"
            className="w-full h-40 sm:h-48 max-[760px]:h-72 object-cover"
          />
          <img
            src={Gallery3}
            alt="Volunteer 3"
            className="w-full h-40 sm:h-48 max-[760px]:h-72 object-cover"
          />
          <img
            src={Gallery4}
            alt="Volunteer 4"
            className="w-full h-40 sm:h-48 max-[760px]:h-72 object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Picture;
