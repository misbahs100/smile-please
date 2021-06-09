import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Hero />
      <Features />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
