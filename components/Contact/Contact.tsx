import {
    Button,
    Text,
    Title,
    Flex,
    TextInput,
    Fieldset,
    Group,
    LoadingOverlay
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import Script from 'next/script';
import classes from './Contact.module.css';

export default function Contact() {

    const [err, setErr] = useState({
        status: -999,
        message: ""
    });

    const [loadingVisibility, handleLoading] = useDisclosure(false);

    const [disabled, setDisabled] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: ''
        },

        validate: {
            email: (value: string) => (/^\S+@columbia.edu$/.test(value.toLowerCase()) ? null :
                "Please enter your @columbia.edu email."),
        },
    });

    const handleButton = () => {
        if (err.status === -999)
            return (<Button type="submit">Submit</Button>);
        else if (err.status === 200)
            return (
                <>
                    <Text c={"blue"}>Your response has been submitted!</Text>
                    <Button type="submit">Submitted!</Button>
                </>
            );
        else
            return (
                <>
                    <Text c={"red"}>Hmm... It is not working as intended. Try Again?</Text>
                    <Button color={"red"} type="submit">Send Again</Button>
                </>
            );
    }

    return (
        <Flex direction="column" justify="center" align="center" className={classes.topDiv}>
            <Text ta="left" mb="xl" maw="80%">
                If you would like to contact CQBS about anything, please
                email us: cqbs@columbia.edu
                <br />
                <br />
                We welcome all inquiries regarding Alumni Relations,
                Sponsorship, Recruiting, External Media, and other LGBTQ
                organizations from both Columbia and the wider community!
            </Text>
            <Title order={1} ta="center" mb="xl" maw="80%" mt="xl">
                Welcome Prospective Students
            </Title>
            <Text ta="left" mb="md" maw="80%">
                Welcome! We're thrilled to have you here. Please think of us as a helpful resource – we are happy to delve into what life is like at CQBS or simply chat. If you'd like to connect with a current member of CQBS, kindly fill out the form below. We'll reach out to you as soon as possible!
            </Text>
            <Flex pos="relative" w="80%" justify="center">
                <LoadingOverlay visible={loadingVisibility} zIndex={1000}
                    overlayProps={{
                        radius: "sm",
                        blur: 2
                    }} />
                <form
                    onSubmit={form.onSubmit(async ({ email }) => {
                        setDisabled(true);
                        handleLoading.open();
                        const response = await fetch('/api/new-student', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: email
                            })

                        });
                        if (response.ok) {
                            setErr({
                                status: 200,
                                message: "Your response has been successfully saved!"
                            })
                        }
                        else if (response.status >= 500) {
                            setErr({
                                status: 500,
                                message: "Internal Error: please try again later"
                            })
                            setDisabled(false);
                        } else if (response.status >= 400) {
                            setErr({
                                status: 400,
                                message: "Error submitting"
                            })
                            setDisabled(false);
                        }
                        handleLoading.close();
                    })}
                    style={{width: '100%'}}>
                    <Fieldset disabled={disabled} variant="unstyled">
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@columbia.edu"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                            name="email"
                        />
                        <Group justify="flex-end" mt="md">
                            {handleButton()}
                        </Group>
                    </Fieldset>
                </form>
            </Flex>
            <Script src="https://s.pageclip.co/v1/pageclip.js" strategy="beforeInteractive" />
        </Flex>
    );
}
