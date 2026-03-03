import Contact from "@/components/Contact/Contact";
import Head from "next/head";
import React from "react";
import { Title } from "@mantine/core";

export default function ContactUs() {

    return (
        <>
            <Head>
                <title>Connect | Columbia Queer Business Society</title>
            </Head>
            <Title ta="center" mb="xl" order={1}>
                Contact Us
            </Title>
            <Contact />
        </>
    );
}
