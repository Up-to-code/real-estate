"use client"

import { ShieldCheck, Sparkles, Users } from "lucide-react"

import { useI18n } from "@/lib/i18n"

export default function WhyChooseUs() {
  const { t } = useI18n()
  const items = [
    { title: t.home.premiumTitle, text: t.home.premiumText, Icon: Sparkles },
    { title: t.home.agentsTitle, text: t.home.agentsText, Icon: Users },
    { title: t.home.secureTitle, text: t.home.secureText, Icon: ShieldCheck },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.home.whyTitle}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t.home.whySubtitle}</p>
          </div>
          <div className="grid responsive-card-grid gap-8 mt-8">
            {items.map(({ title, text, Icon }) => (
              <div key={title} className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
