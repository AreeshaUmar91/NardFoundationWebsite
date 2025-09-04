import React from "react";
import MilestoneImg from "../assets/feature1.png";
import DonationImg from "../assets/feature2.png";
import SocialImg from "../assets/feature3.png";
import LikesImg from "../assets/stat1.png";
import VolunteersImg from "../assets/stat2.png";
import AssistedImg from "../assets/stat3.png";
import EducatedImg from "../assets/stat4.png";

const FeaturesAndStats = () => {
  const features = [
    {
      img: MilestoneImg,
      title: "Our Milestones",
      content:
        "Check out features of The Nard Foundation Limited milestones and impact in helping the special needs individuals since our establishment in 2024.",
    },
    {
      img: DonationImg,
      title: "Make a Donation",
      content:
        "To make a monetary donation, in-kind contributions, or provide volunteer services based on the needs. A meaningful way to support special needs individuals and contribute to positive change in society.",
    },
    {
      img: SocialImg,
      title: "Social Enterprise",
      content:
        "Search for like-minded individuals or organizations that would like to contribute or get involved in meaningful projects with us.",
    },
  ];

  const stats = [
    { img: LikesImg, number: "4975+", label: "Likes" },
    { img: VolunteersImg, number: "8945+", label: "Volunteers" },
    { img: AssistedImg, number: "10M+", label: "Assisted People" },
    { img: EducatedImg, number: "100+", label: "Educated" },
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-16 bg-white mx-[50px] max-[760px]:mx-2" id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 max-[760px]:max-w-full">
          <h4
            className="flex items-center mb-4 font-bold"
            style={{ color: "#252A34" }}
          >
            About
            <span
              className="ml-3"
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "#00000040",
                display: "inline-block",
              }}
            ></span>
          </h4>

          <h2 className="text-black text-3xl sm:text-4xl font-bold mb-12 text-left">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-[760px]:w-full max-[760px]:mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#C1FFC3] flex flex-col overflow-hidden p-6 max-[760px]:w-full"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-16 h-16 object-cover mb-4"
                />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="bg-white -mt-10 py-12 mx-[50px] max-[760px]:mx-2"
        id="stats"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 max-[760px]:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-[760px]:w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#C1FFC3] flex flex-col items-center justify-center p-6 h-72 max-[760px]:w-full"
              >
                <img
                  src={stat.img}
                  alt={stat.label}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#2E4049" }}
                >
                  {stat.number}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesAndStats;
