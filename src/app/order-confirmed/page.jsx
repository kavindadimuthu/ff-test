'use client'

import Link from 'next/link'
import { Check, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// This would typically come from your order context or API
const orderDetails = {
  orderNumber: "ORD-2024-001",
  item: "Classic Cotton T-Shirt",
  size: "M",
  color: "Navy Blue",
  measurements: {
    chest: 102,
    waist: 96,
    hips: 104,
    length: 71,
    shoulders: 44,
  }
}

function OrderConfirmedPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-background p-4">
      <Card className="relative w-full max-w-2xl space-y-6 p-8 text-center">
        <Link
          href="/"
          className="absolute left-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Home className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary">
          <Check className="h-12 w-12 text-primary-foreground" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Order Confirmed</h1>
          <p className="text-muted-foreground">
            Thank you for your order. You will receive email confirmation shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            Check the status of your order on the{" "}
            <Link href="/orders" className="text-primary hover:underline">
              Order tracking
            </Link>{" "}
            page
          </p>
        </div>

        <Separator className="my-4" />

        <div className="mx-auto max-w-lg space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Order Number</p>
              <p className="text-muted-foreground">{orderDetails.orderNumber}</p>
            </div>
            <div>
              <p className="font-medium">Item</p>
              <p className="text-muted-foreground">{orderDetails.item}</p>
            </div>
            <div>
              <p className="font-medium">Size</p>
              <p className="text-muted-foreground">{orderDetails.size}</p>
            </div>
            <div>
              <p className="font-medium">Color</p>
              <p className="text-muted-foreground">{orderDetails.color}</p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="mb-3 font-medium">Custom Measurements</h3>
            <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-muted-foreground">Chest</p>
                <p className="font-medium">{orderDetails.measurements.chest} cm</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Waist</p>
                <p className="font-medium">{orderDetails.measurements.waist} cm</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Hips</p>
                <p className="font-medium">{orderDetails.measurements.hips} cm</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Length</p>
                <p className="font-medium">{orderDetails.measurements.length} cm</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Shoulders</p>
                <p className="font-medium">{orderDetails.measurements.shoulders} cm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 sm:flex-row sm:gap-4">
          <Button asChild className="flex-1" size="lg">
            <Link href="/clothing">Continue Shopping</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => {
              // Share functionality would go here
              console.log('Share clicked')
            }}
          >
            Share
          </Button>
        </div>
      </Card>
    </div>
  )
}

export { OrderConfirmedPage as default }

