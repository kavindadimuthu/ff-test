'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Play } from 'lucide-react'
import { avatars, clothing } from '../../data/index'

export default function Page() {
  const selectedAvatar = avatars[0];
  const selectedClothing = clothing[0];
  return (
    (<div className="grid grid-cols-[300px_1fr_300px] h-[calc(100vh-4rem)]">
      {/* Left Sidebar - Selected Models */}
      <div className="bg-[#121212] border-r border-white/10 p-6">
        <h2 className="text-xl font-bold mb-6">Selected models</h2>
        
        {/* Avatar Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-3">Avatar</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="aspect-square bg-white/10 rounded-lg overflow-hidden mb-2">
                <img
                  src={selectedAvatar.image}
                  alt={`Selected ${selectedAvatar.type} Avatar`}
                  className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-gray-400">{selectedAvatar.type}</p>
            </div>
          </div>
        </div>

        {/* Clothing Section */}
        <div>
          <h3 className="text-sm font-medium mb-3">Clothing</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="aspect-square bg-white/10 rounded-lg overflow-hidden mb-2">
                <img
                  src={selectedClothing.image}
                  alt={selectedClothing.name}
                  className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-gray-400">{selectedClothing.name}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content - 3D Viewer */}
      <div className="relative">
        <Canvas camera={{ position: [0, 1.5, 3] }} style={{ backgroundImage: 'url(/img/bg.png)', backgroundSize: 'cover' }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            
            <mesh>
              <boxGeometry args={[1, 2, 1]} />
              <meshStandardMaterial color="white" />
            </mesh>
            
            <OrbitControls />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>
      {/* Right Sidebar - Animation Controls */}
      <div className="bg-[#121212] border-l border-white/10 p-6">
        <h2 className="text-xl font-bold mb-6">Animation</h2>
        
        <div className="space-y-8">
          {/* Animation Type */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Type</h3>
            <RadioGroup defaultValue="idle">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="idle" id="idle" />
                <Label htmlFor="idle">Idle</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="walking" id="walking" />
                <Label htmlFor="walking">Walking</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Animation Speed */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Speed</h3>
            <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-3">
          <div className=" flex gap-3">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
            {/* <Play className="w-4 h-4 mr-2" /> */}
            Capture Image
          </Button>
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
              <Play className="w-4 h-4 mr-2" />
              Simulate
            </Button>
            
          </div>
          <Button variant="secondary">
              Place order
          </Button>
        </div>
      </div>
    </div>)
  );
}

