import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Hero />
      
      <Features />
      <Testimonial />
    </div>
  );
}

export default App;
