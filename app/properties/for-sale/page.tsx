"use client"

import PageShell from "@/components/page-shell"
import PropertyCard from "@/components/property-card"
import PropertyFilter from "@/components/property-filter"
import { properties } from "@/data/properties"
import { useI18n } from "@/lib/i18n"

export default function ForSalePage() {
  const { t } = useI18n()
  const forSaleProperties = properties.filter((property) => property.status === "For Sale")

  return (
    <PageShell>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pages.forSaleTitle}</h1>
              <p className="mt-2 text-muted-foreground">{t.pages.forSaleSubtitle}</p>
            </div>
            <PropertyFilter />
            <div className="grid responsive-card-grid gap-6">
              {forSaleProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
