import { useState } from "react";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-40">

      {/* Get in touch details */}

      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Text message box details */}

          <textarea
            name="message"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-gray-300"
            rows="5"
            required
          ></textarea>
          
          {/* Name and Email box details*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>

          {/* Message Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-gray-300"
            required
          />

          {/* Send Button */}
          <button
            type="submit"
            className="px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-md hover:bg-red-600 hover:text-white transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Details */}

      <div className="space-y-10 text-gray-700 justify-around" >
      <div className="font-semibold justify-self-auto text-2xl">
                <h1>Contact Details</h1>
            </div>
        <div className="flex items-start space-x-4">
        <HiOutlineLocationMarker className="text-red-600 text-2xl" />
            
          <div>
            <p className="font-semibold">Accra, Ghana.</p>
            <p>Banana Street, ST 66</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
        <HiOutlinePhone className="text-red-600 text-2xl" />
          <div>
            <p className="font-semibold">+233 253 565 2365</p>
            <p>Mon to Fri 9am to 6pm</p>
            <p>Sat 11am to 5pm</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
        <HiOutlineMail className="text-red-600 text-2xl" />
          <div>
            <p className="font-semibold">support@aselibrary.com</p>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
