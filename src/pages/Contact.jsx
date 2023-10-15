export default function Contact() {
  return (
    <div>
      <h1> Contact </h1>
      {/* I see a contact form with fields for a name, an email address, and a message */}
      <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" required /></label>
      </p>
      <p>
        <label>Message: <textarea name="message" required></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    </div>
  );
}
