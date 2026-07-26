"use client";

import { ReactNode, useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type SmoothScrollProps = {
  children: ReactNode
}

export default function AnimationProvider({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
    })

    const handleLenisScroll = () => {
      ScrollTrigger.update()
    }

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000)
    }

    lenis.on("scroll", handleLenisScroll)
    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off("scroll", handleLenisScroll)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}