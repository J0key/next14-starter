import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0E0C23] px-4 lg:px-0 max-w-7xl mx-auto  ${inter.className} text-white`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}