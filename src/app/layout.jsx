import { Inter } from 'next/font/google'
import Header from '../components/header'
import '@/styles/globals.css'
import '@/styles/custom-scroll.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FashionFusion - Virtual Fashion Studio',
  description: 'Experience the future of fashion with our 3D virtual try-on technology',
}

export default function RootLayout({ children }) {
  return (
    (<html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>)
  );
}

