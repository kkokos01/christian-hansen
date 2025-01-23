'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({
    type: 'idle',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'loading' });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Contact Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">Contact</h1>
          <p className="text-xl text-accent/90 max-w-2xl mx-auto font-light tracking-wide">
            Interested in Christian's work? Get in touch for inquiries about exhibitions,
            commissions, or artwork availability.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl text-primary mb-8 font-light">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-accent focus:border-primary focus:ring-1 focus:ring-primary rounded-none outline-none transition-colors"
                    required
                    disabled={status.type === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-accent focus:border-primary focus:ring-1 focus:ring-primary rounded-none outline-none transition-colors"
                    required
                    disabled={status.type === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary/60 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-accent focus:border-primary focus:ring-1 focus:ring-primary rounded-none outline-none transition-colors"
                    required
                    disabled={status.type === 'loading'}
                  >
                    <option value="">Select a subject</option>
                    <option value="exhibition">Exhibition Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="purchase">Artwork Purchase</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary/60 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-accent focus:border-primary focus:ring-1 focus:ring-primary rounded-none outline-none transition-colors resize-none"
                    required
                    disabled={status.type === 'loading'}
                  />
                </div>
              </div>

              {status.message && (
                <div
                  className={`p-4 ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : status.type === 'error'
                      ? 'bg-red-50 text-red-800'
                      : ''
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`btn-primary w-full ${
                    status.type === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {status.type === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl text-primary mb-8 font-light">Studio Location</h2>
              <div className="aspect-video bg-accent relative mb-6">
                {/* Replace with actual map or studio image */}
                <div className="absolute inset-0 bg-primary/10" />
              </div>
              <div className="space-y-4">
                <p className="text-primary/80">
                  123 Artist Studio Lane<br />
                  Brooklyn, NY 11201<br />
                  United States
                </p>
                <p className="text-primary/60">
                  Located in the heart of Brooklyn's vibrant art district
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-primary mb-6 font-light">Gallery Hours</h2>
              <div className="space-y-4 text-primary/80">
                <div className="flex justify-between items-center py-2 border-b border-accent">
                  <span>Tuesday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-accent">
                  <span>Saturday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-accent">
                  <span>Sunday - Monday</span>
                  <span>Closed</span>
                </div>
                <p className="text-primary/60 pt-4">
                  Visits outside these hours available by appointment
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-primary mb-6 font-light">Connect</h2>
              <div className="flex space-x-6">
                {['Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-primary/60 hover:text-primary transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
