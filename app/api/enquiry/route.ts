import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import { siteContent } from "@/data/content";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.phone || !body?.email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const ownerMessage = [
      "New enquiry received from the Mad Compass website.",
      "",
      "TRAVEL DETAILS",
      "--------------",
      `Type of travel:     ${body.travelType || "Not sure yet"}`,
      `Destination:        ${body.destination || "Not specified"}`,
      `Travel style:       ${body.style || "Not specified"}`,
      `Budget range:       ${body.budget || "Not specified"}`,
      `Group size:         ${body.group || "Not specified"}`,
      `Travel dates:       ${body.notes || "Not specified"}`,
      "",
      "CONTACT DETAILS",
      "---------------",
      `Name:               ${body.name}`,
      `Phone:              ${body.phone}`,
      `Email:              ${body.email}`,
      `Preferred contact:  ${body.preferredContact || "Not specified"}`,
      "",
      "---",
      "Submitted via madcompass.com enquiry form",
    ].join("\n");

    const userMessage = [
      `Hi ${body.name || "there"},`,
      "",
      "Thank you for reaching out to Mad Compass. We've received your enquiry",
      "and a holiday specialist will be in touch with a tailored first",
      "recommendation shortly.",
      "",
      "In the meantime, feel free to reach us directly:",
      `Phone/WhatsApp: ${siteContent.phone}`,
      "Email: hello@madcompass.com",
      "",
      "Here to take you places!",
      "Mad Compass Tours & Travels",
    ].join("\n");

    const smtpUrl = process.env.SMTP_URL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const mailTo = process.env.MAIL_TO || siteContent.email;
    const mailFrom = process.env.MAIL_FROM || smtpUser || siteContent.email;

    if (!smtpUrl && (!smtpHost || !smtpUser || !smtpPass)) {
      console.error("Missing SMTP configuration for enquiry email delivery.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport(
      smtpUrl
        ? { url: smtpUrl }
        : {
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          },
    );

    const ownerSubject = `New Enquiry — ${body.name} | Mad Compass`;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: body.email,
      subject: ownerSubject,
      text: ownerMessage,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17120f;"><h2 style="color: #c20b0b;">New enquiry received from the Mad Compass website.</h2><pre style="white-space: pre-wrap; font-family: inherit;">${ownerMessage}</pre></div>`,
    });

    await transporter.sendMail({
      from: mailFrom,
      to: body.email,
      replyTo: mailTo,
      subject: "We've received your enquiry — Mad Compass",
      text: userMessage,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17120f;"><p>Hi ${body.name || "there"},</p><p>Thank you for reaching out to Mad Compass. We've received your enquiry and a holiday specialist will be in touch with a tailored first recommendation shortly.</p><p>In the meantime, feel free to reach us directly:<br />Phone/WhatsApp: ${siteContent.phone}<br />Email: hello@madcompass.com</p><p>Here to take you places!<br />Mad Compass Tours & Travels</p></div>`,
    });

    return NextResponse.json({ success: true, message: "Enquiry received" });
  } catch (error) {
    console.error("Enquiry email delivery failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit enquiry" },
      { status: 500 },
    );
  }
}
