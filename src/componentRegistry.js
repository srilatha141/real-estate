// componentRegistry.js
import HeroFlexible from './components/HeroFlexible';
import FeatureGrid from './components/FeatureGrid';
import Header from './components/Header';
import MissionVisionSection from './components/MissionVision'
import FeaturedPropertiesSection from './components/FeaturedProperties'
import ServicesSection from './components/Services'
import Feedback from './components/Feedback';
import ContactSection from './components/Contact';
import FooterSection from './components/FooterSection';
import UIWidgets from './components/UIWidgets';
import About from './components/About';
import PremiumServices from './components/PremiumServices';
import DiscoveryCall from './components/DiscoveryCall';
import GetStarted from './components/GetStarted';
import PropertySearch from './components/PropertySearch';
import ContactPage from './components/ContactPage';

const componentRegistry = {
    'header': Header,
    'hero-flexible': HeroFlexible,
    'feature-grid': FeatureGrid,
    'mission-vision': MissionVisionSection,
    'featured-properties': FeaturedPropertiesSection,
    'services': ServicesSection,
    'customer-feedback': Feedback,
    'contact-section': ContactSection,
    'footer-section': FooterSection,
    'ui-widgets': UIWidgets,
    'about': About,
    'premium-services': PremiumServices,
    'discovery-call': DiscoveryCall,
    'get-started': GetStarted,
    'property-search': PropertySearch,
    'contact': ContactPage
};

export default componentRegistry;