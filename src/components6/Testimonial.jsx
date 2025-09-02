import TestimonialImg from "../assets/small-pic.png"; // Left small testimonial bar
import SmallImg from "../assets/testimonialS.SVg"; // Profile image overlay

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">

        {/* Left Part */}
        <div className="lg:w-1/2 flex flex-col items-start text-left space-y-6">
          <h4 className="text-xs sm:text-sm text-gray-500 uppercase">Testimonials</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            What people say <br /> about Us.
          </h2>
          <img 
            src={TestimonialImg} 
            alt="Testimonial" 
            className="w-24 sm:w-40 md:w-96 h-1 sm:h-2 md:h-3 object-cover mt-4"
          />
        </div>

        {/* Right Part */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img 
            src={SmallImg} 
            alt="Profile" 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
