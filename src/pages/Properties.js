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
                buttons: []
            },
        },
        {
            "type": "property-search",
            "id": "property-search",
            content: {
                "styles": {
                    "sectionClass": "cms-section cms-section-alt",
                    "cardClass": "search-filter-card property-card shadow-sm p-4 mb-5",
                    "animation": "fade-up"
                },
                "header": {
                    "title": "Find Your Perfect Property",
                    "class": "mb-4 text-center"
                },
                "form": {
                    "method": "get",
                    "action": "",
                    "basicFilters": {
                        "grid": "row g-3 align-items-end",
                        "fields": [
                            {
                                "type": "text",
                                "name": "q",
                                "label": "Search",
                                "icon": "search",
                                "placeholder": "City, address, or keyword...",
                                "column": "col-md-3"
                            },
                            {
                                "type": "select",
                                "name": "property_type",
                                "label": "Type",
                                "icon": "home",
                                "column": "col-md-2",
                                "options": [
                                    { "label": "Any Type", "value": "" },
                                    { "label": "Apartment", "value": "apartment" },
                                    { "label": "House", "value": "house" },
                                    { "label": "Condominium", "value": "condo" },
                                    { "label": "Townhouse", "value": "townhouse" },
                                    { "label": "Commercial", "value": "commercial" },
                                    { "label": "Land", "value": "land" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "status",
                                "label": "Status",
                                "icon": "flag",
                                "column": "col-md-2",
                                "options": [
                                    { "label": "Any Status", "value": "" },
                                    { "label": "Available", "value": "available" },
                                    { "label": "Sold", "value": "sold" },
                                    { "label": "Rented", "value": "rented" },
                                    { "label": "Pending", "value": "pending" }
                                ]
                            },
                            {
                                "type": "text",
                                "name": "city",
                                "label": "City",
                                "icon": "city",
                                "placeholder": "Any City",
                                "column": "col-md-2"
                            },
                            {
                                "type": "text",
                                "name": "state",
                                "label": "State",
                                "icon": "map",
                                "placeholder": "Any State",
                                "column": "col-md-2"
                            }
                        ],
                        "submit": {
                            "icon": "search",
                            "class": "btn btn-primary w-100",
                            "column": "col-md-1"
                        }
                    },
                    "advancedFilters": {
                        "id": "advancedFilters",
                        "toggleText": "Advanced Filters",
                        "fields": [
                            {
                                "type": "number",
                                "name": "price_min",
                                "label": "Min Price",
                                "icon": "dollar-sign",
                                "column": "col-md-2"
                            },
                            {
                                "type": "number",
                                "name": "price_max",
                                "label": "Max Price",
                                "icon": "dollar-sign",
                                "column": "col-md-2"
                            },
                            {
                                "type": "number",
                                "name": "area_min",
                                "label": "Min Area (sqft)",
                                "icon": "ruler-combined",
                                "column": "col-md-2"
                            },
                            {
                                "type": "number",
                                "name": "area_max",
                                "label": "Max Area (sqft)",
                                "icon": "ruler-combined",
                                "column": "col-md-2"
                            },
                            {
                                "type": "select",
                                "name": "bedrooms",
                                "label": "Bedrooms",
                                "icon": "bed",
                                "column": "col-md-2",
                                "options": [
                                    { "label": "Any", "value": "" },
                                    { "label": "1+", "value": "1" },
                                    { "label": "2+", "value": "2" },
                                    { "label": "3+", "value": "3" },
                                    { "label": "4+", "value": "4" },
                                    { "label": "5+", "value": "5" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "bathrooms",
                                "label": "Bathrooms",
                                "icon": "bath",
                                "column": "col-md-2",
                                "options": [
                                    { "label": "Any", "value": "" },
                                    { "label": "1+", "value": "1" },
                                    { "label": "2+", "value": "2" },
                                    { "label": "3+", "value": "3" },
                                    { "label": "4+", "value": "4" }
                                ]
                            }
                        ],
                        "actions": {
                            "apply": {
                                "text": "Apply Filters",
                                "class": "btn btn-primary me-2",
                                "icon": "filter"
                            },
                            "clear": {
                                "text": "Clear All",
                                "href": "?",
                                "class": "btn btn-outline-secondary",
                                "icon": "times"
                            }
                        }
                    }
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

