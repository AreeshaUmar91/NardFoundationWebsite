import imgBox1 from "../assets/overviewnard1.png";
import imgBox2 from "../assets/overviewnard2.png";
import imgBox3 from "../assets/overviewnard3.png";
import imgBox4 from "../assets/overviewnard4.png";

const Overview = () => {
  const boxes = [
    {
      img: imgBox1,
      title: "Easy to Customize",
      desc: "Nard HomeBiz Solutions excels in easy customization, allowing businesses to tailor strategies that meet their unique needs. This flexibility ensures that solutions align closely with specific goals, facilitating seamless integration into existing workflows. As businesses grow or pivot, these customizable solutions can be scaled and adjusted accordingly. The user-friendly tools empower clients to make independent modifications, enhancing engagement and adoption."
    },
    {
      img: imgBox2,
      title: "Download Anyway",
      desc: "This feature is designed to enhance user flexibility and convenience, allowing clients to access resources and tools quickly. This approach empowers businesses to take control of their downloads while maintaining a focus on efficiency."
    },
    {
      img: imgBox3,
      title: "User Friendly",
      desc: "Prioritizes user-friendliness in all its offerings. The interface is designed to be intuitive and easy to navigate, ensuring that users can access tools and resources without extensive training."
    },
    {
      img: imgBox4,
      title: "24hrs Support",
      desc: "Ensuring clients have access to assistance whenever they need it. This round-the-clock availability is crucial for addressing urgent issues, answering questions, and providing guidance on using their services effectively."
    }
  ];

  return (
    <section className="bg-white   text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-6">

        {/* Small Heading */}
        <h3 className="text-sm sm:text-base font-semibold text-[#8396AC] uppercase tracking-wide">
          Overview
        </h3>

        {/* Large Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Why NardHomeBizSolutions
        </h2>

        {/* Content Paragraph */}
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl max-w-6xl mx-auto">
          Nard HomeBiz Solutions offers several compelling advantages for
          businesses looking to enhance their operations and achieve sustainable
          growth, specializes in providing customized strategies that cater to
          the unique needs of each client. By understanding your specific
          challenges and goals, they develop solutions that effectively address
          your business requirements.
        </p>

        {/* Boxes */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto justify-items-center">
  {boxes.map((box, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center"
    >
      <img
        src={box.img}
        alt={box.title}
        className="mb-4 w-20 h-16 sm:w-24 sm:h-20"
      />
      <h4 className="text-lg sm:text-xl font-semibold mb-2">{box.title}</h4>
      <p className="text-gray-700 text-sm sm:text-base">{box.desc}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Overview;
