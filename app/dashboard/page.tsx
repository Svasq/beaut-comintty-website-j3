import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MountainIcon } from "@/components/icons/mountain-icon"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Community Website</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/streams">
            Streams
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/forum">
            Forum
          </Link>
          <Button variant="ghost">Sign Out</Button>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-8">
            Here you can manage your account, view your activity, and access all features of our community.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Button asChild>
              <Link href="/marketplace">Go to Marketplace</Link>
            </Button>
            <Button asChild>
              <Link href="/streams">Explore Streams</Link>
            </Button>
            <Button asChild>
              <Link href="/forum">Visit Forum</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Community Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

