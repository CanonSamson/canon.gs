import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'

// Polyfill localStorage for SSR to prevent "localStorage.getItem is not a function"
if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalAny = global as any;
  if (typeof globalAny.localStorage === 'undefined' || globalAny.localStorage === null || typeof globalAny.localStorage.getItem !== 'function') {
    globalAny.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    };
  }
}

const dmSans = localFont({
  src: '../public/font/DMSans-Font.ttf'
})

export const metadata: Metadata = {
  title: 'Canon Gs',
  description: 'Hi, my name is Samson Canon'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={dmSans.className}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
