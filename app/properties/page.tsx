"use client"

import PageShell from "@/components/page-shell"
import PropertyCard from "@/components/property-card"
import PropertyFilter from "@/components/property-filter"
import { Button } from "@/components/ui/button"
import { properties } from "@/data/properties"
import { useI18n } from "@/lib/i18n"

export default function PropertiesPage() {
  const { t } = useI18n()

  return (
    <PageShell>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pages.propertiesTitle}</h1>
              <p className="mt-2 text-muted-foreground">{t.pages.propertiesSubtitle}</p>
            </div>
            <PropertyFilter />
            <div className="grid responsive-card-grid gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <PaginationLabels />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function PaginationLabels() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
      </div>
    </div>
  )
}
