export default function Contact() {
  return (
    <div>
      <h1> Contact </h1>
      <form name="contact" method="post" netlify onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            Full Name:
            <input type="text" name="full-name" />
          </label>
        </div>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
