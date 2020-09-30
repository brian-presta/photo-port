import React from "react"

function ContactForm(props) {

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email adress:</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="mesage" rows="5"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm