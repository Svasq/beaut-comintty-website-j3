import { Button } from "@/components/ui/button"

export function StreamingSection() {
  return (
    <section id="streaming" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Live Streaming</h2>
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Experience high-quality, interactive live streaming with our community.
          </p>
          <Button asChild>
            <a href="/streams">Explore Streams</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

