
import { useState } from 'react';
import PageRenderer from '../PageRenderer';

const pageData = {
    components: [
        {
            id: 'uuid-or-unique-string-1',
            type: 'hero-flexible',
            content: {
                title: 'Find Your Dream Property',
                subtitle: 'Luxury Real Estate at Your Fingertips',
                subtitle1: 'Discover premium properties in the most desirable locations',
                alignment: 'center',
                bg_image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80',
                buttons: [
                    { label: 'Browse Properties', url: '/register', variant: 'light' },
                    { label: 'Contact Us', url: '/register', variant: 'light' },
                ],
            },
        },
        {
            type: "feature-grid",
            id: "about-apm-realty",
            content: {
                backgroundColor: "#ffffff",
                textColor: "#333333",
                title: "About APM Reality",
                subtitle: "Your Trusted Real Estate Partner",
                description: "With over 15 years of experience in the real estate industry, we are your trusted partner in finding the perfect property. Our team of dedicated professionals is committed to providing exceptional service and expertise.",
                features: [
                    {
                        icon: "chart-line",
                        title: "Expert Knowledge",
                        description: "Deep understanding of local markets and property trends to guide your decisions."
                    },
                    {
                        icon: "users",
                        title: "Personalized Service",
                        description: "Tailored approach to meet your specific property needs and preferences."
                    },
                    {
                        icon: "award",
                        title: "Proven Results",
                        description: "Track record of successful transactions and satisfied clients."
                    }
                ],
                cta: {
                    label: "Learn More About Us",
                    url: "/",
                    icon: "arrow-right"
                },
                image: {
                    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    alt: "About APM Reality"
                }
            }
        },
        {
            type: "mission-vision",
            id: "mission-vision-001",
            content: {
                backgroundColor: "#f8f9fa",
                textColor: "#333333",
                title: "Our Mission & Vision",
                subtitle: "Driving innovation and excellence in everything we do",
                isEditing: true,
                cards: [
                    {
                        icon: "home",
                        title: "Our Mission",
                        lead: "Connecting People with Their Dream Properties",
                        description: "To provide exceptional real estate services that help our clients find, buy, sell, and invest in properties that meet their needs and exceed their expectations."
                    },
                    {
                        icon: "star",
                        title: "Our Vision",
                        lead: "Leading Real Estate Excellence",
                        description: "To be the most trusted and respected real estate company, known for our integrity, expertise, and commitment to client success."
                    }
                ],
                coreValues: {
                    title: "Our Core Values",
                    description: "Integrity, Excellence, Client Focus, Innovation, and Community Service guide everything we do."
                }
            }
        },
        {
            "type": "featured-properties",
            "id": "featured-properties-001",
            "content": {
                "title": "Featured Properties",
                "subtitle": "Discover exceptional properties available now",
                "properties": [
                    {
                        "image": "https://photos.zillowstatic.com/fp/1ee2dc26d7ebf083e94e7bbc15c1d5c7-cc_ft_1536.jpg",
                        "price": "$237500",
                        "location": "Denham Springs, LA",
                        "title": "1426 Weeping Willow Dr, Denham Springs, LA 70726 | Zillow",
                        "bedrooms": "3 Bed",
                        "area": "1937 sqft",
                        "url": "/cms/property/PROP0000014/"
                    },
                    {
                        "image": "https://photos.zillowstatic.com/fp/1ee2dc26d7ebf083e94e7bbc15c1d5c7-cc_ft_1536.jpg",
                        "price": "$237500",
                        "location": "Denham Springs, LA",
                        "title": "1426 Weeping Willow Dr, Denham Springs, LA 70726 | Zillow",
                        "bedrooms": "3 Bed",
                        "area": "1937 sqft",
                        "url": "/cms/property/PROP0000014/"
                    },
                    {
                        "image": "https://photos.zillowstatic.com/fp/1ee2dc26d7ebf083e94e7bbc15c1d5c7-cc_ft_1536.jpg",
                        "price": "$237500",
                        "location": "Denham Springs, LA",
                        "title": "1426 Weeping Willow Dr, Denham Springs, LA 70726 | Zillow",
                        "bedrooms": "3 Bed",
                        "area": "1937 sqft",
                        "url": "/cms/property/PROP0000013/"
                    },
                    {
                        "image": "https://themewagon.github.io/property/images/img_1.jpg",
                        "price": "$350,000",
                        "location": "San Francisco, CA",
                        "title": "Modern Family Home",
                        "url": "/cms/property/PROP0000012/"
                    },
                    {
                        "image": "https://themewagon.github.io/property/images/img_1.jpg",
                        "price": "$350,000",
                        "location": "San Francisco, CA",
                        "title": "Modern Family Home",
                        "url": "/cms/property/PROP0000011/"
                    },
                    {
                        "image": "https://themewagon.github.io/property/images/img_1.jpg",
                        "price": "$350,000",
                        "location": "San Francisco, CA",
                        "title": "Modern Family Home",
                        "url": "/cms/property/PROP0000010/"
                    }
                ],
                "cta": {
                    "label": "View All Properties",
                    "url": "/cms/properties/",
                    "icon": "home"
                }
            }
        },
        {
            "type": "services",
            "id": "services-001",
            "content": {
                "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "textColor": "white",
                "title": "Our Services",
                "subtitle": "Comprehensive real estate solutions tailored to your needs",
                "services": [
                    {
                        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                        "alt": "Property Sales",
                        "title": "Property Sales",
                        "description": "Comprehensive property sales services including market analysis, pricing strategy, and professional marketing to get you the best value.",
                        "cta": { "label": "Learn More", "url": "/services/property-sales/" }
                    },
                    {
                        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                        "alt": "Investment Consulting",
                        "title": "Investment Consulting",
                        "description": "Expert investment advice for real estate portfolios including market analysis, property selection, and ROI optimization strategies.",
                        "cta": { "label": "Discover", "url": "/services/investment-consulting/" }
                    },
                    {
                        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                        "alt": "Commercial Real Estate",
                        "title": "Commercial Real Estate",
                        "description": "Specialized services for commercial properties including office spaces, retail locations, and industrial facilities.",
                        "cta": { "label": "View Details", "url": "/services/commercial-real-estate/" }
                    },
                    {
                        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                        "alt": "Relocation Services",
                        "title": "Relocation Services",
                        "description": "Comprehensive relocation assistance including neighborhood research, school information, and local area insights for smooth transitions.",
                        "cta": { "label": "Contact Us", "url": "/services/relocation/" }
                    }
                ],
                "whyChooseUs": {
                    "title": "Why Choose Our Services?",
                    "features": [
                        {
                            "icon": "shield-alt",
                            "title": "Trusted & Reliable",
                            "description": "Years of experience in real estate"
                        },
                        {
                            "icon": "handshake",
                            "title": "Personalized Service",
                            "description": "Tailored to your specific needs"
                        },
                        {
                            "icon": "chart-line",
                            "title": "Market Expertise",
                            "description": "Deep local market knowledge"
                        }
                    ]
                }
            }
        },
        {
            "type": "customer-feedback",
            "id": "testimonials-001",
            "content": {
                "backgroundColor": "#ffffff",
                "textColor": "#333333",
                "title": "What Our Clients Say",
                "subtitle": "Success Stories from Satisfied Homeowners",
                "description": "Discover how we helped our clients find their perfect properties and achieve their real estate goals.",
                "testimonials": [
                    {
                        "rating": 5,
                        "quote": "APM Reality made our first home buying experience incredible. They found us the perfect house within our budget and guided us through every step.",
                        "author": {
                            "name": "Sarah Johnson",
                            "role": "Homeowner",
                            "tagline": "First-time Buyer",
                            "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        }
                    },
                    {
                        "rating": 5,
                        "quote": "The investment properties recommended by APM Reality have consistently delivered excellent returns. Their market knowledge is unmatched.",
                        "author": {
                            "name": "Michael Chen",
                            "role": "Property Investor",
                            "tagline": "Real Estate Portfolio",
                            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        }
                    },
                    {
                        "rating": 5,
                        "quote": "APM Reality sold our house in just 2 weeks for above asking price. Their marketing strategy and negotiation skills are outstanding.",
                        "author": {
                            "name": "Emily Rodriguez",
                            "role": "Home Seller",
                            "tagline": "Recent Seller",
                            "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        }
                    },
                    {
                        "rating": 5,
                        "quote": "Finding the right commercial space was crucial for our business. APM Reality understood our needs and found the perfect location.",
                        "author": {
                            "name": "David Thompson",
                            "role": "Commercial Investor",
                            "tagline": "Business Owner",
                            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        }
                    },
                    {
                        "rating": 5,
                        "quote": "APM Reality specializes in luxury properties and found us an exceptional estate that exceeded all our expectations.",
                        "author": {
                            "name": "Lisa Wang",
                            "role": "Luxury Home Buyer",
                            "tagline": "High-end Property",
                            "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        }
                    },
                    {
                        "rating": 5,
                        "quote": "Moving to a new city was stressful, but APM Reality made it seamless. They found us the perfect neighborhood and home.",
                        "author": {
                            "name": "Robert Kim",
                            "role": "Relocation Client",
                            "tagline": "Corporate Relocation",
                            "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        }
                    }
                ]
            }
        },
        {
            "type": "contact-section",
            "id": "contact-001",
            "content": {
                "backgroundColor": "#2c3e50",
                "textColor": "#ffffff",
                "title": "Get In Touch",
                "subtitle": "Ready to Find Your Perfect Property?",
                "description": "Contact our expert team at APM Reality today to start your property search journey. We're here to help you find the home of your dreams.",
                "form": {
                    "action": "/contact/submit",
                    "method": "POST",
                    "fields": [
                        { "type": "text", "label": "Full Name", "name": "name", "required": true },
                        { "type": "email", "label": "Email Address", "name": "email", "required": true },
                        { "type": "tel", "label": "Phone Number", "name": "phone", "required": false },
                        { "type": "text", "label": "Subject", "name": "subject", "required": true },
                        { "type": "textarea", "label": "Message", "name": "message", "required": true, "rows": 5 }
                    ],
                    "submit": {
                        "label": "Send Message",
                        "icon": "paper-plane"
                    }
                }
            }
        },
        {
            "type": "footer-section",
            "id": "footer-001",
            "content": {
                "backgroundColor": "#1a1a1a",
                "textColor": "#ffffff",
                "brand": {
                    "logo": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                    "alt": "APM Reality Real Estate",
                    "name": "APM Reality Real Estate",
                    "description": "Your trusted partner in finding the perfect property. Professional real estate services with a personal touch."
                },
                "contact": {
                    "address": "123 Real Estate Blvd, Property City, PC 12345",
                    "phone": "+1 (555) 123-4567",
                    "email": "info@apmreality.com"
                },
                "quickLinks": [
                    { "label": "About Us", "url": "#about" },
                    { "label": "Services", "url": "#services" },
                    { "label": "Properties", "url": "#properties" },
                    { "label": "Contact", "url": "#contact" }
                ],
                "services": [
                    { "label": "Property Sales", "url": "#" },
                    { "label": "Property Management", "url": "#" },
                    { "label": "Investment Consulting", "url": "#" },
                    { "label": "Market Analysis", "url": "#" }
                ],
                "newsletter": {
                    "title": "Stay Updated",
                    "description": "Get the latest property listings, market insights, and real estate tips delivered to your inbox.",
                    "placeholder": "Enter your email",
                    "buttonLabel": "Subscribe"
                },
                "copyright":
                    "© APM Reality Real Estate. All rights reserved.",
                "social": [
                    { "icon": "facebook-f", "url": "#" },
                    { "icon": "twitter", "url": "#" },
                    { "icon": "linkedin-in", "url": "#" },
                    { "icon": "instagram", "url": "#" }
                ]
            }
        },
        {
            "type": "ui-widgets",
            "id": "ui-001",
            "content": {
                "scrollTop": {
                    "enabled": true,
                    "icon": "angle-up",
                    "position": "bottom-right"
                },
                "chatbot": {
                    "enabled": true,
                    "toggleButton": {
                        "icon": "chat-dots",
                        "backgroundColor": "#ffc107",
                        "textColor": "#000000",
                        "size": "60px",
                        "animation": "animate__swing"
                    },
                    "window": {
                        "title": "Live Chat",
                        "gradient": "linear-gradient(135deg, #007bff, #6610f2)",
                        "width": "350px",
                        "height": "500px",
                        "welcomeMessage": "Hi! How may I help you?",
                        "inputPlaceholder": "Type your message..."
                    }
                }
            }
        }
    ],
};
export default function Home() {
    const [pageContent, setPageContent] = useState(pageData);

    return (
        <div>
            <main className="pt-5">
                <PageRenderer
                    components={pageContent.components}
                    passData={(type, data) => {
                        const updatedContent = pageContent.components.map((item, i) =>
                            item.type === type ? { ...item, content: data } : item
                        );
                        setPageContent(prev => ({
                            ...prev,
                            components: updatedContent
                        }));
                    }}
                />
            </main>
        </div>
    )
}