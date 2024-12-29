import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold text-center mb-8">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-lg font-light text-softTextColor">
            Have questions, feedback, or want to collaborate? We&apos;d love to
            hear from you! Reach out to us using the form or through the contact
            details below.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-medium">Email</h3>
              <p className="text-lg font-light text-softTextColor">
                info@exploresbymahnoor.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Phone</h3>
              <p className="text-lg font-light text-softTextColor">
                +1 (234) 567-890
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Address</h3>
              <p className="text-lg font-light text-softTextColor">
                123 Blog Street, Creative City, World
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-200 text-indigo-900 px-6 py-3 mt-5 font-medium rounded-md hover:bg-gray-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
