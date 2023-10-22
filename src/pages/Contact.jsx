export default function Contact() {
  return <div>
      <h1> Contact </h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            First Name:
            <input type="text" name="first-name" required />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="last-name" required />
          </label>
        </div>
        <div>
          <label>
            Your Company:
            <input type="text" name="company" />
          </label>
        </div>
        <div>
        <label>Your Email: 
          <input type="email" name="email" required />
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
}
