import { SiteHeader } from "@/components/site-header"
import { BackgroundEffect } from "@/components/background-effect"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffect />
      <SiteHeader />
      <main className="flex-1">
        <section className="container flex max-w-screen-2xl flex-col items-center gap-4 pb-8 pt-32 md:pt-40">
          <div className="relative w-full">
            <div className="absolute -top-4 flex w-full justify-center">
              <div className="rounded-full bg-background/95 px-4 py-1 text-sm text-primary backdrop-blur-sm">
                Platform is now generally available
                <Button variant="link" className="pl-2 text-sm font-normal text-primary">
                  Get started →
                </Button>
              </div>
            </div>
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                A collaborative
                <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  AI-powered platform
                </span>
              </h1>
              <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                Built to help ambitious teams achieve more. Connect, collaborate, and create together.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get started
            </Button>
            <Button size="lg" variant="outline">
              View documentation
            </Button>
          </div>
          <div className="mt-24 flex flex-col items-center gap-8">
            <div className="text-center text-sm text-muted-foreground">Trusted by innovative teams worldwide</div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-32 rounded-lg bg-muted/20" style={{ opacity: 0.5 }} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

