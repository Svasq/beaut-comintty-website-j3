import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

const streams = [
  {
    id: 1,
    title: "Game Development Stream",
    streamer: "GameDevPro",
    viewers: 1234,
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "Development",
  },
  {
    id: 2,
    title: "Digital Art Creation",
    streamer: "ArtistLive",
    viewers: 856,
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "Art",
  },
  {
    id: 3,
    title: "Community Q&A Session",
    streamer: "CommunityHost",
    viewers: 567,
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "Discussion",
  },
  // Add more streams as needed
]

export default function StreamsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container py-8">
          <h1 className="mb-8 text-4xl font-bold">Live Streams</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {streams.map((stream) => (
              <Card key={stream.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="h-[200px] w-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                      LIVE
                    </div>
                    <div className="absolute bottom-2 right-2 flex items-center rounded bg-black/70 px-2 py-1 text-xs text-white">
                      <Users className="mr-1 h-3 w-3" />
                      {stream.viewers.toLocaleString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-2">{stream.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{stream.streamer}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stream.category}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Watch Stream</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

