import classes from './Team.module.css';
import {Flex, Image, SimpleGrid, Title} from "@mantine/core";
import NextImage from "next/image";
import {useEffect, useState} from "react";
import {MemberType} from "@/pages/about/team";

export default function Team(props: {
    team: MemberType[],
    title?: string,
    subtitle?: string,
    justify?: string,
    centered?: boolean
}) {
    const [url, setUrl] = useState<Location["host"]>();

    useEffect(() => {
        setUrl(window.location.host);
    }, []);

    console.log(url);
    const mapTeams = props.team.map((member: MemberType) => {
        return (
            <div className={classes.member} key={member.name}>
                <div>
                    <Image
                        src={member.pic}
                        radius="xl"
                        h={200}
                        w={200}
                        alt={`Picture of ${member.name}`}
                        component={NextImage}
                        placeholder={"blur"}

                    />
                </div>
                <h2 className={classes.h}>{member.name}</h2>
                <h3 className={classes.h}>{member.role}</h3>
                <p>{member.about}</p>
            </div>
        )
    });

    return (
        <Flex direction={"column"}>
            {props.title && (
                <Flex className={classes.topDiv}>
                    <Title order={1} className={classes.head}>
                        {props.title}
                    </Title>
                    {props.subtitle && (
                        <Title order={2} className={classes.sub}>
                            {props.subtitle}
                        </Title>
                    )}
                </Flex>
            )}
            {props.centered ? (
                <Flex justify="center" wrap="wrap" gap="md">
                    {mapTeams}
                </Flex>
            ) : (
                <SimpleGrid cols={{
                    base: 1,
                    sm: 2,
                    lg: 3,
                    xl: 4
                }} mx="auto">
                    {mapTeams}
                </SimpleGrid>
            )}
        </Flex>
    );
}
