import { useRef, useState } from "react";

import "./ContactPage.css";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  setSent(false);
  setLoading(false);
  const sendEmail = () => {};

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

          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <label>Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
            />

            <label>Phone</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
            />
            <div className="address-group">

            <label>Street Address</label>
            <input
              type="text"
              name="user_street"
              placeholder="123 Main St"
              required
            />

            <div className="address-row">

              <div className="address-field">
                <label>City</label>
                <input
                  type="text"
                  name="user_city"
                  placeholder="Calgary"
                  required
                />
              </div>

              <div className="address-field">
                <label>Province</label>
                <input
                  type="text"
                  name="user_province"
                  placeholder="AB"
                  required
                />
              </div>

            </div>

            <label>Postal Code</label>
            <input
              type="text"
              name="user_postal"
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

            <button className="btn btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="contact-success">
                Thanks! Your message has been sent.
              </p>
            )}

          </form>
        </div>
      </section>
    </main>
  );
}