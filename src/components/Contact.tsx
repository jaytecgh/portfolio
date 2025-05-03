"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSuccess(res.ok);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-[#08089c] to-[#817cc6] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded h-32"
      />
      <button type="submit" disabled={loading} className="bg-gold text-white px-4 py-2 rounded">
        {loading ? 'Sending...' : 'Send'}
      </button>

      {success === true && <p className="text-green-600">Message sent!</p>}
      {success === false && <p className="text-red-600">Something went wrong.</p>}
    </form>
      </div>
    </section>
  );
};

export default Contact;


