export default function Contact() {
  return (
    <div>
      <h1> Contact </h1>
      {/* I see a contact form with fields for a name, an email address, and a message */}
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <br />
        <label htmlFor="message">
          Message:
          <textarea id="message" name="message" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
