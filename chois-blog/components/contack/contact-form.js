import { useState, useEffect } from 'react';

import classes from './contact-form.module.css';

import Notification from '../ui/notification';

async function sendContactData(contactDetails) {

    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Irgendwas ist schiefgegangen!');
    }
}


export default function ContactForm() {
    
    const [enteredEmail, setEnteredEmail ] = useState('');
    const [enteredName, setEnteredName ] = useState('');
    const [enteredMessage, setEnteredMessage ] = useState('');
    const [requestStatus, setRequestStatus] = useState(); // pending, success, error
    const [requestError, setRequestError] = useState();


    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 2000)
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(event) {
        event.preventDefault();
        
        // optional: add client-side validation
        setRequestStatus('pending');
        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            });
            setRequestStatus('success');
            setEnteredMessage('');
            setEnteredEmail('');
            setEnteredName('');
        } catch (error) { 
            setRequestError(error.message);
            setRequestStatus('error');
        }
    }  
    
    let notification;
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            tilte: 'Schicke Nachricht...',
            message: 'Ihre Nachricht ist unterwegs. Wie kann ich Ihnen helfen?'
        };
    } 
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Erfolg',
            message: 'Ihre Nachricht ist unterwegs!'
        };
    } 
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Fehler',
            message: requestError
        };           
    }

    return (
        <>
        <section className={classes.contact}>
            <h1>Wie kann ich dir helfen?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls} >
                    <div className={classes.control} >
                        <label htmlFor='email'>Ihre Email</label>
                        <input type='email' id='email' required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
                    </div>
                    <div className={classes.control} >
                        <label htmlFor='name'>Ihr Name</label>
                        <input type='text' id='name' required value={enteredName} onChange={event => setEnteredName(event.target.value)}/>
                    </div>
                </div>
                <div className={classes.control} >
                    <label htmlFor='message'>Ihre Nachricht</label>
                    <textarea id='message' rows='5' required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}></textarea>
                </div>    
                <div className={classes.actions}>
                    <button>Nachricht senden</button>
                </div>
            </form>
            {notification && (
                <Notification 
                    status={notification.status} 
                    title={notification.title} 
                    message={notification.message}
                />)}
        </section>
        </>
    )
}