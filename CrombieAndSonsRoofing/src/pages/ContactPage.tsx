import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-label">Contact Us</p>
          <h1>Get a Free Estimate</h1>
          <p className="contact-hero-text">
            Have questions about your roof or need a quote? Send us a message
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Reach Out</h2>

            <p>
              Whether you need a roof repair, inspection, or full replacement,
              we're here to help. Fill out the form and we'll contact you soon.
            </p>

            <div className="contact-details">
              <p><strong>Our Phone #</strong><br /> (403) 597-2710</p>

              <p><strong>Our Email</strong><br /> crombieandsonsroofing@outlook.com</p>

              <p><strong>Our Service Area</strong><br /> Red Deer & surrounding areas</p>
            </div>
          </div>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <label>Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />

            <label>Your Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />

            <div className="address-group">
              <label>Street Address</label>
              <input
                type="text"
                name="street"
                placeholder="123 Main St"
                required
              />

              <div className="address-row">
                <div className="address-field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Red Deer"
                    required
                  />
                </div>

                <div className="address-field">
                  <label>Province</label>
                  <input
                    type="text"
                    name="province"
                    placeholder="AB"
                    required
                  />
                </div>
              </div>

              <label>Postal Code</label>
              <input
                type="text"
                name="postal"
                placeholder="T2X 1V4"
                required
              />
            </div>

            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project..."
            />

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}