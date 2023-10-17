export default function Contact() {
  return (
     <div>
      <h1> Contact </h1>
      <form name='contact-v1' netlify netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            Full Name:
            <input type="text" name="full-name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Your Email:
            <input id="email" type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
