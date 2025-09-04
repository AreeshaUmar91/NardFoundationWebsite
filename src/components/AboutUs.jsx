import DonationImage from "../assets/Chart.svg";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">

        {/* Left side - Heading + Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h4 className="text-green-500 mb-2 font-bold text-[35px] w-[160px]">
            About Us
          </h4>
          <h2 className="text-black font-bold mb-4 text-2xl sm:text-3xl md:text-3xl">
            Society Uplifting and Integration of Special Needs Individuals
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Work with local organizations, special schools, and farms to promote accessibility in public spaces and services, leading to improved employment and opportunities for special needs individuals.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Join organizations that support them: involve working with children, adults, or seniors, providing companionship, tutoring, or skills training.
          </p>
        </div>

        {/* Right side - Donations */}
        <div className="w-full md:w-1/2 bg-[#ECF1F0] p-5 flex flex-col items-start">
          {/* Six items */}
          <div className="grid grid-cols-2 gap-6 mb-6 w-full">
            {[
              "Food Donation",
              "Money Donation",
              "Dress Donation",
              "Water Supply",
              "Education Donation",
              "Toys Donation"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">
                  ✓
                </div>
                <span className="text-black">{item}</span>
              </div>
            ))}
          </div>

          {/* Total Donation */}
          <h3 className="text-[#2E4049] font-bold text-lg mb-2 pl-2">
            Total Donation
          </h3>
          <img
            src={DonationImage}
            alt="Donation"
            className="w-full max-w-[400px] h-[4px] mb-4 pl-2"
          />

          {/* Collection and Goal */}
          <div className="flex justify-between w-full px-2 font-bold text-[#2E4049] text-lg mb-4">
            <span>Collection - $5M</span>
            <span>Goal - $10M</span>
          </div>

          {/* Donate Button */}
          <button className="bg-white text-[#2E4049] font-normal px-12 py-4 rounded-full text-lg">
            DONATE NOW
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
