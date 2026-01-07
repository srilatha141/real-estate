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
                alignment: 'center',
                bg_image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80',
                buttons: []
            },
        },
        {
            type: "feature-grid",
            id: "about-apm-realty",
            content: {
                backgroundColor: "#ffffff",
                textColor: "#333333",
                title: "Our Mission",
                subtitle: "About Our Real Estate Excellence",
                description: "With over 15 years in the real estate industry, we specialize in connecting clients with their perfect properties.",
                cta: {
                    label: "Explore Services",
                    url: "/services",
                    icon: "arrow-right"
                },
                image: {
                    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
                    alt: "our mission"
                }
            }
        },
        {
            type: "about",
            id: "who-we-are",
            content: {
                styles: {
                    padding: "py-5",
                    backgroundColor: "#1a1a1a",
                    textColor: "#ffffff"
                },
                layout: {
                    container: true,
                    row: "align-items-center",
                    columns: [
                        {
                            type: "content",
                            width: "col-lg-6",
                            animation: "fade-right",
                            padding: "pe-lg-5",
                            heading: {
                                title: "Who We Are",
                                titleClass: "display-5 fw-bold mb-4",
                                subtitle: "A Team You Can Trust With Your Future",
                                subtitleClass: "h3 fw-bold mb-4"
                            },
                            paragraphs: [
                                "We are a group of passionate developers, architects, and project managers dedicated to helping retirees and expats transition to a better lifestyle with ease.",
                                "With years of experience building in Ecuador, our bilingual team understands local regulations, permits, and construction standards — and we take care of it all for you.",
                                "We're committed to honesty, transparency, and providing personalized service every step of the way."
                            ]
                        },
                        {
                            type: "carousel",
                            width: "col-lg-6",
                            animation: "fade-left",
                            carouselId: "teamCarousel",
                            height: 400,
                            images: [
                                { "src": "", "alt": "Luxury Living Room" },
                                { "src": "", "alt": "Gourmet Kitchen" },
                                { "src": "", "alt": "Master Bedroom Suite" },
                                { "src": "", "alt": "Office Building Exterior" },
                                { "src": "", "alt": "Property Management Team" },
                                { "src": "", "alt": "Client Success Event" }
                            ]
                        }
                    ]
                }
            }
        },
        {
            "type": "premium-services",
            "id": "services",
            content: {
                "styles": {
                    "padding": "py-5",
                    "backgroundClass": "bg-white"
                },
                "header": {
                    "alignment": "text-center",
                    "width": "col-lg-8",
                    "animation": "fade-up",
                    "title": {
                        "text": "Our Premium Services",
                        "class": "display-5 fw-bold mb-4 text-dark",
                        "delay": 0
                    },
                    "subtitle": {
                        "text": "Comprehensive Real Estate Solutions",
                        "class": "h2 fw-bold mb-4 text-dark",
                        "delay": 100
                    },
                    "description": {
                        "text": "From property valuation to investment consulting, we offer a full range of real estate services.",
                        "class": "lead text-muted",
                        "delay": 200
                    }
                },
                "items": {
                    "grid": "row g-4",
                    "column": "col-lg-6",
                    "icon": {
                        "name": "check-circle",
                        "class": "text-success fs-4"
                    },
                    "animation": "fade-up",
                    "list": [
                        {
                            "title": "Luxury Properties",
                            "description": "Exclusive access to premium luxury homes and estates in prime locations.",
                            "delay": 100
                        },
                        {
                            "title": "Property Sales",
                            "description": "Comprehensive property sales services including market analysis, pricing strategy, and professional marketing to get you the best value.",
                            "delay": 101
                        },
                        {
                            "title": "Commercial Spaces",
                            "description": "Professional commercial properties for businesses and investments.",
                            "delay": 102
                        },
                        {
                            "title": "Investment Consulting",
                            "description": "Expert investment advice for real estate portfolios including market analysis, property selection, and ROI optimization strategies.",
                            "delay": 103
                        },
                        {
                            "title": "Investment Opportunities",
                            "description": "High-yield investment properties with guaranteed returns.",
                            "delay": 104
                        },
                        {
                            "title": "Commercial Real Estate",
                            "description": "Specialized services for commercial properties including office spaces, retail locations, and industrial facilities.",
                            "delay": 105
                        }
                    ]
                }
            }
        },
        {
            type: "feature-grid",
            id: "about-apm-realty",
            content: {
                backgroundColor: "#ffffff",
                textColor: "#333333",
                // title: "Why Retire in Ecuador?",
                title: "An Unmatched Lifestyle — at an Unbelievable Value",
                description: "Located in one of the most beautiful regions of Ecuador, Toscana offers a perfect blend of natural beauty, safety, and affordability. Whether you're drawn to the pleasant year-round climate, lower cost of living, or the welcoming local culture — Toscana makes it easy to say yes to a better life.",
                subDescription: "You get more than a home here. You get community, peace of mind, and the chance to enjoy your golden years in a place where your money goes further — and your lifestyle goes higher.",
                image: {
                    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
                    alt: "our mission"
                },
                "benefits": {
                    "icon": {
                        "name": "check-circle",
                        "class": "text-success me-3 mt-1"
                    },
                    "list": [
                        {
                            "title": "The World's Best Climate:",
                            "text": "The Ecuadorian highlands boast a year-round spring-like climate. No harsh winters, no scorching summers. Just pure, comfortable living."
                        },
                        {
                            "title": "An Affordable Retirement on the US Dollar:",
                            "text": "Your Social Security and retirement savings go significantly further here. Enjoy fine dining, travel, and hobbies without financial stress."
                        },
                        {
                            "title": "A Safe and Welcoming Haven:",
                            "text": "Ecuador is known for its warm, friendly culture and is considered one of the safest countries in Latin America for American retirees."
                        },
                        {
                            "title": "First-World Infrastructure:",
                            "text": "With modern healthcare, high-speed internet, and easy access to an international airport, you sacrifice nothing in terms of convenience."
                        },
                        {
                            "title": "Unbelievable Natural Beauty:",
                            "text": "From your home, you're just hours away from the Amazon rainforest, tropical beaches, and the historic, UNESCO-honored city of Quito."
                        }
                    ]
                }
            }
        },
        {
            "type": "discovery-call",
            "id": "cta-discovery-call",
            content: {
                "styles": {
                    "padding": "py-5",
                    "position": "position-relative overflow-hidden",
                    "background": {
                        "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2000&q=80",
                        "size": "cover",
                        "position": "center",
                        "attachment": "fixed",
                        "overlay": {
                            "color": "rgba(0,0,0,0.7)"
                        }
                    }
                },
                "layout": {
                    "left": {
                        "width": "col-lg-8",
                        "card": {
                            "class": "bg-white p-5 rounded-3 shadow-lg",
                            "badge": {
                                "text": "Your Paradise is Waiting, But It Won't Wait Forever.",
                                "class": "text-primary fw-bold"
                            },
                            "heading": {
                                "text": "SCHEDULE NO-OBLIGATION DISCOVERY CALL NOW!",
                                "class": "display-6 fw-bold mb-4 text-dark"
                            },
                            "description": {
                                "text": "We have only 8 parcels in this exclusive development. Once they're gone, this specific opportunity—with these views, this location, and this pricing—is gone forever.",
                                "class": "text-muted mb-4"
                            }
                        }
                    },
                    "right": {
                        "width": "col-lg-4",
                        "card": {
                            "class": "bg-white p-4 rounded-3 shadow-lg mt-4 mt-lg-0",
                            "title": {
                                "text": "The Process is Simple:",
                                "class": "fw-bold mb-4 text-dark"
                            },
                            "steps": {
                                "badge": {
                                    "class": "badge bg-primary rounded-circle me-3 mt-1",
                                    "style": {
                                        "width": "24px",
                                        "height": "24px"
                                    }
                                },
                                "list": [
                                    {
                                        "step": "1",
                                        "title": "Schedule a Call:",
                                        "text": "A quick, 15-minute chat to answer your questions."
                                    },
                                    {
                                        "step": "2",
                                        "title": "Get The Details:",
                                        "text": "We'll send you our digital brochure with floor plans, pricing, and visa info."
                                    },
                                    {
                                        "step": "3",
                                        "title": "Plan Your Visit:",
                                        "text": "Let's lock in your \"Fly & Buy\" tour."
                                    }
                                ]
                            },
                            "cta": {
                                "text": "Schedule Discovery Call 🔒",
                                "href": "mailto:info@apmreality.com",
                                "class": "btn btn-primary btn-lg w-100 rounded-pill"
                            }
                        }
                    }
                }
            }
        },
        {
            "type": "get-started",
            "id": "get-started",
            "content": {
                "styles": {
                    "padding": "py-5",
                    "backgroundColor": "#1a1a1a",
                    "textColor": "#ffffff"
                },
                "alignment": "text-center",
                "width": "col-lg-10",
                "heading": {
                    "text": "Ready to Get Started?",
                    "class": "display-5 fw-bold mb-4 text-white",
                    "animation": "fade-up",
                    "delay": 0
                },
                "description": {
                    "text": "Our expert team is here to help you find the property of your dreams.",
                    "class": "lead text-light mb-5",
                    "animation": "fade-up",
                    "delay": 100
                },
                "features": {
                    "grid": "row g-4 mb-5",
                    "column": "col-lg-3 col-md-6",
                    "animation": "fade-up",
                    "list": [
                        {
                            "icon": "mobile-alt",
                            "text": "Regular updates via WhatsApp",
                            "delay": 200
                        },
                        {
                            "icon": "camera",
                            "text": "Drone and ground-level photos",
                            "delay": 250
                        },
                        {
                            "icon": "user-shield",
                            "text": "Access to a private client portal",
                            "delay": 300
                        },
                        {
                            "icon": "headset",
                            "text": "A direct line to your personal project manager",
                            "delay": 350
                        }
                    ]
                },
            }
        }


    ]
}
export default function About() {
    const [pageContent, setPageContent] = useState(pageData);

    return (
        <>
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
        </>
    )
}