// src/pages/Home.jsx
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Project from "../components/Project";
import Features from "../components/Features";
import Blog from "../components/Blog";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Header />
        <Blog />
      <AboutUs />
      <Project/>
      <Features />
    
      <Footer />
    </div>
  );
};

export default Home;
