import '../styles/contactUs.css';


const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="header">
        <span className="back-arrow">&#8592;</span>
        <h1>Contact Us</h1>
      </div>
      <h2 className="formtitle">Fuel Your Brand’s Goals with <span className="highlight">Beyond</span></h2>
      <p className="description">
        You will get a response within 24 hours. We will explain in detail how we can help you fuel and grow your brand within the stated budget.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email address" className="form-input" />
        <input type="tel" placeholder="Phone number" className="form-input" />
        <input type="text" placeholder="Budget" className="form-input" />
        <textarea placeholder="Goals" className="form-input"></textarea>
        <button type="submit" className="send-enquiry-btn">Send Enquiry <span className="arrow">&#8594;</span></button>
      </form>
    </div>
  );
};

export default ContactUs;