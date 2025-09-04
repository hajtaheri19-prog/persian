import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "پنل مدیریت محتوا - نیگاردیپ",
  description: "سیستم مدیریت محتوای پیشرفته برای مدیریت مقالات و اخبار",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
