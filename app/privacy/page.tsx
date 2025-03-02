import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
                <p className="mt-4 text-muted-foreground">Last updated: January 1, 2023</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    At EstateHub, we respect your privacy and are committed to protecting your personal data. This
                    privacy policy will inform you about how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">2. The Data We Collect About You</h2>
                  <p className="text-muted-foreground">
                    Personal data, or personal information, means any information about an individual from which that
                    person can be identified. It does not include data where the identity has been removed (anonymous
                    data).
                  </p>
                  <p className="text-muted-foreground">
                    We may collect, use, store and transfer different kinds of personal data about you which we have
                    grouped together as follows:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Identity Data includes first name, last name, username or similar identifier.</li>
                    <li>Contact Data includes email address, telephone number, and address.</li>
                    <li>
                      Technical Data includes internet protocol (IP) address, browser type and version, time zone
                      setting and location, browser plug-in types and versions, operating system and platform, and other
                      technology on the devices you use to access this website.
                    </li>
                    <li>Usage Data includes information about how you use our website and services.</li>
                    <li>
                      Marketing and Communications Data includes your preferences in receiving marketing from us and our
                      third parties and your communication preferences.
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">3. How We Use Your Personal Data</h2>
                  <p className="text-muted-foreground">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your
                    personal data in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>
                      Where we need to perform the contract we are about to enter into or have entered into with you.
                    </li>
                    <li>
                      Where it is necessary for our legitimate interests (or those of a third party) and your interests
                      and fundamental rights do not override those interests.
                    </li>
                    <li>Where we need to comply with a legal obligation.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We have put in place appropriate security measures to prevent your personal data from being
                    accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we
                    limit access to your personal data to those employees, agents, contractors and other third parties
                    who have a business need to know. They will only process your personal data on our instructions and
                    they are subject to a duty of confidentiality.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">5. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We will only retain your personal data for as long as reasonably necessary to fulfill the purposes
                    we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting
                    or reporting requirements. We may retain your personal data for a longer period in the event of a
                    complaint or if we reasonably believe there is a prospect of litigation in respect to our
                    relationship with you.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">6. Your Legal Rights</h2>
                  <p className="text-muted-foreground">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal
                    data, including the right to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Request access to your personal data.</li>
                    <li>Request correction of your personal data.</li>
                    <li>Request erasure of your personal data.</li>
                    <li>Object to processing of your personal data.</li>
                    <li>Request restriction of processing your personal data.</li>
                    <li>Request transfer of your personal data.</li>
                    <li>Right to withdraw consent.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">7. Cookies</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are placed on your computer by websites that you visit. They are
                    widely used in order to make websites work, or work more efficiently, as well as to provide
                    information to the owners of the site. Most web browsers allow some control of most cookies through
                    the browser settings.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">8. Changes to the Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update our privacy policy from time to time. We will notify you of any changes by posting the
                    new privacy policy on this page and updating the "Last Updated" date at the top of this privacy
                    policy.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">9. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <p className="text-muted-foreground">
                    EstateHub
                    <br />
                    123 Real Estate Blvd, Suite 100
                    <br />
                    Los Angeles, CA 90001
                    <br />
                    Email: privacy@estatehub.com
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

