"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
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
                setStatus(data.message || "Message sent successfully!");
            } catch {
                setStatus("Message sent successfully!");
            }

            // Clear form on success
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("Failed to send. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-neutral-300"
                    >
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 px-4 bg-neutral-800 border border-neutral-700 rounded-lg outline-none text-neutral-200 placeholder-neutral-500 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                        placeholder="Enter your name"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-neutral-300"
                    >
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 px-4 bg-neutral-800 border border-neutral-700 rounded-lg outline-none text-neutral-200 placeholder-neutral-500 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium text-neutral-300"
                    >
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg outline-none text-neutral-200 placeholder-neutral-500 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all resize-none"
                        placeholder="Tell me about your project or just say hello..."
                        required
                        disabled={isLoading}
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Sending..." : "Send Message"}
            </Button>

            {status && (
                <div
                    className={`text-sm text-center p-3 rounded-lg ${
                        status.includes("success") || status.includes("sent")
                            ? "bg-green-900/20 text-green-400 border border-green-800"
                            : status.includes("Error") ||
                              status.includes("Failed")
                            ? "bg-red-900/20 text-red-400 border border-red-800"
                            : "bg-blue-900/20 text-blue-400 border border-blue-800"
                    }`}
                >
                    {status}
                </div>
            )}
        </form>
    );
};

export default ContactForm;
