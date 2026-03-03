import {Text, Title, Image, Flex} from '@mantine/core';
import classes from './Welcome.module.css';
import Partners from '../Partners/Partners';

export default function Welcome() {
    return (
        <>
            <div className={classes.header}></div>
            <div className={classes.welcomeDiv}>
                <Flex direction="column" align="center" mt={100}>
                    <Image
                        src={'/cqbsLogo.webp'}
                        alt="CQBS logo on light mode"
                        darkHidden
                        fit="contain"
                        className={classes.logoImage}
                    />
                    <Image
                        src={'/cqbsLogoLight.webp'}
                        alt="CQBS logo on dark mode"
                        lightHidden
                        fit="contain"
                        className={classes.logoImage}
                    />
                </Flex>
                <Title className={classes.title} ta="center" mt="md">
                    Columbia Queer Business Society
                </Title>
                <Text c="dimmed" ta="center" size="lg" maw={"65%"} mx="auto"
                      mt="xl" mb="md">
                    Columbia Queer Business Society is the premier business group for LGBTQ+ undergraduates at Columbia University.
                </Text>
                <Text c="dimmed" ta="center" size="lg" maw={"55%"} mx="auto">
                    We strive to de-stigmatize being "out" in the industry by connecting members with exclusive events, site visits, and community resources.
                </Text>
                <Title order={2} ta="center" mt={200} mb="md" fw={900} style={{ fontFamily: 'inherit', fontSize: '3rem' }}>
                    2025 Events
                </Title>
                <Partners />
            </div>
        </>
    );
}
