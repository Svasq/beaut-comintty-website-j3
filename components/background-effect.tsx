"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export function BackgroundEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create a grid of points
    const geometry = new THREE.BufferGeometry()
    const points = []

    for (let i = 0; i < 1000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000)
      const y = THREE.MathUtils.randFloatSpread(1000)
      const z = THREE.MathUtils.randFloatSpread(1000)
      points.push(x, y, z)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))

    const material = new THREE.PointsMaterial({
      color: "#4B9CFF",
      size: 2,
      transparent: true,
      opacity: 0.5,
    })

    const pointCloud = new THREE.Points(geometry, material)
    scene.add(pointCloud)

    camera.position.z = 500

    const animate = () => {
      requestAnimationFrame(animate)
      pointCloud.rotation.x += 0.0001
      pointCloud.rotation.y += 0.0001
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}

