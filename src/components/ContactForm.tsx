"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
          });

          if (!res.ok) {
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const errorData = await res.json();
              setStatus(errorData.error || `Error: ${res.status}`);
            } else {
              setStatus(`Error: ${res.status} - Check the API endpoint`);
            }
            return;
          }
          
          try {
            const data = await res.json();
            setStatus(data.message || "Message sent!");
          } catch {
            // If the response can't be parsed as JSON, just consider it a success
            setStatus("Message sent!");
          }
          
          // Clear form on success
          setName("");
          setEmail("");
          setMessage("");
        } catch (err) {
          console.error(err);
          setStatus("Failed to send. Check the API endpoint path.");
        }
      }}
      className="flex flex-col gap-10 w-[90%] h-full justify-center "
    >
      <div className="flex gap-5 flex-col">
        <div className="flex flex-col text-neutral-400">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-neutral-800 h-10 rounded-md outline-none text-neutral-400 shadow shadow-neutral-700 px-2 w-52 md:w-72"
            required
          />
        </div>

        <div className="flex flex-col text-neutral-400">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-neutral-800 h-10 rounded-md outline-none text-neutral-400 shadow shadow-neutral-700 px-2 w-72 md:w-96"
            required
          />
        </div>

        <div className="flex flex-col text-neutral-400">
          <label htmlFor="message" className="mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-neutral-800 rounded-md outline-none text-neutral-400 shadow shadow-neutral-700 px-2 py-1 w-full resize-none"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        variant={"ghost"}
        className="bg-neutral-800 shadow -mt-5 shadow-neutral-700 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-300 w-32"
      >
        Send..
      </Button>
      {status && (
        <p className="text-sm text-neutral-400 transition-all -mt-4 animate-bounce">{status}</p>
      )}
    </form>
  );
}

export default ContactForm