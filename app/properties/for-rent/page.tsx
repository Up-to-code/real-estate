"use client"

import PageShell from "@/components/page-shell"
import PropertyCard from "@/components/property-card"
import PropertyFilter from "@/components/property-filter"
import { properties } from "@/data/properties"
import { useI18n } from "@/lib/i18n"

export default function ForRentPage() {
  const { t } = useI18n()
  const forRentProperties = properties.filter((property) => property.status === "For Rent")

  return (
    <PageShell>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pages.forRentTitle}</h1>
              <p className="mt-2 text-muted-foreground">{t.pages.forRentSubtitle}</p>
            </div>
            <PropertyFilter monthly />
            <div className="grid responsive-card-grid gap-6">
              {forRentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
