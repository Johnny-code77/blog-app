'use client';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this is the correct path

interface ContactMethod {
  id: string;
  contact: string;
  icon: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [contactMethods, setContactMethods] = useState<ContactMethod[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus(null);

    try {
      await addDoc(collection(db, "contacts"), formData);
      setSubmissionStatus('Form submitted successfully!');
      // Clear the form after submission
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('Error submitting form. Please try again.');
    }
  };

  const fetchContactMethods = async () => {
    try {
      const contactMethodsRef = collection(db, "contactMethods");
      const contactMethodsSnapshot = await getDocs(contactMethodsRef);
      const contactMethodsData = contactMethodsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as ContactMethod[];
      setContactMethods(contactMethodsData);
    } catch (error) {
      console.error('Error fetching contact methods:', error);
    }
  };

  useEffect(() => {
    fetchContactMethods();
  }, []);

  return (
    <main className="py-14 relative z-[1000]">
      <div className="max-w-screen-lg mx-auto px-4 text-gray-300 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-200 text-3xl font-semibold sm:text-4xl">Let us know how we can help</p>
            <p>We're here to help and answer any questions you might have. Please fill out the form or use the contact information below.</p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item) => (
                  <li key={item.id} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
              {submissionStatus && (
                <p className="mt-4 text-sm text-center text-gray-300">
                  {submissionStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
