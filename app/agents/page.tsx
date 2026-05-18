"use client"

import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import PageShell from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { agents } from "@/data/agents"
import { useI18n } from "@/lib/i18n"

export default function AgentsPage() {
  const { direction, t } = useI18n()

  return (
    <PageShell>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pages.agentsTitle}</h1>
          <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">{t.pages.agentsSubtitle}</p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">{t.pages.findAgent}</h2>
                <p className="text-muted-foreground">{t.pages.findAgentSubtitle}</p>
              </div>
              <div className="relative w-full md:w-auto">
                <Search className={`absolute top-2.5 h-4 w-4 text-muted-foreground ${direction === "rtl" ? "right-2.5" : "left-2.5"}`} />
                <Input type="search" placeholder={t.pages.searchAgents} className={`w-full md:w-[300px] ${direction === "rtl" ? "pr-8" : "pl-8"}`} />
              </div>
            </div>
            <div className="grid responsive-card-grid gap-6">
              {agents.map((agent) => {
                const localized = t.agentsData[agent.id as keyof typeof t.agentsData]

                return (
                  <div key={agent.id} className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{agent.name}</h3>
                      <p className="text-primary font-medium">{localized.title}</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-muted-foreground"><span className="font-medium">{t.pages.specialties}</span> {localized.specialties}</p>
                        <p className="text-sm text-muted-foreground"><span className="font-medium">{t.pages.languages}</span> {localized.languages}</p>
                        <p className="text-sm text-muted-foreground"><span className="font-medium">{t.pages.experience}</span> {agent.experience} {t.pages.years}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/agents/${agent.id}`}>{t.pages.viewProfile}</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/contact?agent=${agent.id}`}>{t.pages.contactUs}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">{t.pages.joinTeam}</h2>
              <p className="text-muted-foreground md:text-lg">{t.pages.joinTeamText}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild><Link href="/careers">{t.pages.viewOpenPositions}</Link></Button>
                <Button variant="outline" asChild><Link href="/contact">{t.pages.contactUs}</Link></Button>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1170&auto=format&fit=crop"
                alt={t.pages.joinTeam}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
