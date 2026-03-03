import {Text, Flex} from '@mantine/core';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <Flex className={classes.footer} justify="center" align="center">
            <Text size="sm" c="dimmed">
                © 2026 Columbia Queer Business Society
            </Text>
        </Flex>
    );
}
