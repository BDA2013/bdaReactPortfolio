export default function Contact() {
  return <div>
      <h1> Contact </h1>
      <form name="contact" method="POST" netlify action="/pages/success">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            Full Name:
            <input type="text" name="full-name" />
          </label>
        </div>
        <div>
        <label>Your Email: 
          <input type="email" name="email" />
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
