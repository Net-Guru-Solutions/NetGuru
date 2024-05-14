import React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Section } from '@react-email/components';

interface ContactFormEmailProps {
    first_name: string;
    last_name: string;
    email: string;
    company_name: string;
    help: string;
    company_size: string;
    info: string;

}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ first_name, last_name, email, company_name, company_size, help, info }: ContactFormEmailProps) => {


    return (
        <Html>
            <Head />
            <Preview>Contact Form Submission</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>Contact Form Submission</Heading>
                    <Section style={section}>
                        <Text style={paragraph}><strong>First Name:</strong> {first_name}</Text>
                        <Text style={paragraph}><strong>Last Name:</strong> {last_name}</Text>
                        <Text style={paragraph}><strong>Email:</strong> {email}</Text>
                        <Text style={paragraph}><strong>Company Name:</strong> {company_name}</Text>
                        <Text style={paragraph}><strong>Company Size:</strong> {company_size}</Text>
                        <Text style={paragraph}><strong>Help:</strong> {help}</Text>
                        <Text style={paragraph}><strong>Info:</strong> {info}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: '#f6f6f6',
    fontFamily: 'Arial, sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const heading = {
    fontSize: '24px',
    color: '#333333',
};

const section = {
    marginTop: '20px',
};

const paragraph = {
    margin: '10px 0',
    fontSize: '16px',
    color: '#555555',
};

export default ContactFormEmail;
