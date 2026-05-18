"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"

export default function PropertyFilter({ monthly = false }: { monthly?: boolean }) {
  const { t } = useI18n()

  const priceRanges = monthly
    ? ["$0 - $1,000", "$1,000 - $2,000", "$2,000 - $3,000", "$3,000 - $5,000", "$5,000+"]
    : ["$0 - $100,000", "$100,000 - $300,000", "$300,000 - $500,000", "$500,000 - $1,000,000", "$1,000,000+"]

  return (
    <div className="grid responsive-filter-grid gap-4 p-4 border rounded-lg">
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="location">
          {t.filters.location}
        </label>
        <Input id="location" placeholder={t.filters.locationPlaceholder} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">{t.filters.propertyType}</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={t.filters.any} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">{t.filters.any}</SelectItem>
            <SelectItem value="house">{t.home.house}</SelectItem>
            <SelectItem value="apartment">{t.home.apartment}</SelectItem>
            <SelectItem value="condo">{t.home.condo}</SelectItem>
            <SelectItem value="townhouse">{t.home.townhouse}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">{monthly ? t.filters.monthlyPriceRange : t.filters.priceRange}</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={t.filters.any} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">{t.filters.any}</SelectItem>
            {priceRanges.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end">
        <Button className="w-full">{t.filters.search}</Button>
      </div>
    </div>
  )
}
