"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/data/site";
import { WhatsappBubble } from "./Icons";

// Floating WhatsApp button (bottom-right) with the "Contact us" call-to-action
// and pending-message badge, both hidden after the first click.
export default function ChatWidget() {
  const [clicked, setClicked] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setClicked(true);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const url = isMobile
      ? `https://wa.me/${WHATSAPP_NUMBER}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <div className="chat-widget">
      {!clicked && <div className="chat-cta">Contact us</div>}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className={`chat-button${clicked ? "" : " is-jumping"}`}
        onClick={onClick}
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappBubble />
        {!clicked && <span className="chat-badge">1</span>}
      </a>
    </div>
  );
}
