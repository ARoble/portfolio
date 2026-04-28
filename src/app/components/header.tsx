'use client'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="flex justify-between items-center py-7">
      {/* <Link href="/">
        <Image
          height={40}
          width={40}
          alt="logo"
          src="/images/ar.png"
          className="h-10 rounded-md shadow-lg"
          style={{ width: 'auto' }}
          loading="eager"
        />
      </Link> */}

      <div className="space-x-3">
        <Link href="/" className={pathname == '/' ? 'text-white underline' : 'text-gray'}>
          Index
        </Link>
        {/* <Link href="/about" className={pathname == '/about' ? 'text-white underline' : 'text-gray'}>
          About
        </Link> */}
        <Link href="/blog" className={pathname == '/blog' ? 'text-white underline' : 'text-gray'}>
          Blog
        </Link>
        <Link href="/projects" className={pathname == '/projects' ? 'text-white underline' : 'text-gray'}>
          Projects
        </Link>
        {/* <a>Contact</a> */}
      </div>

      <button onClick={() => setTheme(theme === 'dark' || theme === 'system' ? 'light' : 'dark')}>
        {mounted && (theme === 'dark' ? <FiSun size={20} /> : <BsMoonFill />)}
      </button>
    </div>
  )
}
