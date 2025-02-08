import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const members = [
  {
    id: 1,
    name: "Sarah Chen",
    username: "@sarahc",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Developer",
    followers: 1234,
  },
  {
    id: 2,
    name: "Alex Johnson",
    username: "@alexj",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Artist",
    followers: 856,
  },
  {
    id: 3,
    name: "Maria Garcia",
    username: "@mariag",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Content Creator",
    followers: 2341,
  },
  // Add more members as needed
]

export default function BrowsePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container py-8">
          <h1 className="mb-8 text-4xl font-bold">Browse Community</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <Card key={member.id}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.username}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.followers} followers</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

