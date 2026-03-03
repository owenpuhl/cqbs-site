import '@mantine/core/styles.css';
import '@/styles/global.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Flex, MantineProvider} from '@mantine/core';
import {theme} from '@/theme';
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu';
import Footer from '@/components/Footer/Footer';
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"

export default function App({
                                Component,
                                pageProps
                            }: AppProps) {
    return (
        <MantineProvider theme={theme}>
            <Head>
                <title>Columbia Queer Business Society</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <meta property="description"
                      content="Website of the Columbia Queer Business Society"/>
                <meta property="og:image"
                      content="https://github.com/KingMedieval/cqbs/blob/master/public/cqbsLogoLight.png?raw=true"/>
                <meta property="og:site_name"
                      content="Columbia Queer Business Society"/>
                <meta property="og:description"
                      content="Website of the Columbia Queer Business Society"/>
                <meta property="og:url" content="https://cqbs.vercel.app"/>
                <meta name="google-site-verification"
                      content="2uJhMYtogLkguDFtTnMcd48c8CpS0s9Am-4X_vwF4_M"/>
                <link rel="shortcut icon" href="/cqbsFavicon.png"/>
            </Head>
            <HeaderMenu/>
            <Flex direction={"column"} gap={"xl"}>
                <Component {...pageProps} />
            </Flex>
            <Footer/>
            <SpeedInsights/>
            <Analytics/>
        </MantineProvider>
    );
}
