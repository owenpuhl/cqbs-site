import { Flex, Image } from '@mantine/core';
import classes from './Partners.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Partners() {
    const allPartners = [
        { name: 'BCG', image: '/Spring25/BCG.png' },
        { name: 'Bank of America', image: '/Spring25/BofA.png' },
        { name: 'ClusterQ', image: '/Spring25/ClusterQ.webp' },
        { name: 'Columbia Pride', image: '/Spring25/ColumbiaPride.png' },
        { name: 'IBM', image: '/Spring25/IBM.png' },
        { name: 'Iron Mountain', image: '/Spring25/IronMountain.avif' },
        { name: 'Microsoft', image: '/Spring25/Microsoft.png' },
        { name: 'Société Générale', image: '/Spring25/SocGen.png' },
        { name: 'AlphaSights', image: '/Fall25/AlphaSights.jpeg' },
        { name: 'Atlantic', image: '/Fall25/Atlantic.png' },
        { name: 'Bloomberg', image: '/Fall25/Bloomberg.png' },
        { name: 'Columbia Business School', image: '/Fall25/ColumbiaBusinessSchool.png' },
        { name: 'Columbia Law', image: '/Fall25/ColumbiaLaw.png' },
        { name: 'Google', image: '/Fall25/Google.gif' },
        { name: 'Sony', image: '/Fall25/Sony.png' },
    ];

    // Split into 3 layers
    const itemsPerRow = Math.ceil(allPartners.length / 3);
    const layer1 = allPartners.slice(0, itemsPerRow);
    const layer2 = allPartners.slice(itemsPerRow, itemsPerRow * 2);
    const layer3 = allPartners.slice(itemsPerRow * 2);

    const track1Ref = useRef<HTMLDivElement>(null);
    const track2Ref = useRef<HTMLDivElement>(null);
    const track3Ref = useRef<HTMLDivElement>(null);

    const [durations, setDurations] = useState({ d1: '40s', d2: '40s', d3: '40s' });

    useEffect(() => {
        const calculateDurations = () => {
            const width1 = track1Ref.current?.scrollWidth || 1;
            const width2 = track2Ref.current?.scrollWidth || 1;
            const width3 = track3Ref.current?.scrollWidth || 1;

            const maxWidth = Math.max(width1, width2, width3);
            const baseDuration = 60;

            const d1 = (width1 / maxWidth) * baseDuration;
            const d2 = (width2 / maxWidth) * baseDuration;
            const d3 = (width3 / maxWidth) * baseDuration;

            setDurations({
                d1: `${d1}s`,
                d2: `${d2}s`,
                d3: `${d3}s`
            });
        };

        const timer = setTimeout(calculateDurations, 500);
        window.addEventListener('load', calculateDurations);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('load', calculateDurations);
        };
    }, []);

    return (
        <Flex direction="column" className={classes.container}>
            <Flex className={classes.scrollContainer}>
                <div
                    ref={track1Ref}
                    className={classes.scrollTrack}
                    style={{ animationDuration: durations.d1 }}
                >
                    {[...layer1, ...layer1].map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className={classes.logoWrapper}>
                            <Image
                                src={partner.image}
                                alt={partner.name}
                                h={100}
                                w="auto"
                                fit="contain"
                            />
                        </div>
                    ))}
                </div>
            </Flex>
            <Flex className={classes.scrollContainer}>
                <div
                    ref={track2Ref}
                    className={classes.scrollTrack}
                    style={{ animationDuration: durations.d2 }}
                >
                    {[...layer2, ...layer2].map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className={classes.logoWrapper}>
                            <Image
                                src={partner.image}
                                alt={partner.name}
                                h={100}
                                w="auto"
                                fit="contain"
                            />
                        </div>
                    ))}
                </div>
            </Flex>
            <Flex className={classes.scrollContainer}>
                <div
                    ref={track3Ref}
                    className={classes.scrollTrack}
                    style={{ animationDuration: durations.d3 }}
                >
                    {[...layer3, ...layer3].map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className={classes.logoWrapper}>
                            <Image
                                src={partner.image}
                                alt={partner.name}
                                h={100}
                                w="auto"
                                fit="contain"
                            />
                        </div>
                    ))}
                </div>
            </Flex>
        </Flex>
    );
}
