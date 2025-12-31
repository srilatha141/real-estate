import { useState } from "react"
import PageRenderer from '../PageRenderer';

const propertiesPageData = {
    components: [
        {
            id: 'uuid-or-unique-string-1',
            type: 'hero-flexible',
            content: {
                title: 'Property Listings',
                subtitle: 'Discover your perfect property from our extensive collection',
                alignment: 'center',
                bg_color: '#f39c12',
            },
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
    ]
}

export default function Properties() {
    const [pageContent, setPageContent] = useState(propertiesPageData);
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

