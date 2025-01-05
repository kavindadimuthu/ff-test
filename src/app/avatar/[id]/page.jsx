'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { avatars } from '@/data'
import { MaleModel } from '@/assets/avatar/male'

export default function Page({ params }) {
  return (
    (<div className="grid grid-cols-[300px_1fr_300px] h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <div className="bg-[#121212] border-r border-white/10 p-6 overflow-y-auto custom-scroll">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/avatar">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Avatar Library</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {avatars.map((image) => (
            <div
              key={image}
              className="aspect-square bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
              <img src={image.image} alt={image} className="w-full h-full object-cover" />
              <div
                className="fixed bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                {/* <p className="text-sm font-medium">{image}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="relative">
        <Canvas camera={{ position: [0, 1.5, 3] }} style={{ backgroundImage: 'url(/img/bg.png)', backgroundSize: 'cover' }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <MaleModel />
            
            {/* <mesh>
              <boxGeometry args={[1, 2, 1]} />
              <meshStandardMaterial color="white" />
            </mesh> */}
            
            <OrbitControls />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>

      </div>
      {/* Right Sidebar - Customization */}
            <div className="bg-[#121212] border-l border-white/10 p-6">
      
              <div className="absolute bottom-6 right-6 flex gap-3">
                <Link href="/clothing">
                  <Button className="text-white bg-indigo-600 hover:bg-indigo-700">
                    Select clothing
                  </Button>
                </Link>
              </div>
            </div>
    </div>)
  );
}

