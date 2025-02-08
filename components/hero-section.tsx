"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <Canvas className="absolute inset-0">
        <OrbitControls enableZoom={false} />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Welcome to Our Community
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
              Join our vibrant community, explore the marketplace, and experience live streaming like never before.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/signin">Sign In</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

