"use client"

import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useI18n, type Locale } from "@/lib/i18n"

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  const nextLocale: Locale = locale === "en" ? "ar" : "en"
  const nextLabel = nextLocale === "en" ? t.language.english : t.language.arabic

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={() => setLocale(nextLocale)}
      aria-label={`${t.language.label}: ${nextLabel}`}
    >
      <Languages className="h-4 w-4" />
      <span>{locale === "en" ? "AR" : "EN"}</span>
    </Button>
  )
}
