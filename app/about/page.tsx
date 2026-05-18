"use client"

import Image from "next/image"
import { CheckCircle2, Sparkles, Users } from "lucide-react"

import PageShell from "@/components/page-shell"
import { useI18n } from "@/lib/i18n"

export default function AboutPage() {
  const { t } = useI18n()
  const values = [
    { title: t.pages.integrity, text: t.pages.integrityText, Icon: CheckCircle2 },
    { title: t.pages.excellence, text: t.pages.excellenceText, Icon: Sparkles },
    { title: t.pages.clientFocused, text: t.pages.clientFocusedText, Icon: Users },
  ]

  return (
    <PageShell>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pages.aboutTitle}</h1>
          <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">{t.pages.aboutSubtitle}</p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">{t.pages.ourStory}</h2>
              <p className="text-muted-foreground md:text-lg">{t.pages.storyOne}</p>
              <p className="text-muted-foreground md:text-lg">{t.pages.storyTwo}</p>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1170&auto=format&fit=crop"
                alt={t.pages.aboutTitle}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">{t.pages.valuesTitle}</h2>
          <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">{t.pages.valuesSubtitle}</p>
          <div className="grid responsive-card-grid gap-8 mt-8">
            {values.map(({ title, text, Icon }) => (
              <div key={title} className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">{t.pages.leadership}</h2>
          <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-lg">{t.pages.leadershipText}</p>
        </div>
      </section>
    </PageShell>
  )
}
