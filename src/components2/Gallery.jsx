import Gallery1 from "../assets/gallery1.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/gallery3.jpg";
import Gallery4 from "../assets/gallery4.jpg";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";
import Gallery7 from "../assets/gallery7.jpg";

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-left mb-12">
          Our Gallery
        </h2>

        {/* First Row - 3 images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <img src={Gallery1} alt="Gallery 1" className="w-full h-48 sm:h-60 object-cover" />
          <img src={Gallery2} alt="Gallery 2" className="w-full h-48 sm:h-60 object-cover" />
          <img src={Gallery3} alt="Gallery 3" className="w-full h-48 sm:h-60 object-cover" />
        </div>

        {/* Second Row - 4 images */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <img src={Gallery4} alt="Gallery 4" className="w-full h-40 sm:h-48 object-cover" />
          <img src={Gallery5} alt="Gallery 5" className="w-full h-40 sm:h-48 object-cover" />
          <img src={Gallery6} alt="Gallery 6" className="w-full h-40 sm:h-48 object-cover" />
          <img src={Gallery7} alt="Gallery 7" className="w-full h-40 sm:h-48 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
