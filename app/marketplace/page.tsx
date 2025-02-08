import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const items = [
  {
    id: 1,
    title: "Digital Art Collection",
    price: "$120",
    image: "/placeholder.svg?height=200&width=300",
    seller: "CreativeArtist",
  },
  {
    id: 2,
    title: "Custom Website Template",
    price: "$80",
    image: "/placeholder.svg?height=200&width=300",
    seller: "WebDev_Pro",
  },
  {
    id: 3,
    title: "3D Model Package",
    price: "$150",
    image: "/placeholder.svg?height=200&width=300",
    seller: "3D_Designer",
  },
  // Add more items as needed
]

export default function MarketplacePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container py-8">
          <h1 className="mb-8 text-4xl font-bold">Marketplace</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">By {item.seller}</p>
                  <p className="mt-2 text-lg font-bold text-primary">{item.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Purchase Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

