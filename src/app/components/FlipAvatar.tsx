'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function FlipAvatar() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-38 w-38 rounded-full flex-shrink-0" style={{ perspective: '600px' }}>
      <div
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s ease',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Front — photo */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <Image
            src="/images/roble1.jpg"
            fill
            className="object-cover object-center"
            sizes="152px"
            loading="eager"
            alt="Roble"
          />
        </div>
        {/* Back — avatar */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Image
            src="/images/avatar-bg.png"
            fill
            className="object-cover object-center"
            sizes="152px"
            alt="Roble avatar"
          />
        </div>
      </div>
    </div>
  )
}
