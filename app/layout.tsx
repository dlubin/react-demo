import Header from '@/components/header'
import './globals.scss'
import { Inter } from 'next/font/google'
import CartProvider from '@/components/cartProvider'

import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeOverlay from '@/components/welcomeOverlay';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Games -  A Demo Site',
  description: 'A pretend video game store made in React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-14 w-full text-slate-400">
            {children}
          </main>
        </CartProvider>
        <WelcomeOverlay></WelcomeOverlay>
      </body>
    </html>
  )
}
