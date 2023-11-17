import Head from "next/head";

import ContactForm from "@/components/contack/contact-form";

export default function ContactPage() {
    return (
        <>
        <Head>
            <title>Kontaktiere mich</title>
            <meta name='description' content='Schicken Sie mir Ihre Nachrichten!' />
        </Head>
        <ContactForm />
        </>
    );
}