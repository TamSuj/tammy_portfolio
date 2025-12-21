"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import studygram from "../../app/assets/studygram.png"
import journeyai from "../../app/assets/journeyai.png"
import smilesforspeech from "../../app/assets/smilesforspeech.png"

interface Card {
  id: number
  contentType: 1 | 2 | 3
}

const cardData = {
  1: {
    title: "Studygram",
    description: "Online community for students to share study resources, tips, and connect",
    image: studygram,
    link: "https://github.com/TamSuj/Studygram"
  },
  2: {
    title: "JourneyAI",
    description: "AI-powered travel planner with map-based itineraries",
    image: journeyai,
    link: "https://github.com/TamSuj/JourneyAI"
  },
  3: {
    title: "Smiles for Speech",
    description: "Autism detection tool for Ghana",
    image: smilesforspeech,
    link: "https://devpost.com/software/smiles-for-speech-early-autism-detection-tool"
  },
}

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }: { contentType: 1 | 2 | 3 }) {
  const data = cardData[contentType]
  // Handle both imported images (objects with .src) and URL strings
  const imageSrc = typeof data.image === 'string' ? data.image : data.image?.src || "/placeholder.svg"

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10">
        <img
          src={imageSrc}
          alt={data.title}
          className="h-full w-full select-none object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-neutral-900">{data.title}</span>
          <span className="text-neutral-600">{data.description}</span>
        </div>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-neutral-900 pl-4 pr-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          More
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-neutral-200 bg-white p-1 shadow-lg will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    setIsAnimating(true)

    const nextContentType = ((cards[2].contentType % 3) + 1) as 1 | 2 | 3

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-neutral-200 py-4">
        <button
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-neutral-200 bg-black px-3 font-medium text-white transition-all hover:bg-neutral-600 active:bg-neutral-700 active:scale-[0.98]"
        >
          Next Project
        </button>
      </div>
    </div>
  )
}

