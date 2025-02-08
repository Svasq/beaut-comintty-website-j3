import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MountainIcon } from "@/components/icons/mountain-icon"

const forumCategories = [
  { id: 1, name: "General Discussion", description: "Talk about anything and everything" },
  { id: 2, name: "Marketplace", description: "Discuss items for sale and trading" },
  { id: 3, name: "Streaming", description: "Chat about live streams and events" },
]

export default function ForumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Community Website</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/streams">
            Streams
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            Community Forum
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-8">
            Join discussions, ask questions, and connect with other community members.
          </p>
          <div className="grid gap-6">
            {forumCategories.map((category) => (
              <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
                <Button asChild>
                  <Link href={`/forum/${category.id}`}>View Threads</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Community Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

