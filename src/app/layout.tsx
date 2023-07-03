import "./globals.css"

import { Metadata } from "next"
import { Inter } from "next/font/google"

import MyProfilePic from "@/components/MyProfilePic"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zakaria's Blog",
  description: "Created by zakaria magdy",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicons/favicon-96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "120x120",
      url: "/favicons/favicon-96.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicons/apple-touch-icon.png",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen dark:bg-slate-800`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
