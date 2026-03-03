/**
 * Team Page
 */

import Team from '../../../components/Team/Team';
import React from "react";
import { Flex } from "@mantine/core";

// This is how you should format each member
export interface MemberType {
    name: string; // name of the member
    role: string; // role of the member
    about: string; // about or major
    pic: object; // imageObject imported from the public folder
}

// Import member photos (unfortunately, can't automate this, and it's for
// optimization purposes)
import Enzo from "@/public/Enzo.webp";
import Bobby from "@/public/Bobby.webp";
import Sai from "@/public/Sai.webp";
import AJ from "@/public/AJ.webp";
import Artemis from "@/public/Artemis.webp";
import Ashley from "@/public/Ashley.webp";
import Justin from "@/public/Justin.webp";
import Julia from "@/public/Julia.webp";
import Gavin from "@/public/Gavin.webp";
import Emma from "@/public/Emma.webp";
import Owen from "@/public/Owen.webp";
import Head from "next/head";

// Array of MemberType
const executiveTitle: string = "Executive Board";
const executiveOfficers: Array<MemberType> = [
    {
        name: "Sai Sai",
        role: "President",
        about: "Psychology",
        pic: Sai
    },
    {
        name: "Enzo Kim",
        role: "Vice President",
        about: "Economics and Creative Writing",
        pic: Enzo
    },
    {
        name: "Ashley Wong",
        role: "Vice President",
        about: "Computer Science",
        pic: Ashley
    },
    {
        name: "Artemis Edison",
        role: "Treasurer",
        about: "Economic History",
        pic: Artemis
    }
];

const executiveAdvisors: Array<MemberType> = [
    {
        name: "Justin Kiel",
        role: "Secretary",
        about: "Political Science",
        pic: Justin
    },
    {
        name: "Bobby Veiham",
        role: "Advisor",
        about: "Computer Science",
        pic: Bobby
    },
    {
        name: "A.J. Lebenns",
        role: "Advisor",
        about: "Economics",
        pic: AJ
    }
];

const committeeTitle: string = "Committee Chairs";
const committeeTeam: Array<MemberType> = [
    {
        name: "Julia Zhang",
        role: "Events Planning",
        about: "Financial Economics and English",
        pic: Julia
    },
    {
        name: "Gavin Xue",
        role: "Development",
        about: "Financial Economics",
        pic: Gavin
    },
    {
        name: "Emma Lu",
        role: "Marketing",
        about: "Economics and Art History",
        pic: Emma
    },
    {
        name: "Owen Puhl",
        role: "Technology",
        about: "Applied Mathematics",
        pic: Owen
    }
];

export default function TeamPage() {
    return (
        <>
            <Head>
                <title>Our Team | Columbia Queer Business Society</title>
            </Head>
            <Flex direction={"column"} gap={"xs"}>
                <Team
                    title={executiveTitle}
                    team={executiveOfficers}
                />
                <Team
                    team={executiveAdvisors}
                    centered={true}
                />
                <Team
                    title={committeeTitle}
                    team={committeeTeam}
                />
            </Flex>
        </>
    );
}
