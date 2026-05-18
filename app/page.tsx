'use client'
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FeaturedProperties from "@/components/featured-properties"
import Testimonials from "@/components/testimonials"
import LanguageSwitcher from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n"
 
export default function Home() {
  const { direction, t } = useI18n()
 
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EstateHub</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.home}
            </Link>
            <Link href="/properties" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.properties}
            </Link>
            <Link href="/agents" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.agents}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" asChild>
              <Link href="/auth/signin">{t.nav.signIn}</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">{t.nav.signUp}</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('https://images.unsplash.com/photo-1505521586751-90af6a8d5efa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-md">
                  {t.home.heroTitle}
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl drop-shadow-md">
                  {t.home.heroSubtitle}
                </p>
              </div>
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
            </div>
          </div>
        </section>
        <FeaturedProperties />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.home.whyTitle}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.home.whySubtitle}
                </p>
              </div>
              <div className="grid responsive-card-grid gap-8 mt-8">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                  <div className="p-2 bg-primary/10 rounded-full">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t.home.premiumTitle}</h3>
                  <p className="text-muted-foreground text-center">
                    {t.home.premiumText}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                  <div className="p-2 bg-primary/10 rounded-full">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t.home.agentsTitle}</h3>
                  <p className="text-muted-foreground text-center">
                    {t.home.agentsText}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                  <div className="p-2 bg-primary/10 rounded-full">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t.home.secureTitle}</h3>
                  <p className="text-muted-foreground text-center">
                    {t.home.secureText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
      <footer className="border-t bg-muted">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">EstateHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="space-y-2">
              <h4 className="font-medium">{t.footer.company}</h4>
              <ul className="grid gap-1">
                <li>
                  <Link href="/about" className="text-sm hover:underline">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:underline">
                    {t.footer.careers}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:underline">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">{t.nav.properties}</h4>
              <ul className="grid gap-1">
                <li>
                  <Link href="/properties" className="text-sm hover:underline">
                    {t.footer.allProperties}
                  </Link>
                </li>
                <li>
                  <Link href="/properties/for-sale" className="text-sm hover:underline">
                    {t.footer.forSale}
                  </Link>
                </li>
                <li>
                  <Link href="/properties/for-rent" className="text-sm hover:underline">
                    {t.footer.forRent}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">{t.footer.legal}</h4>
              <ul className="grid gap-1">
                <li>
                  <Link href="/privacy" className="text-sm hover:underline">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline">
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
            <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
