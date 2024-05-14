import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Section, Img } from '@react-email/components';

interface NewsletterEmailProps {
  firstName: string;
  month: string;
  content: string;
}

const NewsletterEmail: React.FC<NewsletterEmailProps> = ({ firstName, month, content }) => (
  <Html>
    <Head />
    <Preview>{month} Newsletter</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src="https://example.com/logo.png" alt="Net Guru Solutions" style={logo} />
        <Heading style={heading}>{month} Newsletter</Heading>
        <Section style={section}>
          <Text style={paragraph}>Hi {firstName},</Text>
          <Text style={paragraph}>{content}</Text>
          <Text style={paragraph}>Best regards,</Text>
          <Text style={paragraph}>The Net Guru Solutions Team</Text>
        </Section>
        <Section style={footer}>
          <Text style={footerText}>Net Guru Solutions, 123 Business St, City, Country</Text>
          <Text style={footerText}>© 2024 Net Guru Solutions. All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

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
  maxWidth: '600px',
};

const logo = {
  maxWidth: '150px',
  margin: '0 auto 20px auto',
  display: 'block',
};

const heading = {
  fontSize: '24px',
  color: '#333333',
  textAlign: 'center' as 'center',
};

const section = {
  marginTop: '20px',
};

const paragraph = {
  margin: '10px 0',
  fontSize: '16px',
  color: '#555555',
};

const footer = {
  borderTop: '1px solid #eaeaea',
  marginTop: '20px',
  paddingTop: '10px',
  textAlign: 'center' as 'center',
};

const footerText = {
  fontSize: '12px',
  color: '#aaaaaa',
};

export default NewsletterEmail;
