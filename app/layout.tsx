import Header from '@/components/header'
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Shop',
  description: 'A pretend video game store made in React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Header />{children}</body>
    </html>
  )
}
