import React from 'react'
import './styles.css'
import Header from '../components/header'
import { ThemeProvider } from '../components/ThemeProvider'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ["latin"] })

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          <main>
            <div className="px-4 md:px-0 md:w-[70%] lg:w-[55%] xl:w-[35%] mx-auto">
              <Header />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
