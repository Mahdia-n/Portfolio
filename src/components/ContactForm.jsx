import { useState, useEffect } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const errs = {};
    if (!form.name) errs.name = "Name required";
    if (!form.message) errs.message = "Message required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
    } else {
      setErrors({});
      setSubmitted(true);
      localStorage.removeItem("contactForm");
    }
  }

  return (
    <section id="contact" style={{ padding: "2rem" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>

      {submitted && (
        <div style={{ background: "#d4edda", padding: "1rem", marginTop: "1rem" }}>
          🎉 Thank you, {form.name}! Your message was sent.
        </div>
      )}
    </section>
  );
}
