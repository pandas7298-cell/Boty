"use client"

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useCart } from "./cart-context"
import { formatJPY } from "@/lib/utils"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isOpen, setIsOpen, itemCount, subtotal } = useCart()

  const shipping = 0
  const total = subtotal + shipping

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="h-full w-full sm:max-w-[440px]">
        <DrawerHeader className="border-b border-border/50 p-6 py-2.5">
          <DrawerTitle className="font-serif text-2xl">カート</DrawerTitle>
          <DrawerDescription>{itemCount}点</DrawerDescription>
        </DrawerHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">カートは空です。やわらかな触り心地のスクイーズをご覧ください。</p>
              <DrawerClose asChild>
                <button
                  type="button"
                  className="mt-4 text-primary hover:underline text-sm"
                >
                  買い物を続ける
                </button>
              </DrawerClose>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base text-foreground mb-1 font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-muted boty-transition rounded-l-full"
                          aria-label="数量を減らす"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted boty-transition rounded-r-full"
                          aria-label="数量を増やす"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive boty-transition"
                        aria-label="商品を削除する"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-medium text-foreground">{formatJPY(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <DrawerFooter className="border-t border-border/50 p-6 gap-4">
            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>小計</span>
                <span>{formatJPY(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>送料</span>
                <span>{shipping === 0 ? '無料' : formatJPY(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-medium text-foreground pt-2 border-t border-border/50">
                <span>合計</span>
                <span>{formatJPY(total)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 boty-transition"
            >
              レジに進む
            </button>

            <DrawerClose asChild>
              <button
                type="button"
                className="w-full border border-border text-foreground py-4 rounded-full font-medium hover:bg-muted boty-transition"
              >
                買い物を続ける
              </button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
