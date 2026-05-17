import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billing Leak Detector – Find Unbilled Hours",
  description: "Analyzes your time tracking data to identify unbilled hours, forgotten timers, and undercharged projects. Works with Toggl, Harvest, and Clockify."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="342dac31-7b10-4078-a507-6379b13de07f"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
