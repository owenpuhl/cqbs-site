import Mission from "@/components/Mission/Mission";
import imgSrc from "@/public/columbiaRainbow.webp";
import Head from "next/head";

/**
 * Mission Page
 */

// title of the mission page
const missionTitle = "Our Mission"

//mission statement
const missionStatement = [
    "The Columbia Queer Business Society (CQBS) is the first pre-professional LGBTQ community at Columbia University established in 2011, bringing together students interested in fields such as consulting, finance, technology, and public-sector business.",
    "We strive to de-stigmatize being \"out\" in the industry by fostering a supportive community and providing networking opportunities.",
    "We thrive on collaboration and frequently partner with companies and organizations, primarily within the banking, consulting, and technology sectors. Some of our past partners include Goldman Sachs, McKinsey & Company, Google, and Bain & Company."
]

// describe the image for visually impaired
const imgAlt = "Columbia Library with Pride Colors"



export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Our Mission | Columbia Queer Business Society</title>
            </Head>
            <Mission
                title={missionTitle}
                missionStatement={missionStatement}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
            />
        </>
    );
}
