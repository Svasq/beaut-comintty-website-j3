import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "General Discussion",
    description: "General community discussions and topics",
    threads: 156,
    members: 1234,
  },
  {
    id: 2,
    name: "Marketplace Help",
    description: "Get help with buying and selling on the marketplace",
    threads: 89,
    members: 567,
  },
  {
    id: 3,
    name: "Streaming Support",
    description: "Technical support and discussions about streaming",
    threads: 234,
    members: 890,
  },
  {
    id: 4,
    name: "Introductions",
    description: "Introduce yourself to the community",
    threads: 567,
    members: 2341,
  },
  // Add more categories as needed
]

export default function ForumsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container py-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-4xl font-bold">Forums</h1>
            <Button>Create Thread</Button>
          </div>
          <div className="grid gap-4">
            {categories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{category.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MessageCircle className="mr-1 h-4 w-4" />
                      {category.threads} threads
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {category.members} members
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

