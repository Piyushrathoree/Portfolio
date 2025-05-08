"use client";
import React, { useState } from "react";

import { Copy, CopyCheck } from "lucide-react";
import { ConfettiButton } from "./magicui/confetti";

const EMAIL = "01piyush008@gmail.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = EMAIL;
        // Avoid scrolling to bottom
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error(err);
      alert("Failed to copy email. Please copy manually.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <ConfettiButton>
        <div
          onClick={handleCopy}
          className="px-4 py-[7px] rounded-sm border hover:scale-105 duration-300 border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 transition"
        >
          <span className="flex items-center gap-2">
            {copied ? (
              <>
                <CopyCheck /> Copied !!
              </>
            ) : (
              <>
                <Copy /> Email
              </>
            )}
          </span>
        </div>
      </ConfettiButton>
    </div>
  );
}
