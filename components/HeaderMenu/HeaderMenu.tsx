import {
    Menu,
    Group,
    Center,
    Burger,
    Container,
    Flex
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconChevronDown} from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import {useRouter} from 'next/router'
import {Image} from '@mantine/core';
import Link from "next/link";

type NavLink = { link: string; label: string; links?: { link: string; label: string }[] };

const links: NavLink[] = [
    {
        link: '/about',
        label: 'Mission'
    },
    {
        link: '/about/team',
        label: 'Team'
    },
{
        link: '/contact',
        label: 'Connect'
    },
];

export default function HeaderMenu() {
    const [opened, {toggle}] = useDisclosure(false);

    const router = useRouter();

    const items = links.map((link, i) => {
        const menuItems = link.links?.map((item, j) => (
            <Menu.Item
                key={`${link.label}-${item.label}-${i}-${j}`}
                onClick={() => router.push(item.link).catch((error) => console.log(error))}
            >{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={`${link.label}-${i}-l`} trigger="hover"
                      transitionProps={{exitDuration: 0}} withinPortal>
                    <Menu.Target>
                        <Link
                            href={link.link}
                            className={classes.link}
                            prefetch={true}
                        >
                            <Center>
                                <span
                                    className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5}/>
                            </Center>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link
                key={`k-${link.label}-${i}`}
                href={link.link}
                className={classes.link}
                prefetch={true}
            >
                {link.label}
            </Link>
        );
    });

    const itemsMobile = links.map((link, i) => {
        const menuItems = link.links?.map((item, j) => (
            <Menu.Item
                key={`${i}-${link.label}-${item.label}-${j}`}
                onClick={() => router.push(item.link).catch((error) => console.log(error))}
                className={classes.mobileItem}
            >
                {item.label}
            </Menu.Item>
        ));

        if (menuItems) {
            return (
                <div key={`${link.label}+${link.link}`}>
                    <Menu.Label>{link.label}</Menu.Label>
                    <Menu.Divider/>
                    {menuItems}
                    <Menu.Divider/>
                </div>
            );
        }

        return (
            <Menu.Item
                key={`m-${link.label}-${i}`}
                onClick={() => {
                    router.push(link.link).catch((error) => {
                        console.log(error)
                    });
                }}
                className={classes.mobileItem}
            >
                {link.label}
            </Menu.Item>
        );
    });

    return (
        <header className={classes.header} style={router.pathname === '/' ? { marginBottom: 0 } : {}}>
            <Container>
                <Flex direction="row" justify="space-between" pt="0.4rem">
                    <Link href="/">
                        <Image
                            src={'/cqbsLogo.webp'}
                            h={40}
                            w="auto"
                            className={classes.logo}
                            alt={"cqbs logo on light mode"}
                            darkHidden
                            fit="contain"

                        />
                        <Image
                            src={'/cqbsLogoLight.webp'}
                            h={40}
                            w="auto"
                            className={classes.logo}
                            alt={"cqbs logo on dark mode"}
                            lightHidden
                            fit="contain"
                        />
                    </Link>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>

                    <Menu
                        width={"90%"}
                        offset={30}
                        onClose={toggle}
                        floatingStrategy={'absolute'}
                    >
                        <Menu.Target>
                            <Burger opened={opened} onClick={toggle} size="sm"
                                    hiddenFrom="sm"
                                    aria-label="Open mobile menu"/>
                        </Menu.Target>
                        <Menu.Dropdown hiddenFrom="sm" color="white">
                            {itemsMobile}
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Container>
        </header>
    );
}
