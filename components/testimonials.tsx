"use client"

import { useI18n } from "@/lib/i18n"

export default function Testimonials() {
  const { t } = useI18n()

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.testimonials.title}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t.testimonials.subtitle}
            </p>
          </div>
        </div>
        <div className="grid responsive-card-grid gap-8 mt-8">
          {t.testimonials.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center border rounded-lg p-6 bg-background">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
              </div>
              <p className="mb-4">&quot;{item.quote}&quot;</p>
              <h4 className="font-bold">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
