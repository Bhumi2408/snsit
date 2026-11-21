"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Add your Web3Forms access key
    data.append("access_key", "6782245a-1bac-4b2d-bc7a-9e4ede1b6947");
    data.append("subject", "New Enquiry - SNS IT Website");
    data.append("from_name", "SNS IT Website");

    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-field">
          <fieldset>
            <legend className="sr-only">Name *</legend>
            <div className="form-row">
              <div className="form-row-block">
                <label htmlFor="cf-first" className="sr-only">
                  First
                </label>
                <input
                  type="text"
                  id="cf-first"
                  name="first"
                  placeholder="First Name"
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="form-row-block">
                <label htmlFor="cf-last" className="sr-only">
                  Last
                </label>
                <input
                  type="text"
                  id="cf-last"
                  name="last"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="form-field">
          <label htmlFor="cf-email" className="sr-only">
            Email *
          </label>
          <input
            type="email"
            id="cf-email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            spellCheck="false"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="cf-mobile" className="sr-only">
            Mobile
          </label>
          <input
            type="tel"
            id="cf-mobile"
            name="mobile"
            placeholder="Mobile"
            autoComplete="tel"
          />
        </div>

        <div className="form-field">
          <label htmlFor="cf-message" className="sr-only">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="Message"
            rows={4}
          />
        </div>

        <div className="form-submit">
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </div>

        {status === "success" && (
          <p role="status" className="form-success">
            Thank you! Your enquiry has been sent successfully.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="form-error">
            Unable to send your enquiry. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
