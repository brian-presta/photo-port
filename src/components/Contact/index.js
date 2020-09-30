import React, {useState} from "react"

function ContactForm(props) {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState
    function hanldeChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value})
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" defaultValue={name} >Name:</label>
                    <input type="text" name="name"  onChange={hanldeChange} />
                </div>
                <div>
                    <label htmlFor="email" defaultValue={email} >Email adress:</label>
                    <input type="text" name="email" onChange={hanldeChange} />
                </div>
                <div>
                    <label htmlFor="message" defaultValue={message} >Message:</label>
                    <textarea name="mesage" rows="5" onChange={hanldeChange} ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm