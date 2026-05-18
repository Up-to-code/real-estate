"use client"

import Link from "next/link"

import LanguageSwitcher from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export default function AppHeader() {
  const { t } = useI18n()

  return (
    <header className="border-b">
      <div className="container flex min-h-16 flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">EstateHub</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.home}
          </Link>
          <Link href="/properties" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.properties}
          </Link>
          <Link href="/agents" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.agents}
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.about}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="outline" size="sm" asChild>
            <Link href="/auth/signin">{t.nav.signIn}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">{t.nav.signUp}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
