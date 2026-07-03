import Nav from "./components/Nav";
import VideoBackdrop from "./components/Hero/VideoBackdrop";
import HeroContent from "./components/Hero/HeroContent";
import FlingCards from "./components/Cards/FlingCards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <VideoBackdrop />
      <Nav />
      <HeroContent />
      <FlingCards />
      <Footer />
    </>
  );
}

export default App;
