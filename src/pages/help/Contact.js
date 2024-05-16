const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form action="">
        <label htmlFor=""> Your email: </label>
        <input type="email" name="email" required />
        <label htmlFor="">Your message:</label>
        <textarea name="message" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
