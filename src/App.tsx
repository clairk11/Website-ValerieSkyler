import Nav from "./components/Nav";
import ParallaxBackdrop from "./components/Hero/ParallaxBackdrop";
import HeroContent from "./components/Hero/HeroContent";
import FlingCards from "./components/Cards/FlingCards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ParallaxBackdrop />
      <Nav />
      <HeroContent />
      <FlingCards />
      <Footer />
    </>
  );
}

export default App;
