import { useState } from "react";

import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { first_name, last_name, company, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      const formData = formState;

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => alert("Thank you for your submission"))
        .catch((error) => alert(error));
    }
    document
      .querySelector("form")
      .addEventListener("submit", handleSubmit);
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
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
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <h1> Contact </h1>
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            defaultValue={first_name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            defaultValue={last_name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            defaultValue={company}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
