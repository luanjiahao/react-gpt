import type { Metadata } from "next";
import "./styles/globals.scss";

//import { getClientConfig } from "./config/client";

export const metadata: Metadata = {
  title: "NextChat",
  description: "Your personal ChatGPT Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "NextChat",
    statusBarStyle: "default",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <meta name="config" content={JSON.stringify(getClientConfig())} /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body>
        {children}
      </body>
    </html>
  );
}
