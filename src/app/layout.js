import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Path Findre',
  description: 'I am a Muslim & I am Proud',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
