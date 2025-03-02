'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      {false ? (
        <>
          {/* <span className="text-sm">Welcome, {session.user?.name}</span>
          <Button variant="outline" size="sm" onClick={() => signOut()}>
            Sign Out
          </Button> */}
        </>
      ) : (
        <>
          <Button variant="outline" size="sm" asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </>
      )}
    </div>
  )
} 