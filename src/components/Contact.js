import React from 'react';

const Contact = () => {
  return (
    // Full screen height, centered content, dark background for contrast
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-8 font-inter">

      {/* Main Title */}
      <h1 className="text-center font-extrabold text-4xl mb-10 text-white">
        Get In <span className="text-yellow-400">Touch</span>
      </h1>

      {/* Contact Form Card */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-700">
        <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>

        <form className="space-y-6">

          {/* Name Inputs - Grid for responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="First Name" placeholder="Enter First Name" type="text" />
            <InputField label="Last Name" placeholder="Enter Last Name" type="text" />
          </div>

          {/* Contact Inputs - Grid for responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Email Address" placeholder="Email Address" type="email" />
            <InputField label="Phone Number" placeholder="Phone Number" type="tel" />
          </div>

          {/* Message Input - Full Width */}
          <TextAreaField label="Message" placeholder="Type your message here..." />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg transition duration-200 ease-in-out shadow-lg transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Sub-Components for Cleanliness ---

const InputField = ({ label, placeholder, type }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-lg py-2.5 px-4 outline-none transition duration-150"
    />
  </div>
);

const TextAreaField = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-300 mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      rows="4"
      className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-lg py-2.5 px-4 outline-none transition duration-150 resize-none"
    />
  </div>
);

export default Contact;
