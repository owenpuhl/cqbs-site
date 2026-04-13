import classes from './Mission.module.css';
import { Flex, Image, Text, Title } from "@mantine/core";
import NextImage, { StaticImageData } from 'next/image';

export default function Mission(
    props: {
        title: string,
        missionStatement: string | string[],
        imgSrc: StaticImageData,
        imgAlt: string
    }
) {
    const { title, missionStatement, imgSrc, imgAlt } = props;
    const paragraphs = Array.isArray(missionStatement) ? missionStatement : [missionStatement];
    return <div>
        <Title order={1}
            className={classes.heading}
        >
            {title}
        </Title>
        <Flex direction={{
            base: 'column',
            md: 'row-reverse'
        }}
            gap={{
                base: 'xs',
                md: '4vw'
            }}
            align={{
                base: 'center',
                md: 'flex-start'
            }}
            justify={"center"}
            wrap={"wrap"}
        >
            <div>
                {paragraphs.map((paragraph, index) => (
                    <Text key={index} className={classes.paragraph} mb="lg">
                        {paragraph}
                    </Text>
                ))}
            </div>
            <Image className={classes.img}
                radius="lg"
                src={imgSrc}
                alt={imgAlt}
                mt={"xs"}
                component={NextImage}
                placeholder={"blur"}
            />
        </Flex>
    </div>;
}
