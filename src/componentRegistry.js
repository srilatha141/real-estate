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
    'ui-widgets': UIWidgets
};

export default componentRegistry;