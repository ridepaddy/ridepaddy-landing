"use client";

// @ts-expect-error - react-whatsapp-chat-widget doesn't have TypeScript types
import WhatsAppWidget from "react-whatsapp-chat-widget";

import "react-whatsapp-chat-widget/index.css";

export default function WhatsAppChat() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "2348065235615";

  return (
    <WhatsAppWidget
      phoneNo={phoneNumber}
      companyName="RidePaddy"
      message="Hi 👋🏾! How can we help you?"
      replyTimeText="Typically replies within a few minutes"
      sendButton="Send"
      placeholder="Type your message..."
    />
  );
}
