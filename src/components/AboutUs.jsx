import DonationImage from "../assets/Chart.svg"; // Replace with your actual image path

const AboutUs = () => {
  return (
    <section className="py-16 bg-white mx-[50px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-16">
        
        {/* Left side - Heading + Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h4
            className="text-green-500 mb-2"
            style={{ fontWeight: 700, fontSize: "35px", height: "38px", width: "160px" }}
          >
            About Us
          </h4>
          <h2 className="text-black text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Society Uplifting and Integration of Special Needs Individuals
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Work with local organizations, special schools, and farms to promote accessibility in public spaces and services, leading to improved employment and opportunities for special needs individuals.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Join organizations that support them: involve working with children, adults, or seniors, providing companionship, tutoring, or skills training.
          </p>
        </div>

        {/* Right side - Six items + Donation Info */}
        <div className="md:w-1/2 bg-[#ECF1F0] p-5 flex flex-col items-start">
          
          {/* Six items - 3 on left, 3 on right */}
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

          {/* Total Donation heading */}
          <h3 className="text-[#2E4049] font-bold text-lg mb-2 pl-[10px]">
            Total Donation
          </h3>

          {/* Donation Image */}
          <img
            src={DonationImage}
            alt="Donation"
            className="w-[400px] h-[4px] mb-4 pl-[10px]"
          />

          {/* Collection and Goal */}
          <div className="flex justify-between w-full px-[10px] font-bold text-[#2E4049] text-lg mb-4">
            <span>Collection - $5M</span>
            <span>Goal - $10M</span>
          </div>

          {/* Donate Button */}
          <button
            className="bg-white text-[#2E4049] font-normal px-12 py-4 rounded-full text-lg"
            style={{ borderRadius: "34px" }}
          >
            DONATE NOW
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
