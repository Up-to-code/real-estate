"use client"

import PageShell from "@/components/page-shell"
import { useI18n } from "@/lib/i18n"

export default function CareersPage() {
  const { t } = useI18n()

  return (
    <PageShell>
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.pages.careersTitle}</h1>
        <p className="mt-3 max-w-[700px] text-muted-foreground md:text-lg">{t.pages.careersSubtitle}</p>
      </div>
    </PageShell>
  )
}
