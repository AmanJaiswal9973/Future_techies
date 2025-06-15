import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name can only contain alphabets and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format.";
    }

    if (formData.phone && !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!validateForm()) return;

    setLoading(true);

    const serviceID = "service_wh46sih";
    const templateID = "template_d61yjro";
    const publicKey = "Uc3yHqQezwAfU9pTP";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Plot Number 101", "Handia, Prayagraj- 221503", "India"],
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 73078 99689"],
      color: "green",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Futuretechies.ft@gmail.com"],
      color: "purple",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon - Fri: 9:00 AM - 7:00 PM",
        "Sat: 10:00 AM - 5:00 PM",
        "Sun: Closed",
      ],
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your programming journey? Get in touch with us for
            course inquiries, admissions, or any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const color = getColorClasses(info.color);
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${color.bg} p-3 rounded-lg`}>
                      <Icon className={`${color.text} h-6 w-6`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.details.map((line, i) => (
                        <p key={i} className="text-sm text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Quick Contact</h4>
              <p className="mb-4">Need help? Call or WhatsApp us now!</p>
              <div className="flex space-x-4">
                <a
                  href="tel:+917307899689"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/917307899689?text=Hi%2C%20I%20need%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Enter your name"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Enter your email"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 font-medium">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="admission">Admission Process</option>
                      <option value="fees">Fees Information</option>
                      <option value="placement">Placement Assistance</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    rows={5}
                    placeholder="Write your message"
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center space-x-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  {loading ? (
                    <ClipLoader size={20} color="#fff" />
                  ) : success ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
