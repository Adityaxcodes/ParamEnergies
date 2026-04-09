import { memo, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type AnimationType = "text" | "word" | "character" | "line"
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"

type TextElement = keyof JSX.IntrinsicElements

interface TextAnimateProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /**
   * The text content to animate
   */
  children: string
  /**
   * The class name to be applied to the component
   */
  className?: string
  /**
   * The class name to be applied to each segment
   */
  segmentClassName?: string
  /**
   * The delay before the animation starts
   */
  delay?: number
  /**
   * The duration of the animation
   */
  duration?: number
  /**
   * The element type to render
   */
  as?: TextElement
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean
  /**
   * Whether to animate only once
   */
  once?: boolean
  /**
   * The animation preset to use
   */
  animation?: AnimationVariant
  /**
   * Whether to enable accessibility features (default: true)
   */
  accessible?: boolean
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
}

const animationNames: Record<AnimationVariant, string> = {
  fadeIn: "text-animate-fade-in",
  blurIn: "text-animate-blur-in",
  blurInUp: "text-animate-blur-in-up",
  blurInDown: "text-animate-blur-in-down",
  slideUp: "text-animate-slide-up",
  slideDown: "text-animate-slide-down",
  slideLeft: "text-animate-slide-left",
  slideRight: "text-animate-slide-right",
  scaleUp: "text-animate-scale-up",
  scaleDown: "text-animate-scale-down",
}

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.2,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  accessible = true,
  ...props
}: TextAnimateProps) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView) {
      return undefined
    }

    const node = containerRef.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, startOnView])

  const segments = useMemo(() => {
    switch (by) {
      case "word":
        return children.split(/(\s+)/)
      case "character":
        return children.split("")
      case "line":
        return children.split("\n")
      case "text":
      default:
        return [children]
    }
  }, [by, children])

  return (
    <Component
      ref={containerRef as React.Ref<HTMLElement>}
      className={cn("whitespace-pre-wrap", className)}
      aria-label={accessible ? children : undefined}
      {...props}
    >
      {accessible && <span className="sr-only">{children}</span>}
      {segments.map((segment, i) => (
        <span
          key={`${by}-${segment}-${i}`}
          className={cn(
            "text-animate-segment",
            by === "line" ? "block" : "inline-block whitespace-pre",
            segmentClassName
          )}
          style={{
            animationName: animationNames[animation],
            animationDuration: `${duration}s`,
            animationDelay: `${delay + i * staggerTimings[by]}s`,
            animationTimingFunction: "ease",
            animationFillMode: "both",
            animationPlayState: isInView ? "running" : "paused",
          }}
          aria-hidden={accessible ? true : undefined}
        >
          {segment}
        </span>
      ))}
    </Component>
  )
}

export const TextAnimate = memo(TextAnimateBase)
