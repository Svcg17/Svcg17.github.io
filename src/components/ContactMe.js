import React from "react"
import SocialIcons from "../components/SocialIcons"
import "../styles/contactme.scss"

// Use Getform to get an email with a user's message in the form
const ContactMe = () => {
  return (
    <section id="contactme">
      <h1>Contact Me</h1>
      <form
        action="https://getform.io/f/47278dfa-cc0f-4bd3-b0b6-5ff89de57c7e"
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message..." rows="5"></textarea>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <SocialIcons />
    </section>
  )
}

export default ContactMe
