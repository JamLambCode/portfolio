"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { renderAsync } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //just some simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      message: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      message: "Invalid message",
    };
  }
  let data;
  try {
    // Render your React component to an HTML string
    const html = await renderAsync(
      React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    );

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mr.jamlamb@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      html: html, // Use the rendered HTML here
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }
};
