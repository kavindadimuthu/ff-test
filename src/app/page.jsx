import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    (<main className="container mx-auto px-4">
      <div
        className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
          Virtual Fashion Studio
        </h1>
        <p className="max-w-[800px] text-lg md:text-xl text-gray-400 mb-8">
          Experience the future of fashion with our 3D virtual try-on
          technology. Customize and preview your perfect fit before you
          buy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dressy-studio">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Try Now
            </Button>
          </Link>
          <Link href="/clothing">
            <Button
              variant="outline"
              size="lg"
              className="bg-black border-white text-white hover:bg-white/10">
              Browse Collection
            </Button>
          </Link>
        </div>
      </div>
    </main>)
  );
}

