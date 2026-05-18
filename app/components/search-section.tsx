"use client"

import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"

export default function SearchSection() {
  const { direction, t } = useI18n()

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className={`absolute top-2.5 h-4 w-4 text-muted-foreground ${direction === "rtl" ? "right-2.5" : "left-2.5"}`} />
            <Input type="text" placeholder={t.home.locationPlaceholder} className={direction === "rtl" ? "pr-8" : "pl-8"} />
          </div>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={t.home.propertyType} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">{t.home.house}</SelectItem>
            <SelectItem value="apartment">{t.home.apartment}</SelectItem>
            <SelectItem value="condo">{t.home.condo}</SelectItem>
            <SelectItem value="townhouse">{t.home.townhouse}</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full">{t.home.search}</Button>
      </div>
    </div>
  )
}
