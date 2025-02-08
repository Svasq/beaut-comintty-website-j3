import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="h-6 w-6 rounded-full bg-primary"></span>
            <span className="font-bold">Community</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/marketplace" className="transition-colors hover:text-foreground/80">
              Marketplace
            </Link>
            <Link href="/streams" className="transition-colors hover:text-foreground/80">
              Streams
            </Link>
            <Link href="/forums" className="transition-colors hover:text-foreground/80">
              Forums
            </Link>
            <Link href="/browse" className="transition-colors hover:text-foreground/80">
              Browse
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full max-w-sm lg:max-w-xs">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border border-input bg-background py-1.5 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search community..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/signin">
              <Button variant="ghost" className="text-sm">
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary text-sm text-primary-foreground hover:bg-primary/90">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

