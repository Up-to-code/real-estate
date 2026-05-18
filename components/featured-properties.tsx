"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { useI18n } from "@/lib/i18n"

export default function FeaturedProperties() {
  const { t } = useI18n()
  // Get the first 3 properties for featured section
  const featuredProperties = properties.slice(0, 3)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.featured.title}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t.featured.subtitle}
            </p>
          </div>
        </div>
        <div className="grid responsive-card-grid gap-6 mt-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/properties">{t.featured.viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
