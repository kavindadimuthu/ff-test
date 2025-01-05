'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { clothing } from '../../../data/index'
import { ShirtModel } from '@/assets/clothing/shirt'

export default function Page({ params }) {
  return (
    (<div className="grid grid-cols-[300px_1fr_300px] h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <div className="bg-[#121212] border-r border-white/10 px-6 py-4 overflow-y-auto custom-scroll">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/clothing">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Clothing Library</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {clothing.map((image) => (
            <div
              key={image}
              className="aspect-square bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
              <img src={image.image} alt={image} className="w-full h-full object-cover" />
              <div
                className="fixed bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                {/* <p className="text-sm font-medium">{type}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="relative">
        <Canvas camera={{ position: [0, 0, 2] }} style={{ backgroundImage: 'url(/img/bg.png)', backgroundSize: 'cover' }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <ShirtModel />
            
            {/* <mesh>
              <boxGeometry args={[1, 1, 0.1]} />
              <meshStandardMaterial color="white" />
            </mesh> */}
            
            <OrbitControls />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>
      {/* Right Sidebar - Customization */}
      <div className="bg-[#121212] border-l border-white/10 p-6">
        <h2 className="text-xl font-bold mb-6">Customization</h2>
        
        <div className="space-y-6">
          {/* Size Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Size Options</h3>
            <RadioGroup defaultValue="s">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size.toLowerCase()} id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Color Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Color Options</h3>
            <RadioGroup defaultValue="purple">
              {['Purple', 'Blue', 'Green', 'Light blue', 'Brown'].map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem value={color.toLowerCase()} id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`}>{color}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-3">
          <Link href="/dressy-studio">
            <Button variant="secondary">
              Dress
            </Button>
          </Link>
          <Link href="/avatar">
            <Button className="text-white bg-indigo-600 hover:bg-indigo-700">
              Select avatar
            </Button>
          </Link>
        </div>
      </div>
    </div>)
  );
}

