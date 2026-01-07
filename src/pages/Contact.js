import { useState } from "react";
import PageRenderer from '../PageRenderer';

const pageData = {
    components: [
        {

            id: 'contact-page',
            type: 'contact',
            content: {
                heading: 'FOR COMPANIES WITH RECURRING REVENUE',
                title: `Grow on your own terms`,
                title1: `Get paid by the year,`,
                title2: `charge by the month`,
                description: `APM Reality - Premium Real Estate transforms recurring revenue`,
                description1: 'into upfront capital for growth without debt or dilution.'
            }
        }
    ]
}

export default function Contact() {
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
