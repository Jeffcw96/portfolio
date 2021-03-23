import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact({ contactRef }) {
    const SERVICE_ID = 'service_tbn3tkb';
    const TEMPLATE_ID = 'portfolio_contact';
    const USER_ID = 'user_QRzuQF5Ef39qfTkF9KVDN'


    const [contactInfo, setContactInfo] = useState({
        name: "", email: "", subject: "", message: ""
    })

    const [errorMessage, setErrorMessage] = useState({
        name: "", email: "", subject: "", message: ""
    })

    const [successMsg, setSuccessMsg] = useState("")

    async function contactMe(e) {
        try {
            e.preventDefault();
            const validContactInput = validateFormInput(contactInfo)

            if (!validContactInput) {
                return
            }
            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            console.log("send email result", result)
            e.target.reset()
        } catch (error) {
            console.error("error", error)
        }
    }

    function validateFormInput(contactObj) {
        let isValid = true;
        let nameErr = "";
        let emailErr = "";
        let subjectErr = "";
        let msgErr = "";
        if (contactObj.name.trim().length === 0) {
            nameErr = "Please enter your name";
            isValid = false
        }

        if (contactObj.email.trim().length === 0) {
            emailErr = "Please enter your email";
            isValid = false
        }

        if (contactObj.subject.trim().length === 0) {
            subjectErr = "Please enter your subject";
            isValid = false
        }

        if (contactObj.message.trim().length === 0) {
            msgErr = "Please enter your message";
            isValid = false
        }

        setErrorMessage({
            name: nameErr, email: emailErr, subject: subjectErr, message: msgErr
        })

        return isValid
    }

    return (
        <div style={{ minHeight: '80vh', background: "rgb(246 246 246)" }} className="projects-section" ref={contactRef}>
            <h2 className="section-header">Contact</h2>
            <form onSubmit={contactMe}>
                <div>
                    <div className="contact-form">
                        <input type="text" placeholder="Name" name="name"
                            value={contactInfo.name}
                            onChange={(e) => setContactInfo(prevInfo => { return { ...prevInfo, name: e.target.value } })} />
                        <div className="contact-err-msg">{errorMessage.name}</div>
                    </div>
                    <div className="contact-form">
                        <input type="text" placeholder="Email Address" name="email"
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo(prevInfo => { return { ...prevInfo, email: e.target.value } })} />
                        <div className="contact-err-msg">{errorMessage.email}</div>
                    </div>
                    <div className="contact-form">
                        <input type="text" placeholder="Subject" name="subject"
                            value={contactInfo.subject}
                            onChange={(e) => setContactInfo(prevInfo => { return { ...prevInfo, subject: e.target.value } })} />
                        <div className="contact-err-msg">{errorMessage.subject}</div>
                    </div>
                    <div className="contact-form">
                        <textarea type="text" placeholder="Your Message" name="message" className="contact-message" rows="10"
                            value={contactInfo.message}
                            onChange={(e) => setContactInfo(prevInfo => { return { ...prevInfo, message: e.target.value } })}
                        ></textarea>
                        <div className="contact-err-msg">{errorMessage.message}</div>
                    </div>
                    <div className="contact-form">
                        <input type="submit" placeholder="Your Message" name="Send Message" />
                    </div>
                    <div className="contact-form">
                        <p className="success-msg">{successMsg}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
