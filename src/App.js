import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';
import DownloadApp from './components/DownloadApp';

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <DownloadApp />
      <Features />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
