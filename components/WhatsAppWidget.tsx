"use client";

import React from "react";
// @ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";

import "react-whatsapp-chat-widget/index.css";

export default function WhatsAppChat() {
  return (
    <WhatsAppWidget
      phoneNo="2348065235615"
      companyName="RidePaddy"
      message="Hi 👋🏾! How can we help you?"
      replyTimeText="Typically replies within a few minutes"
      sendButton="Send"
      placeholder="Type your message..."
    />
  );
}
