import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const items = [
  { id: 1, name: "Item 1", price: "$10", description: "Description for Item 1" },
  { id: 2, name: "Item 2", price: "$20", description: "Description for Item 2" },
  { id: 3, name: "Item 3", price: "$30", description: "Description for Item 3" },
]

export function Marketplace() {
  return (
    <section id="marketplace" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Marketplace</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
                <p className="font-bold mt-2">{item.price}</p>
              </CardContent>
              <CardFooter>
                <Button>Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

