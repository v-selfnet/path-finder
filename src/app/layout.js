import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin']
})

export const metadata = {
  title: 'Path Findre',
  description: 'I am a Muslim & I am Proud',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark' className='transition-all'>
      <body className={roboto.className}>
        <Navbar />
        <div className='p-10'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
