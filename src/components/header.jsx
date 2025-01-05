'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { MoonIcon, Settings } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()

  return (
    (<header className="w-full border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <img src="/img/logo.png" alt="FashionFusion" className="h-6 w-6" />
            FashionFusion
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/avatar"
              className={`text-sm hover:text-gray-300 ${pathname.startsWith('/avatar') ? 'text-white' : 'text-gray-400'}`}>
              Avatar
            </Link>
            <Link
              href="/clothing"
              className={`text-sm hover:text-gray-300 ${pathname.startsWith('/clothing') ? 'text-white' : 'text-gray-400'}`}>
              Clothing
            </Link>
            <Link
              href="/dressy-studio"
              className={`text-sm hover:text-gray-300 ${pathname.startsWith('/dressy-studio') ? 'text-white' : 'text-gray-400'}`}>
              Dressy Studio
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
              <MoonIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-600 overflow-hidden">
              <img
                src="/img/dp.png"
                alt="Profile"
                className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>)
  );
}

