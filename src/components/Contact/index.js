import React, {useState} from "react"
import { validateEmail } from '../../utils/helpers'

function ContactForm(props) {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState
    function hanldeChange(event) {
        const { name, value } = event.target
        if (!value.length) {
            setErrorMessage(`${name} is required.`)
        } 
        else if (name === 'email') {
            validateEmail(value) || setErrorMessage('Your email is invalid.')
        } 
        else {
            setErrorMessage('')
        }
        if (formState.email.length) {
            validateEmail(formState.email) || setErrorMessage('Your email is invalid.')
        }
        setFormState({...formState, [name]: value})
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formState)
    }
    console.log(errorMessage)
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" defaultValue={name} >Name:</label>
                    <input type="text" name="name"  onBlur={hanldeChange} />
                </div>
                <div>
                    <label htmlFor="email" defaultValue={email} >Email adress:</label>
                    <input type="text" name="email" onBlur={hanldeChange} />
                </div>
                <div>
                    <label htmlFor="message" defaultValue={message} >Message:</label>
                    <textarea name="message" rows="5" onBlur={hanldeChange} ></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm