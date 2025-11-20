import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <p className="mt-2 text-gray-700">
          Want to talk about AR/VR, Merge, or potential work? Feel free to reach out with details
          about your project, role, or collaboration idea.
        </p>
      </div>

      {/* Netlify-form compatible */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-6 bg-white border rounded-xl p-6 shadow-sm"
      >
        {/* required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* honeypot field */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            placeholder="What would you like to discuss?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            placeholder="Share any context, links, or ideas here."
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            This form is powered by Netlify Forms. I&apos;ll get back to you as soon as I can.
          </p>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}
