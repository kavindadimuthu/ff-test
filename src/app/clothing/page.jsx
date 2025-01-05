import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { clothing } from '../../data/index'

export default function Page() {

  return (
    (<main className="container mx-auto px-20 py-8">
      <h1 className="text-3xl font-bold mb-8">Clothing Library</h1>
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-12">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="search"
          placeholder="Input here..."
          className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
      </div>
      {/* Clothing Grid */}
      <Link href="/clothing/2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clothing.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <div
                className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </main>)
  );
}

