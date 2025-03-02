import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EstateHub</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium hover:underline underline-offset-4">
              Properties
            </Link>
            <Link href="/agents" className="text-sm font-medium hover:underline underline-offset-4">
              Agents
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">List Property</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms and Conditions</h1>
                <p className="mt-4 text-muted-foreground">Last updated: January 1, 2023</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    Welcome to EstateHub. These Terms and Conditions govern your use of our website and services. By
                    accessing or using our website, you agree to be bound by these Terms. If you disagree with any part
                    of the terms, you may not access the website.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">2. Definitions</h2>
                  <p className="text-muted-foreground">"Company", "We", "Us", or "Our" refers to EstateHub.</p>
                  <p className="text-muted-foreground">
                    "Website" refers to EstateHub, accessible from www.estatehub.com.
                  </p>
                  <p className="text-muted-foreground">
                    "Service" refers to the services provided by EstateHub as described in these Terms.
                  </p>
                  <p className="text-muted-foreground">
                    "You" refers to the individual accessing or using the Service, or the company, or other legal entity
                    on behalf of which such individual is accessing or using the Service.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">3. Use of the Website</h2>
                  <p className="text-muted-foreground">
                    The content of the pages of this website is for your general information and use only. It is subject
                    to change without notice.
                  </p>
                  <p className="text-muted-foreground">
                    This website uses cookies to monitor browsing preferences. If you do allow cookies to be used,
                    personal information may be stored by us for use by third parties.
                  </p>
                  <p className="text-muted-foreground">
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
                    performance, completeness or suitability of the information and materials found or offered on this
                    website for any particular purpose. You acknowledge that such information and materials may contain
                    inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the
                    fullest extent permitted by law.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">4. Property Listings</h2>
                  <p className="text-muted-foreground">
                    All property listings on our website are provided for informational purposes only. While we strive
                    to ensure the accuracy of all information, we cannot guarantee that all details are complete or
                    accurate. Property availability, prices, and details are subject to change without notice.
                  </p>
                  <p className="text-muted-foreground">
                    We recommend that you verify all information directly with the property owner or listing agent
                    before making any decisions or taking any actions based on the information provided on our website.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    This website contains material which is owned by or licensed to us. This material includes, but is
                    not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other
                    than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </p>
                  <p className="text-muted-foreground">
                    All trademarks reproduced in this website, which are not the property of, or licensed to the
                    operator, are acknowledged on the website.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Your use of any information or materials on this website is entirely at your own risk, for which we
                    shall not be liable. It shall be your own responsibility to ensure that any products, services, or
                    information available through this website meet your specific requirements.
                  </p>
                  <p className="text-muted-foreground">
                    We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
                    arising out of your access to, or use of, this website.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">7. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms and conditions are governed by and construed in accordance with the laws of the United
                    States, and any disputes relating to these terms and conditions will be subject to the exclusive
                    jurisdiction of the courts of the United States.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">8. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms at any time. We will notify users of any changes by
                    updating the "Last Updated" date at the top of this page. Your continued use of the website after
                    any such changes constitutes your acceptance of the new Terms.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">9. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p className="text-muted-foreground">
                    EstateHub
                    <br />
                    123 Real Estate Blvd, Suite 100
                    <br />
                    Los Angeles, CA 90001
                    <br />
                    Email: legal@estatehub.com
                    <br />
                    Phone: (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">EstateHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your trusted partner in real estate since 2010.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="space-y-2">
              <h4 className="font-medium">Company</h4>
              <ul className="grid gap-1">
                <li>
                  <Link href="/about" className="text-sm hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Properties</h4>
              <ul className="grid gap-1">
                <li>
                  <Link href="/properties" className="text-sm hover:underline">
                    All Properties
                  </Link>
                </li>
                <li>
                  <Link href="/properties/for-sale" className="text-sm hover:underline">
                    For Sale
                  </Link>
                </li>
                <li>
                  <Link href="/properties/for-rent" className="text-sm hover:underline">
                    For Rent
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Legal</h4>
              <ul className="grid gap-1">
                <li>
                  <Link href="/privacy" className="text-sm hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
            <p className="text-sm text-muted-foreground">© 2023 EstateHub. All rights reserved.</p>
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

