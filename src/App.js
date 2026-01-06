import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";


const headerData = {
  "type": "header",
  "id": "header-001",
  "content": {
    "background": "black",
    "logo": {
      "text": "APM Reality - Premium Real Estate",
      "url": "/",
      "textColor": "white"
    },
    "navLinks": [
      { "label": "Home", "url": "/", "icon": null },
      { "label": "About", "url": "/cms/about/", "icon": "info-circle" },
      { "label": "Properties", "url": "/cms/properties/", "icon": null },
      { "label": "Contact", "url": "/cms/contact/", "icon": null },
      { "label": "Gallery", "url": "/cms/gallery/", "icon": "images" }
    ],
    "cta": {
      "label": "Get Started",
      "url": "/login/",
      "variant": "primary"
    },
    "themeToggle": {
      "enabled": true,
      "icon": "brightness-high-fill"
    }
  }
}

function App() {
  return (
    <div>
      <Header {...headerData.content} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cms/about" element={<About />} />
        <Route path="/cms/properties/" element={<Properties />} />
        <Route path="/cms/contact" element={<Contact />} />
        <Route path="/cms/gallery" element={<Gallery />} />
      </Routes>
      
    </div>
  );
}

export default App;
