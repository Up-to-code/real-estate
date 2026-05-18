"use client"

import type React from "react"

import AppFooter from "@/components/app-footer"
import AppHeader from "@/components/app-header"

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  )
}
