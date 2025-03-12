"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function GetInTouch() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to manage loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json(); // Error occurs here
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
          <div className="lg:col-span-8">
            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Name :"
                      required
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Email :"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Subject :"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Message :"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Display success or error messages */}
                {success && (
                  <div className="mb-5 text-green-500 text-sm">{success}</div>
                )}
                {error && (
                  <div className="mb-5 text-red-500 text-sm">{error}</div>
                )}

                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:ms-8">
              <div className="flex">
                <div className="icons text-center mx-auto">
                  <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Mobile
                  </h5>
                  <Link
                    href="tel:+91 8897891381"
                    className="text-slate-400 text-[15px]"
                  >
                    +91 8897891381
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Email
                  </h5>
                  <Link
                    href="mailto:vijaykumarmurakada@gmail.com"
                    className="text-slate-400 text-[15px]"
                  >
                    vijaykumarmurakada@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Location
                  </h5>
                  <p className="text-slate-400 text-[15px] mb-2">Banglore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}