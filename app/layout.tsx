import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "EstateHub - Modern Real Estate Platform",
  description: "Find your dream home with EstateHub - Your trusted real estate platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
