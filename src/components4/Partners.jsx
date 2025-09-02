import Partner1Img from "../assets/workforus1.png";
import Partner2Img from "../assets/workforus2.png";
import Partner3Img from "../assets/workforus3.png";
import Partner4Img from "../assets/workforus4.png";

const Partners = () => {
  const partners = [
    {
      id: 1,
      img: Partner1Img,
      title: "Mountbatten Vocational School",
      content:
        "“Deeds Not Words” The ear gives instant affiliation of the Association with the Deaf while the sphere provides the vision for the Deaf and also gives the design a global outlook and perspective.",
      readMore: true,
    },
    {
      id: 2,
      img: Partner2Img,
      title: "BlueAcres",
      content:
        "We are dedicated to bringing some of the best, most nutritious food to our customers by taking care of the way we farm. We believe that better food leads to better health and quality of life.",
    },
    {
      id: 3,
      img: Partner3Img,
      title: "SINGRASS",
      content:
        "A Breath of Fresh Air through urban agriculture We provide aesthetically pleasing Indoor Smart Eco System that remove harmful airborne pollutants, while producing pesticide-free leafy greens in line with Singapore's 30 by 30 vision for food production.",
    },
    {
      id: 4,
      img: Partner4Img,
      title: "IslahCARE",
      content:
        "Where the road to recovery begins, serve as a centre for rehabilitation of drug abusers to lead a new life before they are released and reintegrated back to the society.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-left mb-12">
          Our Partners
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md"
            >
              {/* Partner Image */}
              <img
                src={partner.img}
                alt={partner.title}
                className="w-32 h-32 object-contain mb-4"
              />

              {/* Partner Heading */}
              <h3 className="text-xl font-bold text-black mb-2">{partner.title}</h3>

              {/* Partner Content */}
              <p className="text-gray-700 mb-2">
                {partner.content}{" "}
                {partner.readMore && (
                  <span className="text-green-500 font-semibold cursor-pointer">
                    Read more
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
