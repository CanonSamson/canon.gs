import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const dmSans = localFont({
  src: '../public/font/DMSans-Font.ttf'
})

export const metadata: Metadata = {
  title: 'Canon Gs',
  description: 'Hi, my name is Canon Samson'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={dmSans.className}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
