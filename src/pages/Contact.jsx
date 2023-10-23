import { useState } from "react";
import { validateEmail, validatePhone } from "../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { firstName, lastName, company, email, phone, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "phone") {
      const isValid = validatePhone(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your phone number is invalid.");
      } else {
        setErrorMessage("");
      }

    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  


  return <section>
      <h1> Contact </h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="first-name">
            First Name:
          </label>
          <input
            type="text"
            name="first-name"
            defaultValue={firstName}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last-name">
            Last Name:
          </label>
          <input
            type="text"
            name="last-name"
            defaultValue={lastName}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="company">
            Your Company:
          </label>
          <input
            type="text"
            name="company"
            defaultValue={company}
            onBlur={handleChange}
          />
        </div>
        <div>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        />
        </div>
        <div>
        <label htmlFor="phone">Your Phone:</label>
        <input
          type="tel"
          name="phone"
          defaultValue={phone}
          onBlur={handleChange}
        />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
            <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
}
